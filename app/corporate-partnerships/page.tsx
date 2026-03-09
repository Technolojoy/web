import { PageShell } from "@/components/PageShell";

export default function CorporatePage() {
  return (
    <PageShell title="Corporate Partnerships" subtitle="B2B recycling, data destruction, ESG reporting, and sustainability programs.">
      <ul className="grid gap-4 md:grid-cols-2">
        {[
          "Bulk electronics recycling",
          "Secure data destruction",
          "Corporate sustainability programs",
          "ESG impact reporting"
        ].map((item) => (
          <li key={item} className="glass rounded-2xl p-5">{item}</li>
        ))}
      </ul>
      <div className="mt-6 flex gap-3">
        <button className="rounded-full bg-slate-900 px-5 py-3 text-white">Request pickup</button>
        <button className="rounded-full border border-slate-300 px-5 py-3">Schedule consultation</button>
      </div>
    </PageShell>
  );
}
