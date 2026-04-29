import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { findLessonById } from "@/lib/curriculum";

export async function GET(
  request: Request,
  context: {
    params: Promise<{ lessonId: string }> | { lessonId: string };
  }
) {
  try {
    const params = await context.params;
    const lesson = findLessonById(params.lessonId);

    if (!lesson) {
      return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
    }

    const session = await auth();

    if (!session?.user?.id) {
      // Return lesson without progress for unauthenticated users
      return NextResponse.json(lesson);
    }

    // Get user progress for this lesson
    const progress = await prisma.userLessonProgress.findUnique({
      where: {
        userId_lessonId: {
          userId: session.user.id,
          lessonId: params.lessonId,
        },
      },
    });

    const lessonWithProgress = {
      ...lesson,
      progress: progress ? {
        completed: progress.completed,
        stars: progress.stars,
        xpEarned: progress.xpEarned,
        attempts: progress.attempts,
        lastAttemptAt: progress.lastAttemptAt,
        completedAt: progress.completedAt,
      } : null,
    };

    return NextResponse.json(lessonWithProgress);
  } catch (error) {
    console.error("Error fetching lesson:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  context: {
    params: Promise<{ lessonId: string }> | { lessonId: string };
  }
) {
  try {
    const params = await context.params;
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { completed, stars, xpEarned, questionAttempts } = body;

    // Update or create lesson progress
    const progress = await prisma.userLessonProgress.upsert({
      where: {
        userId_lessonId: {
          userId: session.user.id,
          lessonId: params.lessonId,
        },
      },
      update: {
        completed,
        stars,
        xpEarned,
        attempts: { increment: 1 },
        lastAttemptAt: new Date(),
        completedAt: completed ? new Date() : undefined,
      },
      create: {
        userId: session.user.id,
        lessonId: params.lessonId,
        completed,
        stars,
        xpEarned,
        attempts: 1,
        lastAttemptAt: new Date(),
        completedAt: completed ? new Date() : undefined,
      },
    });

    // Save question attempts if provided
    if (questionAttempts && Array.isArray(questionAttempts) && session.user?.id) {
      const userId = session.user.id;
      await prisma.questionAttempt.createMany({
        data: questionAttempts.map((attempt: any) => ({
          userId,
          questionId: attempt.questionId,
          correct: attempt.correct,
          answer: attempt.answer,
          feedback: attempt.feedback,
          xpGained: attempt.xpGained || 0,
        })),
      });
    }

    // Update user XP and stats if lesson completed
    if (completed) {
      const lesson = findLessonById(params.lessonId);
      if (lesson) {
        await prisma.user.update({
          where: { id: session.user.id },
          data: {
            totalXp: { increment: lesson.lesson.xpReward },
            weeklyXp: { increment: lesson.lesson.xpReward },
          },
        });
      }
    }

    return NextResponse.json({ success: true, progress });
  } catch (error) {
    console.error("Error updating lesson progress:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
