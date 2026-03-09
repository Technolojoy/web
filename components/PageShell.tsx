import { ReactNode } from "react";

export function PageShell({ title, subtitle, children }: { title: string; subtitle: string; children?: ReactNode }) {
  return (
    <main className="section">
      <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600">{subtitle}</p>
      <div className="mt-10">{children}</div>
    </main>
  );
}
