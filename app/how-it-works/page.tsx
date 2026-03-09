import { PageShell } from "@/components/PageShell";

export default function HowItWorksPage() {
  return (
    <PageShell title="How TECHJOY Works" subtitle="A transparent 3-step recycling lifecycle for consumers and enterprises.">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="glass rounded-2xl p-6"><h3 className="text-xl font-semibold">1. Send your electronics</h3><p className="mt-3 text-slate-600">Free shipping labels and QR drop-off support.</p></div>
        <div className="glass rounded-2xl p-6"><h3 className="text-xl font-semibold">2. Device sorting</h3><p className="mt-3 text-slate-600">Working → refurbished, Repairable → parts, Broken → materials recovery.</p></div>
        <div className="glass rounded-2xl p-6"><h3 className="text-xl font-semibold">3. Rewards or recognition</h3><p className="mt-3 text-slate-600">Earn points, badges, coupons, or donate value to TechJoy.</p></div>
      </div>
    </PageShell>
  );
}
