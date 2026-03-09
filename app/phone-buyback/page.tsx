"use client";

import { useState } from "react";
import { PageShell } from "@/components/PageShell";

type Estimate = { estimate: string; suggestedAction: string };

export default function PhoneBuybackPage() {
  const [result, setResult] = useState<Estimate | null>(null);

  async function onSubmit(formData: FormData) {
    const payload = Object.fromEntries(formData.entries());
    const res = await fetch("/api/estimate-device", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    setResult(await res.json());
  }

  return (
    <PageShell title="Phone Buyback" subtitle="Estimate value instantly and choose payout or donation.">
      <form action={onSubmit} className="grid gap-4 rounded-2xl border border-white/60 bg-white/80 p-6 md:grid-cols-2">
        {[
          ["brand", "Brand"],
          ["model", "Model"],
          ["storage", "Storage"],
          ["condition", "Condition"]
        ].map(([name, label]) => (
          <label key={name} className="text-sm text-slate-700">
            {label}
            <input name={name} required className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" />
          </label>
        ))}
        <button className="rounded-xl bg-slate-900 px-4 py-3 text-white">Estimate</button>
      </form>
      {result && (
        <div className="mt-6 rounded-2xl bg-white p-6">
          <p className="text-3xl font-semibold">{result.estimate}</p>
          <p className="text-slate-600">{result.suggestedAction}</p>
          <div className="mt-4 flex gap-3">
            <button className="rounded-full bg-techjoy-primary px-4 py-2">Sell Device</button>
            <button className="rounded-full border border-slate-300 px-4 py-2">Donate Value Instead</button>
          </div>
        </div>
      )}
    </PageShell>
  );
}
