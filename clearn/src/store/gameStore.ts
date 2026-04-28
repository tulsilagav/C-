import { create } from "zustand";
import { League } from "@/types";

interface GameState {
  // User Stats
  userId: string | null;
  xp: number;
  weeklyXp: number;
  gems: number;
  hearts: number;
  maxHearts: number;
  streak: number;
  league: League;

  // Features
  streakFreezeActive: boolean;
  doubleXpActive: boolean;

  // Lesson State
  currentLessonId: string | null;
  currentLessonIndex: number;
  questionsAnswered: number;
  correctAnswers: number;
  lessonStartTime: number | null;

  // Actions
  setUserId: (userId: string) => void;
  setUserStats: (stats: Partial<GameState>) => void;
  addXp: (amount: number) => void;
  spendGems: (amount: number) => void;
  addHearts: (amount: number) => void;
  spendHeart: () => void;
  updateStreak: (newStreak: number) => void;
  startLesson: (lessonId: string) => void;
  answerQuestion: (correct: boolean) => void;
  completeLesson: (xpEarned: number) => void;
  resetLessonState: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  // Initial state
  userId: null,
  xp: 0,
  weeklyXp: 0,
  gems: 0,
  hearts: 5,
  maxHearts: 5,
  streak: 0,
  league: "BRONZE" as League,
  streakFreezeActive: false,
  doubleXpActive: false,

  currentLessonId: null,
  currentLessonIndex: 0,
  questionsAnswered: 0,
  correctAnswers: 0,
  lessonStartTime: null,

  // Actions
  setUserId: (userId: string) => set({ userId }),

  setUserStats: (stats: Partial<GameState>) =>
    set((state) => ({
      ...state,
      ...stats,
    })),

  addXp: (amount: number) =>
    set((state) => {
      const multiplier = state.doubleXpActive ? 2 : 1;
      const xpGain = amount * multiplier;
      return {
        xp: state.xp + xpGain,
        weeklyXp: state.weeklyXp + xpGain,
      };
    }),

  spendGems: (amount: number) =>
    set((state) => ({
      gems: Math.max(0, state.gems - amount),
    })),

  addHearts: (amount: number) =>
    set((state) => ({
      hearts: Math.min(state.maxHearts, state.hearts + amount),
    })),

  spendHeart: () =>
    set((state) => ({
      hearts: Math.max(0, state.hearts - 1),
    })),

  updateStreak: (newStreak: number) =>
    set({
      streak: newStreak,
    }),

  startLesson: (lessonId: string) =>
    set({
      currentLessonId: lessonId,
      currentLessonIndex: 0,
      questionsAnswered: 0,
      correctAnswers: 0,
      lessonStartTime: Date.now(),
    }),

  answerQuestion: (correct: boolean) =>
    set((state) => ({
      questionsAnswered: state.questionsAnswered + 1,
      correctAnswers: state.correctAnswers + (correct ? 1 : 0),
    })),

  completeLesson: (xpEarned: number) =>
    set((state) => {
      const multiplier = state.doubleXpActive ? 2 : 1;
      return {
        xp: state.xp + xpEarned * multiplier,
        weeklyXp: state.weeklyXp + xpEarned * multiplier,
        currentLessonId: null,
        currentLessonIndex: 0,
      };
    }),

  resetLessonState: () =>
    set({
      currentLessonId: null,
      currentLessonIndex: 0,
      questionsAnswered: 0,
      correctAnswers: 0,
      lessonStartTime: null,
    }),
}));
