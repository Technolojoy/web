import { PageShell } from "@/components/PageShell";

export default function DonatePage() {
  return (
    <PageShell title="Donate to TECHJOY" subtitle="Donations are always optional and separate from client pricing.">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          "Donate device value",
          "Direct donation",
          "Round-up donation"
        ].map((opt) => (
          <div key={opt} className="glass rounded-2xl p-6">{opt}</div>
        ))}
      </div>
      <form className="mt-6 rounded-2xl bg-white p-6">
        <p className="mb-3 text-sm text-slate-600">Stripe-ready placeholder checkout flow</p>
        <button className="rounded-xl bg-techjoy-primary px-5 py-3 font-medium text-slate-900">Donate securely</button>
      </form>
    </PageShell>
  );
}
