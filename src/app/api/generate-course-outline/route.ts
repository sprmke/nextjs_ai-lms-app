import { generateCourseOutline } from '@/app/config/aiInstructions';
import { courseOutlineAIModel, sendMessage } from '@/app/config/aiModel';
import { db } from '@/app/config/db';
import { STUDY_MATERIALS_TABLE } from '@/app/config/schema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { courseId, topic, courseType, difficultyLevel, createdBy } =
    await req.json();

  // Generate course outline using AI
  const prompt = generateCourseOutline(topic, courseType, difficultyLevel);
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
