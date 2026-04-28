import { Button } from "@/components/ui/Button";

const shopItems = [
  {
    title: "Streak Freeze",
    description: "Protect your streak if you miss a day.",
    cost: 200,
  },
  {
    title: "Heart Refill",
    description: "Restore all your hearts instantly.",
    cost: 350,
  },
  {
    title: "Double XP",
    description: "Earn 2x XP for the next hour.",
    cost: 500,
  },
];

export default function ShopPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="text-sm uppercase tracking-[0.16em] text-duo-purple font-semibold">
          Shop
        </div>
        <h1 className="mt-4 text-4xl font-bold text-gray-900">Spend your gems</h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Buy boosters and power-ups to keep your C learning momentum strong.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {shopItems.map((item) => (
          <div key={item.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
              <div className="rounded-2xl bg-duo-blue/10 px-4 py-2 text-duo-blue font-semibold">
                {item.cost} gems
              </div>
            </div>
            <div className="mt-6">
              <Button variant="secondary" size="md">
                Purchase
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
