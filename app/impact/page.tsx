import { PageShell } from "@/components/PageShell";

export default function ImpactPage() {
  return (
    <PageShell title="Impact Dashboard" subtitle="Track devices recycled, recovered metals, CO2 savings, and tree-equivalent impact.">
      <div className="grid gap-4 md:grid-cols-4">
        {[
          "Devices recycled: 1,842,300",
          "Rare metals recovered: 420 tons",
          "CO2 saved: 9,220 tons",
          "Trees equivalent: 512,000"
        ].map((item) => (
          <div key={item} className="glass rounded-2xl p-6">{item}</div>
        ))}
      </div>
    </PageShell>
  );
}
