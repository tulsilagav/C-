export interface XpCalculationOptions {
  baseXp: number;
  correctCount: number;
  totalCount: number;
  streak: number;
  hasDoubleXp: boolean;
}

export function calculateXp(options: XpCalculationOptions): number {
  const { baseXp, correctCount, totalCount, streak, hasDoubleXp } = options;

  // Accuracy bonus: up to 50% bonus depending on accuracy
  const accuracy = correctCount / totalCount;
  const accuracyBonus = Math.floor(baseXp * (accuracy - 0.5)); // 0 to 50% bonus for 50-100% accuracy

  // Streak bonus: +10% per 5-day streak (max 50% at 20+ days)
  const streakBonus = Math.floor(baseXp * Math.min(0.5, (streak / 5) * 0.1));

  // Base calculation
  let xp = baseXp + accuracyBonus + streakBonus;

  // Double XP multiplier
  if (hasDoubleXp) {
    xp *= 2;
  }

  return Math.floor(xp);
}

export function getStreakDaysNeeded(currentStreak: number, targetLevel: number): number {
  // Returns how many more days needed to reach target streak level
  return Math.max(0, targetLevel * 5 - currentStreak);
}

export function calculateLevel(totalXp: number): number {
  // XP thresholds: each level requires 100 * level XP
  // Total XP for level n = 100 * (1 + 2 + 3 + ... + n) = 100 * n*(n+1)/2
  // Solve: totalXp = 100 * n*(n+1)/2 for n
  const n = Math.floor((-1 + Math.sqrt(1 + 8 * totalXp / 100)) / 2);
  return Math.max(1, n);
}

export function calculateXpForLevel(level: number): number {
  return Math.floor(100 * (level * (level + 1)) / 2);
}

export function getXpProgressToNextLevel(totalXp: number): { current: number; needed: number } {
  const currentLevel = calculateLevel(totalXp);
  const nextLevel = currentLevel + 1;

  const currentLevelXp = calculateXpForLevel(currentLevel);
  const nextLevelXp = calculateXpForLevel(nextLevel);

  return {
    current: totalXp - currentLevelXp,
    needed: nextLevelXp - currentLevelXp,
  };
}
