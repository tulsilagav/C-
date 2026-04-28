# CLearn — Duolingo-Style C Language Learning Website

A full-stack gamified C learning platform modeled after Duolingo, teaching the complete C programming language through bite-sized interactive lessons with XP, hearts, streaks, leagues, and gems.

---

## User Review Required

> [!IMPORTANT]
> **Build Location:** The project will be created at `c:\Users\Gopesh Vyas\Favorites\C-\clearn\` (inside the active workspace). Confirm if you'd prefer a different location.

> [!IMPORTANT]
> **External Services Required:** Several services need accounts/API keys before the app is fully functional:
> - **Supabase** (PostgreSQL database) — free tier
> - **Upstash Redis** (caching + rate limiting) — free tier
> - **Judge0 via RapidAPI** (C code execution) — free tier
> - **Google OAuth** and/or **GitHub OAuth** — for authentication
> 
> The app will be built with placeholder `.env.local` stubs. You'll need to fill in real keys before running.

> [!WARNING]
> **NextAuth v5 (Beta):** NextAuth v5 is still in beta. Some APIs may differ slightly from documented behavior. I'll handle this carefully.

> [!CAUTION]
> **Scope:** This is an exceptionally large project (~50+ files, ~5,000+ lines of code). Full implementation will take significant time. I'll build it systematically in layers.

---

## Open Questions

> [!IMPORTANT]
> **1. Deployment Target:** Should I configure for Vercel deployment now, or just get it running locally first?

> [!IMPORTANT]
> **2. Auth Providers:** Do you want both Google + GitHub OAuth, or just one? (Both require separate OAuth app setup.)

> [!IMPORTANT]
> **3. Code Execution:** Judge0 requires a RapidAPI key. If you don't have one, should I mock the code-running feature for now and wire it up later?

> [!IMPORTANT]
> **4. Monaco Editor:** The Monaco Editor (VS Code's editor) is heavy (~2MB). Should I use CodeMirror 6 (lighter, same quality) for the code editor components instead?

---

## Proposed Changes

### Phase 1 — Project Bootstrap

#### [NEW] `clearn/` (Next.js 14 project)
- Run `npx create-next-app@latest` with TypeScript + Tailwind + App Router + src-dir
- Install all dependencies: prisma, next-auth, zustand, framer-motion, lucide-react, canvas-confetti, highlight.js, @upstash/redis, @monaco-editor/react

---

### Phase 2 — Foundation

#### [NEW] `tailwind.config.ts`
- Full Duolingo color palette (duo-green, duo-blue, duo-red, duo-yellow, duo-purple, duo-orange)
- Nunito font family
- Custom animations: heart-break, xp-pop, bounce-in, shake
- Custom box shadows: duo-green, duo-blue, duo-red, duo-gray

#### [NEW] `prisma/schema.prisma`
Full schema with:
- User (XP, gems, hearts, streak, league, weeklyXp)
- Account, Session (NextAuth)
- Unit, Lesson, Question (curriculum)
- UserLessonProgress, QuestionAttempt, XpEvent, ShopTransaction
- Enums: League, QuestionType, ShopItem

#### [NEW] `src/data/curriculum.ts`
All 12 units of C curriculum data (seeded to DB):
1. C Fundamentals (Hello World, Variables, Data Types, I/O)
2. Operators (Arithmetic, Comparison & Logic)
3. Control Flow (if/else, Loops, switch/case)
4. Functions (Basics, Recursion)
5. Arrays (Basics, Strings)
6. Pointers (Basics, Arithmetic)
7. Dynamic Memory (malloc/calloc/free)
8. Structs
9. File I/O
10. Preprocessor (#define, macros)
11. Advanced C (Function Pointers, Linked Lists)
12. C Mastery (Multi-file projects)

#### [NEW] `prisma/seed.ts`
Script to upsert all curriculum data into the database.

---

### Phase 3 — Auth & Lib

#### [NEW] `src/lib/auth.ts`
NextAuth v5 with Google + GitHub providers + PrismaAdapter

#### [NEW] `src/lib/prisma.ts`
Singleton Prisma client

#### [NEW] `src/lib/redis.ts`
Upstash Redis client

#### [NEW] `src/lib/judge0.ts`
Judge0 C code execution proxy with base64 encode/decode + polling

#### [NEW] `src/lib/xp.ts`
XP calculation logic (base + accuracy bonus + streak bonus + double XP)

#### [NEW] `src/store/gameStore.ts`
Zustand store: hearts, xp, gems, streak, lesson stats + actions

#### [NEW] `src/types/index.ts`
Shared TypeScript interfaces

---

### Phase 4 — Layout & Navigation

#### [NEW] `src/app/layout.tsx`
Root layout with Nunito font + metadata

#### [NEW] `src/app/(main)/layout.tsx`
Sidebar + main content layout (desktop: 256px sidebar, mobile: bottom nav)

#### [NEW] `src/components/layout/Sidebar.tsx`
Fixed left sidebar: Logo, nav links (Learn/Leaderboard/Profile/Shop), stats row (streak/hearts/gems)

#### [NEW] `src/components/layout/TopNav.tsx`
Mobile top navigation with XP, hearts, streak, gems

#### [NEW] `src/components/layout/MobileNav.tsx`
Bottom tab bar for mobile (5 tabs)

---

### Phase 5 — Pages

#### [NEW] `src/app/page.tsx` — Landing Page
- Hero section: "Learn C the fun way" + CTA
- Features row: Hearts, Streaks, XP, Leaderboards
- How it works: 3 steps
- Curriculum preview (first 3 units)
- Header with login button

#### [NEW] `src/app/(auth)/login/page.tsx`
Duolingo-style login with Google + GitHub OAuth buttons

#### [NEW] `src/app/(auth)/register/page.tsx`
Registration page (or redirect to OAuth)

#### [NEW] `src/app/(main)/learn/page.tsx` — Skill Tree
- Course banner with progress
- Scrollable unit list with UnitHeader
- Lesson nodes in zigzag path with lock/unlock logic
- Dotted connecting lines between nodes

#### [NEW] `src/app/(main)/leaderboard/page.tsx`
Weekly XP leaderboard by league with promotion/demotion zones

#### [NEW] `src/app/(main)/profile/page.tsx`
User stats: level, XP bar, streak, gems, hearts, completed lessons

#### [NEW] `src/app/(main)/shop/page.tsx`
Gems shop: Streak Freeze (200), Heart Refill (350), Double XP (500)

#### [NEW] `src/app/lesson/[lessonId]/page.tsx` — Lesson Flow
Full-screen lesson with state machine: idle → question → answered → next → complete

---

### Phase 6 — Lesson Components

#### [NEW] `src/components/lesson/LessonHeader.tsx`
Progress bar + hearts display + X button

#### [NEW] `src/components/lesson/QuestionRenderer.tsx`
Dispatches to correct question type component

#### [NEW] `src/components/lesson/MultipleChoice.tsx`
4-option card buttons with A/B/C/D badges, select → check states

#### [NEW] `src/components/lesson/TapToBuild.tsx`
Word tile bank → answer zone drag/tap interface

#### [NEW] `src/components/lesson/FillBlank.tsx`
Code block with inline text input for blank

#### [NEW] `src/components/lesson/CodeOutput.tsx`
Syntax-highlighted code block + 4 options (what does this print?)

#### [NEW] `src/components/lesson/BugFix.tsx`
Code with bug highlighted + 4 fix options

#### [NEW] `src/components/lesson/WriteCode.tsx`
Monaco Editor + Run button + Judge0 output panel + test cases

#### [NEW] `src/components/lesson/FeedbackBanner.tsx`
Slide-up banner: green (correct) or red (wrong) with explanation

#### [NEW] `src/components/lesson/LessonComplete.tsx`
Confetti + trophy + XP card + stats + Continue button

---

### Phase 7 — Skill Tree Components

#### [NEW] `src/components/learn/SkillTree.tsx`
Full skill tree container with units

#### [NEW] `src/components/learn/UnitHeader.tsx`
Colored banner: unit number, title, description, guideline button

#### [NEW] `src/components/learn/LessonNode.tsx`
Circular button: completed (green ✓), current (blue, START button + glow), locked (gray 🔒)

#### [NEW] `src/components/learn/UnitCard.tsx`
Wraps UnitHeader + lesson nodes

---

### Phase 8 — Gamification Components

#### [NEW] `src/components/gamification/XPPopup.tsx`
Floating "+X XP" animation that pops up on correct answer

#### [NEW] `src/components/gamification/HeartDisplay.tsx`
5 heart icons with heartBreak animation

#### [NEW] `src/components/gamification/StreakFlame.tsx`
Flame icon + streak count with glow

#### [NEW] `src/components/gamification/LeagueCard.tsx`
League badge with bronze/silver/gold/diamond styling

---

### Phase 9 — UI Primitives

#### [NEW] `src/components/ui/Button.tsx`
Duolingo signature button with bottom shadow press effect

#### [NEW] `src/components/ui/ProgressBar.tsx`
Animated green fill progress bar

#### [NEW] `src/components/ui/Badge.tsx`
A/B/C/D option badges + league badges

#### [NEW] `src/components/ui/Modal.tsx`
Generic modal (out-of-hearts, purchase confirmation, etc.)

---

### Phase 10 — API Routes

#### [NEW] `src/app/api/auth/[...nextauth]/route.ts`
NextAuth handler

#### [NEW] `src/app/api/lessons/route.ts`
GET all lessons (with user progress)

#### [NEW] `src/app/api/lessons/[id]/route.ts`
GET single lesson with questions

#### [NEW] `src/app/api/progress/route.ts`
POST lesson completion (upsert progress, update XP + streak + stars)

#### [NEW] `src/app/api/xp/route.ts`
POST add XP + update weekly leaderboard

#### [NEW] `src/app/api/streak/route.ts`
POST update streak (check date, handle freeze, reset)

#### [NEW] `src/app/api/hearts/route.ts`
GET heart status + POST regen/refill actions

#### [NEW] `src/app/api/leaderboard/route.ts`
GET top 10 by weeklyXp in user's league (Redis cached)

#### [NEW] `src/app/api/shop/route.ts`
POST purchase item (deduct gems, apply effect)

#### [NEW] `src/app/api/code/run/route.ts`
POST Judge0 proxy with rate limiting (10 runs/min per user via Redis)

#### [NEW] `src/app/api/cron/weekly-reset/route.ts`
Weekly leaderboard reset: promote/demote users, clear weeklyXp

---

## Verification Plan

### Automated Checks
- `npm run build` — TypeScript compilation + Next.js build
- `npx prisma validate` — schema validation

### Browser Testing
- Landing page renders correctly
- Login flow works (OAuth)
- Skill tree loads with locked/unlocked states
- Lesson flow: complete a full lesson through all question types
- FeedbackBanner slides up correctly
- LessonComplete screen with confetti fires
- Hearts decrease on wrong answers
- XP popup floats up
- Shop page renders and purchase confirmation works
- Leaderboard displays correctly
- Mobile responsive layout (sidebar → bottom nav)

### Manual Verification
- Set up `.env.local` with real service keys
- Run `npx prisma db push` + `npx prisma db seed`
- Test code execution via Judge0
- Verify streak increments across days
- Test heart regeneration timer

---

## Build Order (Strict)

1. `npx create-next-app` bootstrap
2. Install all dependencies
3. `tailwind.config.ts` + `globals.css` + Google Fonts
4. `prisma/schema.prisma` + `src/data/curriculum.ts` + `prisma/seed.ts`
5. `src/lib/` files (prisma, auth, redis, judge0, xp)
6. `src/store/gameStore.ts` + `src/types/index.ts`
7. Auth API route + NextAuth setup
8. Root layout + (main) layout + Sidebar + MobileNav
9. UI primitives (Button, ProgressBar, Badge, Modal)
10. Landing page (`src/app/page.tsx`)
11. Login page
12. Skill Tree page + components (UnitHeader, LessonNode)
13. Lesson flow page + all question components
14. Gamification components (XPPopup, HeartDisplay, StreakFlame)
15. LessonComplete + FeedbackBanner
16. All API routes
17. Leaderboard, Profile, Shop pages
18. Judge0 code execution integration
19. Mobile responsive polish
20. Vercel cron + vercel.json
