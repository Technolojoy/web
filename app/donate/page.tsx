import { PageShell } from "@/components/PageShell";

const donationOptions = ["Donate device value", "Direct donation", "Round-up donation"];

export default function DonatePage() {
  return (
    <PageShell title="Donate to TECHJOY" subtitle="Donations are always optional and separate from client pricing.">
      <div className="grid gap-4 md:grid-cols-3">
        {donationOptions.map((option) => (
          <div key={option} className="glass rounded-2xl p-6">
            {option}
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <form className="rounded-2xl bg-white p-6">
          <p className="mb-3 text-sm text-slate-600">Stripe-ready placeholder checkout flow</p>
          <button className="rounded-xl bg-techjoy-primary px-5 py-3 font-medium text-slate-900">Donate securely</button>
        </form>

        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold">QR Donation</h2>
          <div className="mt-3 inline-flex rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-500">
            [ QR Placeholder ]
          </div>
          <p className="mt-3 text-sm text-slate-600">Scan to open the donation flow on mobile devices.</p>
        </div>
      </div>
    </PageShell>
  );
}
