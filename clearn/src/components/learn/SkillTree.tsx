"use client";

import React, { useState } from "react";
import Link from "next/link";
import { curriculum } from "@/lib/curriculum";
import { Lock, CheckCircle, Circle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface LessonStatus {
  completed: boolean;
  stars: number;
}

export const SkillTree: React.FC<{ progressData?: any }> = ({ progressData }) => {
  const [expandedUnit, setExpandedUnit] = useState<string | null>(null);

  const getProgressForLesson = (lessonId: string): LessonStatus => {
    const progress = progressData?.[lessonId];
    return {
      completed: progress?.completed || false,
      stars: progress?.stars || 0,
    };
  };

  const getUnitProgress = (unitId: string) => {
    const unit = curriculum.find(u => u.id === unitId);
    if (!unit) return { completed: 0, total: 0 };

    const lessons = unit.lessons;
    const completed = lessons.filter(
      l => getProgressForLesson(l.id).completed
    ).length;

    return { completed, total: lessons.length };
  };

  return (
    <div className="space-y-6">
      {curriculum.map((unit) => {
        const unitProgress = getUnitProgress(unit.id);
        const isExpanded = expandedUnit === unit.id;
        const isUnlocked = unitProgress.completed > 0 || unit.unitNumber === 1;

        return (
          <div
            key={unit.id}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all"
          >
            {/* Unit Header */}
            <button
              onClick={() => setExpandedUnit(isExpanded ? null : unit.id)}
              className="w-full text-left"
              disabled={!isUnlocked}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  {!isUnlocked ? (
                    <Lock size={32} className="text-gray-400" />
                  ) : (
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: unit.color }}
                    >
                      {unit.unitNumber}
                    </div>
                  )}

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {unit.title}
                    </h3>
                    <p className="text-sm text-gray-600">{unit.description}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="text-sm font-semibold text-gray-700">
                    {unitProgress.completed}/{unitProgress.total}
                  </div>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full transition-all"
                      style={{
                        width: `${(unitProgress.completed / unitProgress.total) * 100}%`,
                        backgroundColor: unit.color,
                      }}
                    />
                  </div>
                </div>
              </div>
            </button>

            {/* Lessons List */}
            {isExpanded && isUnlocked && (
              <div className="mt-6 space-y-3 border-t border-gray-200 pt-6">
                {unit.lessons.map((lesson, index) => {
                  const lessonProgress = getProgressForLesson(lesson.id);
                  const isFirstLesson = index === 0;
                  const previousLessonCompleted =
                    index === 0 ||
                    getProgressForLesson(unit.lessons[index - 1].id).completed;
                  const isLessonUnlocked = isFirstLesson || previousLessonCompleted;

                  return (
                    <Link
                      key={lesson.id}
                      href={isLessonUnlocked ? `/lesson/${lesson.id}` : "#"}
                    >
                      <div
                        className={`p-4 rounded-2xl border-2 transition-all ${
                          !isLessonUnlocked
                            ? "border-gray-200 bg-gray-50 cursor-not-allowed opacity-60"
                            : lessonProgress.completed
                            ? "border-green-400 bg-green-50 cursor-pointer hover:shadow-md"
                            : "border-gray-200 bg-white cursor-pointer hover:border-gray-400"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            {!isLessonUnlocked ? (
                              <Lock size={20} className="text-gray-400" />
                            ) : lessonProgress.completed ? (
                              <CheckCircle
                                size={20}
                                className="text-green-600"
                              />
                            ) : (
                              <Circle size={20} className="text-gray-400" />
                            )}

                            <div className="flex-1">
                              <p className="font-semibold text-gray-900">
                                {lesson.lessonNumber}. {lesson.title}
                              </p>
                              <p className="text-xs text-gray-600">
                                {lesson.description}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            {lessonProgress.completed && (
                              <div className="flex gap-1">
                                {Array.from({ length: 3 }).map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-4 h-4 rounded-full ${
                                      i < lessonProgress.stars
                                        ? "bg-yellow-400"
                                        : "bg-gray-200"
                                    }`}
                                  />
                                ))}
                              </div>
                            )}

                            {isLessonUnlocked && (
                              <div className="text-right">
                                <p className="text-xs font-semibold text-gray-600">
                                  {lesson.xpReward}
                                </p>
                                <p className="text-xs text-gray-500">XP</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SkillTree;
