import { PageShell } from "@/components/PageShell";

export default function ContactPage() {
  return (
    <PageShell title="Contact" subtitle="Sales, partnerships, donations, and support.">
      <form className="grid gap-3 rounded-2xl bg-white p-6 md:max-w-xl">
        <input placeholder="Name" className="rounded-xl border border-slate-200 px-3 py-2" />
        <input placeholder="Email" className="rounded-xl border border-slate-200 px-3 py-2" />
        <textarea placeholder="Message" className="rounded-xl border border-slate-200 px-3 py-2" rows={4} />
        <button className="rounded-xl bg-slate-900 px-4 py-3 text-white">Send</button>
      </form>
    </PageShell>
  );
}
