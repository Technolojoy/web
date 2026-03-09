import { PageShell } from "@/components/PageShell";

const rewards = ["Cash payouts", "Gift cards", "Loyalty points", "Donation credits"];

export default function RewardsPage() {
  return (
    <PageShell
      title="Earn Rewards for Recycling Electronics"
      subtitle="TechJoy rewards users who participate in sustainable electronics programs."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {rewards.map((reward) => (
          <div key={reward} className="glass rounded-2xl p-6">
            {reward}
          </div>
        ))}
      </div>
    </PageShell>
  );
}
