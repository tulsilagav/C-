import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { curriculum } from "@/lib/curriculum";

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      // Return curriculum without progress for unauthenticated users
      return NextResponse.json({ units: curriculum });
    }

    // Get user progress for all lessons
    const progressRecords = await prisma.userLessonProgress.findMany({
      where: { userId: session.user.id },
      include: {
        lesson: {
          include: {
            unit: true,
            questions: true,
          },
        },
      },
    });

    // Merge progress with curriculum data
    const unitsWithProgress = curriculum.map((unit) => ({
      ...unit,
      lessons: unit.lessons.map((lesson) => {
        const progress = progressRecords.find((p) => p.lessonId === lesson.id);
        return {
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
      }),
    }));

    return NextResponse.json({ units: unitsWithProgress });
  } catch (error) {
    console.error("Error fetching lessons:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
