import { courseOutlineAIModel, sendMessage } from '@/app/config/aiModel';
import { db } from '@/app/config/db';
import { STUDY_MATERIALS_TABLE } from '@/app/config/schema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { courseId, topic, courseType, difficultyLevel, createdBy } =
    await req.json();

  // Generate course outline using AI
  const prompt = `Generate a study material for ${topic} for ${courseType} and level of difficulty will be ${difficultyLevel} with summary of crouse, list of chapters along with summary of each chapter, topic list in each chapter, all result in JSON format`;
  const aiResponse = await sendMessage(courseOutlineAIModel, prompt);
  const aiResult = JSON.parse(aiResponse);

  console.log({
    aiResponse,
    aiResult,
  });

  // Save the result along with user input to the database
  const databaseResult = await db
    .insert(STUDY_MATERIALS_TABLE)
    .values({
      courseId,
      courseType,
      topic,
      difficultyLevel,
      courseLayout: aiResult,
      createdBy,
    })
    .returning();

  console.log('databaseResult::', databaseResult);

  return NextResponse.json({ result: databaseResult[0] });
}
