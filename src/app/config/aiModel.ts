import { GoogleGenAI } from '@google/genai';
import { courseOutlineContent } from './aiInstructions';

// Google Gemini AI
const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});

const model = 'gemini-1.5-pro';

// Course outline model
type ModelConfig = {
  model: string;
  config: { responseMimeType: string };
  contents: { role: string; parts: { text: string }[] }[];
};

export const courseOutlineAIModel: ModelConfig = {
  model,
  config: {
    responseMimeType: 'application/json',
  },
  contents: courseOutlineContent,
};

interface GeminiError {
  status?: number;
  details?: Array<{
    '@type': string;
    retryDelay?: string;
  }>;
}

export async function sendMessage(modelConfig: ModelConfig, prompt: string) {
  const maxRetries = 3;
  let retryCount = 0;
  let lastError: Error = new Error('Max retries exceeded');

  while (retryCount < maxRetries) {
    try {
      // Generate content stream
      const response = await ai.models.generateContentStream({
        model: modelConfig.model,
        config: modelConfig.config,
        contents: [
          ...modelConfig.contents,
          {
            role: 'user',
            parts: [{ text: prompt }],
          },
        ],
      });

      let result = '';
      for await (const chunk of response) {
        result += chunk.text;
      }
      return result;
    } catch (error) {
      lastError = error as Error;
      const geminiError = error as GeminiError;
      if (geminiError?.status === 429) {
        // Extract retry delay from error if available, otherwise use exponential backoff
        const retryDelay = geminiError?.details?.[2]?.retryDelay
          ? parseInt(geminiError.details[2].retryDelay) * 1000
          : Math.min(1000 * Math.pow(2, retryCount), 30000);

        console.log(
          `Rate limited. Retrying in ${retryDelay / 1000} seconds...`
        );
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
        retryCount++;
      } else {
        throw error;
      }
    }
  }

  throw lastError;
}
