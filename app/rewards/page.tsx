import { PageShell } from "@/components/PageShell";

const levels = ["Explorer", "Recycler", "TechHero", "PlanetGuardian"];

const leaderboard = [
  { name: "Alex R.", points: 9240, badge: "PlanetGuardian" },
  { name: "Mina K.", points: 8120, badge: "TechHero" },
  { name: "Jordan T.", points: 7980, badge: "TechHero" }
];

export default function RewardsPage() {
  return (
    <PageShell
      title="Rewards Program"
      subtitle="Gamified recycling with points, levels, leaderboard badges, and referrals."
    >
      <div className="grid gap-4 md:grid-cols-4">
        {levels.map((level) => (
          <div key={level} className="glass rounded-2xl p-5">
            <p className="text-techjoy-primary">Level</p>
            <h2 className="text-xl font-semibold">{level}</h2>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="glass rounded-2xl p-6">$10 coupon after 3 devices recycled</div>
        <div className="glass rounded-2xl p-6">$25 reward after 10 devices + merch unlocks</div>
      </div>

      <div className="mt-8 rounded-2xl border border-white/60 bg-white/80 p-6">
        <h2 className="text-2xl font-semibold">Leaderboard</h2>
        <div className="mt-4 grid gap-3">
          {leaderboard.map((row, index) => (
            <div key={row.name} className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3">
              <p>
                #{index + 1} {row.name}
              </p>
              <p className="text-slate-600">
                {row.points} pts • {row.badge}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
