import { ProgressBar } from "@/components/ui/ProgressBar";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-duo-green font-semibold">
              Profile
            </p>
            <h1 className="text-4xl font-bold text-gray-900">Your CLearn stats</h1>
          </div>
          <div className="rounded-3xl bg-duo-blue/10 px-5 py-3 text-duo-blue font-semibold">
            Bronze League
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-duo-green/10 p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-duo-green font-semibold">Total XP</p>
            <p className="mt-3 text-3xl font-bold text-gray-900">1,240</p>
          </div>
          <div className="rounded-3xl bg-duo-red/10 p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-duo-red font-semibold">Hearts</p>
            <p className="mt-3 text-3xl font-bold text-gray-900">4 / 5</p>
          </div>
          <div className="rounded-3xl bg-duo-purple/10 p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-duo-purple font-semibold">Gems</p>
            <p className="mt-3 text-3xl font-bold text-gray-900">320</p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-gray-500 font-semibold">Level progress</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">Level 6</p>
            </div>
            <p className="text-sm text-gray-500">560 / 800 XP</p>
          </div>
          <div className="mt-4">
            <ProgressBar current={560} total={800} color="green" animated={false} showLabel={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
