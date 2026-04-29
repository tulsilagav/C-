"use client";

import { notFound } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { findLessonById } from "@/lib/curriculum";
import { QuestionRenderer } from "@/components/lesson/QuestionRenderer";

interface LessonPageProps {
  params: {
    lessonId: string;
  };
}

interface QuestionAttempt {
  questionId: string;
  answer: string;
  correct: boolean;
  timeSpent: number;
}

export default function LessonPage({ params }: LessonPageProps) {
  const lessonId = params.lessonId;
  const lessonData = findLessonById(lessonId);

  if (!lessonData) {
    notFound();
  }

  const { unit, lesson } = lessonData;
  const [questionAttempts, setQuestionAttempts] = useState<QuestionAttempt[]>([]);
  const [startTime] = useState(Date.now());

  const handleQuestionAnswer = useCallback((questionId: string, correct: boolean, answer: string) => {
    const timeSpent = Date.now() - startTime;

    const attempt: QuestionAttempt = {
      questionId,
      answer,
      correct,
      timeSpent,
    };

    setQuestionAttempts(prev => {
      // Remove any previous attempt for this question
      const filtered = prev.filter(a => a.questionId !== questionId);
      return [...filtered, attempt];
    });
  }, [startTime]);

  const saveProgress = useCallback(async (completed: boolean = false) => {
    if (questionAttempts.length === 0) return;

    const correctAnswers = questionAttempts.filter(a => a.correct).length;
    const totalQuestions = lesson.questions.length;
    const accuracy = correctAnswers / totalQuestions;

    // Calculate stars based on accuracy and attempts
    let stars = 0;
    if (accuracy >= 0.8) stars = 3;
    else if (accuracy >= 0.6) stars = 2;
    else if (accuracy >= 0.4) stars = 1;

    const xpEarned = completed ? lesson.xpReward : Math.floor(lesson.xpReward * accuracy);

    try {
      const response = await fetch(`/api/lessons/${lessonId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          completed,
          stars,
          xpEarned,
          questionAttempts: questionAttempts.map(a => ({
            questionId: a.questionId,
            correct: a.correct,
            answer: a.answer,
            feedback: a.correct ? "Correct!" : "Incorrect",
            xpGained: a.correct ? 10 : 0,
          })),
        }),
      });

      if (!response.ok) {
        console.error('Failed to save progress');
      }
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }, [lessonId, questionAttempts, lesson.questions.length, lesson.xpReward]);

  // Save progress when component unmounts
  useEffect(() => {
    const handleBeforeUnload = () => {
      saveProgress(false);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      saveProgress(false);
    };
  }, [saveProgress]);

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-duo-green font-semibold">{unit.title}</p>
            <h1 className="text-4xl font-bold text-gray-900">{lesson.title}</h1>
            <p className="mt-3 text-gray-600 max-w-2xl">{lesson.description}</p>
          </div>
          <div className="rounded-3xl bg-duo-blue/10 px-5 py-3 text-duo-blue font-semibold">
            Unit {unit.unitNumber}
          </div>
        </div>
      </section>

      {lesson.questions.map((question) => (
        <QuestionRenderer
          key={question.id}
          question={question}
          onAnswer={handleQuestionAnswer}
        />
      ))}
    </div>
  );
}
