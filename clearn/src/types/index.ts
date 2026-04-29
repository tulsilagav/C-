export type League = "BRONZE" | "SILVER" | "GOLD" | "DIAMOND";

export type QuestionType =
  | "MULTIPLE_CHOICE"
  | "TAP_TO_BUILD"
  | "FILL_BLANK"
  | "CODE_OUTPUT"
  | "BUG_FIX"
  | "WRITE_CODE";

export interface User {
  id: string;
  name?: string;
  email?: string;
  image?: string;
  totalXp: number;
  weeklyXp: number;
  gems: number;
  hearts: number;
  maxHearts: number;
  streak: number;
  league: League;
  streakFreezeActive: boolean;
  doubleXpActive: boolean;
}

export interface Lesson {
  id: string;
  unitId: string;
  lessonNumber: number;
  title: string;
  description: string;
  difficulty: number;
  xpReward: number;
}

export interface Question {
  id: string;
  lessonId?: string;
  questionNumber: number;
  type: string;
  text: string;
  explanation?: string;
  options?: string; // JSON stringified array
  correctAnswer?: string; // JSON string - index for MC, array for tap-to-build, etc.
  codeText?: string;
  testCases?: string; // JSON stringified array
}

export interface LessonProgress {
  id: string;
  userId: string;
  lessonId: string;
  completed: boolean;
  stars: number;
  xpEarned: number;
  attempts: number;
  lastAttemptAt?: Date;
  completedAt?: Date;
}

export interface Unit {
  id: string;
  unitNumber: number;
  title: string;
  description: string;
  color: string;
  lessons?: Lesson[];
}

export interface QuestionAttempt {
  id: string;
  userId: string;
  questionId: string;
  correct: boolean;
  answer?: string;
  feedback?: string;
  xpGained: number;
  createdAt: Date;
}

export interface ShopItem {
  id: ShopItemType;
  name: string;
  description: string;
  cost: number;
  icon: string;
  category: "booster" | "heart" | "other";
}

export enum ShopItemType {
  STREAK_FREEZE = "STREAK_FREEZE",
  HEART_REFILL = "HEART_REFILL",
  DOUBLE_XP = "DOUBLE_XP",
}

export const SHOP_ITEMS: Record<ShopItemType, ShopItem> = {
  [ShopItemType.STREAK_FREEZE]: {
    id: ShopItemType.STREAK_FREEZE,
    name: "Streak Freeze",
    description: "Save your streak if you miss a day",
    cost: 200,
    icon: "❄️",
    category: "booster",
  },
  [ShopItemType.HEART_REFILL]: {
    id: ShopItemType.HEART_REFILL,
    name: "Heart Refill",
    description: "Restore all your hearts",
    cost: 350,
    icon: "❤️",
    category: "heart",
  },
  [ShopItemType.DOUBLE_XP]: {
    id: ShopItemType.DOUBLE_XP,
    name: "Double XP",
    description: "Earn 2x XP for the next hour",
    cost: 500,
    icon: "⚡",
    category: "booster",
  },
};
