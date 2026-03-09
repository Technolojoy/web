import { PageShell } from "@/components/PageShell";

export default function RecycleDevicesPage() {
  return (
    <PageShell title="Recycle Devices" subtitle="Start with phones, tablets, laptops, wearables, and accessories.">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold">Device shipping label generator</h2>
          <p className="mt-2 text-slate-600">Placeholder flow for prepaid labels and drop-off QR routing.</p>
          <button className="mt-4 rounded-xl bg-slate-900 px-4 py-2 text-white">Generate Label</button>
        </div>

        <form className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold">Email updates</h2>
          <p className="mt-2 text-slate-600">Get processing updates, rewards, and impact milestones.</p>
          <input placeholder="you@company.com" className="mt-3 w-full rounded-xl border border-slate-200 px-3 py-2" />
          <button className="mt-3 rounded-xl border border-slate-300 px-4 py-2">Subscribe</button>
        </form>
      </div>
    </PageShell>
  );
}
