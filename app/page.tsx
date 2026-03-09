import Link from "next/link";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SplineHero } from "@/components/SplineHero";
import { stats } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      <section className="section grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="inline-flex rounded-full border border-techjoy-primary/30 bg-white px-4 py-1 text-sm text-techjoy-primary">
            Circular Electronics Economy
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">Recycle Technology. Power the Future.</h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            TechJoy transforms electronic waste into opportunity. Donate devices. Earn rewards. Build a cleaner planet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/recycle-devices" className="rounded-full bg-slate-900 px-5 py-3 text-white">Recycle Devices</Link>
            <Link href="/donate" className="rounded-full border border-slate-300 px-5 py-3">Donate to TechJoy</Link>
            <Link href="/corporate-partnerships" className="rounded-full border border-slate-300 px-5 py-3">Partner With Us</Link>
          </div>
        </div>
        <SplineHero />
      </section>

      <section className="section pt-0">
        <div className="grid gap-5 md:grid-cols-4">
          {stats.map((s) => (
            <AnimatedCounter key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      <section className="section grid gap-6 md:grid-cols-3">
        {["Send Device", "We Process", "You Earn Rewards"].map((step, i) => (
          <div key={step} className="glass rounded-2xl p-6">
            <p className="text-sm text-techjoy-primary">Step {i + 1}</p>
            <h3 className="mt-2 text-2xl font-medium">{step}</h3>
            <p className="mt-3 text-slate-600">Fast logistics, transparent processing, and instant points to redeem coupons, merch, or donations.</p>
          </div>
        ))}
      </section>
    </main>
  );
}
