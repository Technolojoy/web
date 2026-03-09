import { PageShell } from "@/components/PageShell";

const impactCards = [
  "Devices recycled: 1,842,300",
  "Rare metals recovered: 420 tons",
  "CO2 saved: 9,220 tons",
  "Trees equivalent: 512,000"
];

export default function ImpactPage() {
  return (
    <PageShell
      title="Impact Dashboard"
      subtitle="Track devices recycled, recovered metals, CO2 savings, and tree-equivalent impact."
    >
      <div className="grid gap-4 md:grid-cols-4">
        {impactCards.map((item) => (
          <div key={item} className="glass rounded-2xl p-6">
            {item}
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="glass rounded-2xl p-6">Interactive chart placeholder: 12-month recycling trend</div>
        <div className="glass rounded-2xl p-6">Corporate dashboard placeholder: ESG report export + API sync</div>
      </div>
    </PageShell>
  );
}
