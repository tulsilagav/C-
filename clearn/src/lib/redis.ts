import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

export async function getRateLimit(userId: string, action: string) {
  const key = `ratelimit:${userId}:${action}`;
  const count = await redis.incr(key);

  if (count === 1) {
    await redis.expire(key, 60); // Reset after 60 seconds
  }

  return count;
}

export async function getLeaderboard(league: string, limit: number = 10) {
  const key = `leaderboard:${league}`;
  const data = await redis.zrange(key, 0, limit - 1, { rev: true });
  return data;
}

export async function setLeaderboardEntry(league: string, userId: string, xp: number) {
  const key = `leaderboard:${league}`;
  await redis.zadd(key, { score: xp, member: userId });
}
