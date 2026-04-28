import { NextResponse } from "next/server";
import { findLessonById } from "@/lib/curriculum";

export async function GET(
  request: Request,
  context: {
    params: Promise<{ lessonId: string }> | { lessonId: string };
  }
) {
  const params = await context.params;
  const lesson = findLessonById(params.lessonId);

  if (!lesson) {
    return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
  }

  return NextResponse.json(lesson);
}
