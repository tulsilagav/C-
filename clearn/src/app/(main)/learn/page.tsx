import Link from "next/link";
import { BookOpen, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

const units = [
  {
    id: "unit-1",
    title: "C Fundamentals",
    description: "Hello World, variables, data types, and I/O.",
    color: "bg-duo-green",
    progress: 80,
  },
  {
    id: "unit-2",
    title: "Operators",
    description: "Arithmetic, comparisons, and logical operations.",
    color: "bg-duo-blue",
    progress: 45,
  },
  {
    id: "unit-3",
    title: "Control Flow",
    description: "If statements, loops, and branching logic.",
    color: "bg-duo-red",
    progress: 20,
  },
];

export default function LearnPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-duo-green font-semibold">
              Skill Tree
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Your C learning path
            </h1>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Progress through structured units, unlock lessons, and earn rewards as you learn C.
            </p>
          </div>
          <Button variant="primary" size="md">
            Continue where you left off
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {units.map((unit) => (
          <div key={unit.id} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-white ${unit.color}`}>
              {unit.title}
            </div>
            <p className="mt-4 text-gray-700">{unit.description}</p>
            <div className="mt-6 h-3 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full rounded-full bg-duo-green" style={{ width: `${unit.progress}%` }} />
            </div>
            <p className="mt-2 text-sm text-gray-500">{unit.progress}% complete</p>
            <Link href={`/lesson/${unit.id}-lesson-1`} className="mt-6 inline-flex items-center gap-2 font-semibold text-duo-blue hover:text-duo-green">
              Start lesson <Sparkles size={18} />
            </Link>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 text-duo-green">
            <BookOpen size={24} />
            <div>
              <p className="text-sm uppercase tracking-[0.16em] font-semibold">Lessons Completed</p>
              <p className="text-3xl font-bold">18</p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 text-duo-blue">
            <ShieldCheck size={24} />
            <div>
              <p className="text-sm uppercase tracking-[0.16em] font-semibold">Current Streak</p>
              <p className="text-3xl font-bold">7 days</p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 text-duo-red">
            <Sparkles size={24} />
            <div>
              <p className="text-sm uppercase tracking-[0.16em] font-semibold">Gems Earned</p>
              <p className="text-3xl font-bold">530</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
