export default function LeaderboardPage() {
  const players = [
    { name: "Ayesha", xp: 940, league: "Gold" },
    { name: "Jun", xp: 850, league: "Silver" },
    { name: "Priya", xp: 790, league: "Silver" },
    { name: "Mika", xp: 640, league: "Bronze" },
  ];

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="text-sm uppercase tracking-[0.16em] text-duo-blue font-semibold">
          Weekly leaderboard
        </div>
        <h1 className="mt-4 text-4xl font-bold text-gray-900">Top performers</h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          See who is currently leading the pack with weekly XP and climb the leagues.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full border-collapse text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-gray-500">Rank</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-500">Name</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-500">XP</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-500">League</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={player.name} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">#{index + 1}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{player.name}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{player.xp}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{player.league}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
