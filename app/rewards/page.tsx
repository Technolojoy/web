import { PageShell } from "@/components/PageShell";

export default function RewardsPage() {
  return (
    <PageShell title="Rewards Program" subtitle="Gamified recycling with points, levels, and leaderboard badges.">
      <div className="grid gap-4 md:grid-cols-4">
        {["Explorer", "Recycler", "TechHero", "PlanetGuardian"].map((lvl) => (
          <div key={lvl} className="glass rounded-2xl p-5"><p className="text-techjoy-primary">Level</p><h3 className="text-xl font-semibold">{lvl}</h3></div>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="glass rounded-2xl p-6">$10 coupon after 3 devices recycled</div>
        <div className="glass rounded-2xl p-6">$25 reward after 10 devices + merch unlocks</div>
      </div>
    </PageShell>
  );
}
