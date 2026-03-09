import Link from "next/link";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SplineHero } from "@/components/SplineHero";
import { rewardActions, stats, trustLogos } from "@/lib/constants";

const heroHighlights = [
  "Free shipping on every device",
  "Certified data wiping",
  "Cash, rewards, or donations"
];

const processSteps = [
  {
    title: "Get an Instant Quote",
    copy: "Search your device, choose the condition, and see your value immediately."
  },
  {
    title: "Ship It Free",
    copy: "Use a prepaid label for phones, laptops, tablets, and bulk corporate drop-offs."
  },
  {
    title: "Get Paid or Give Back",
    copy: "Take cash, collect TechJoy rewards, or donate the value to a partner cause."
  }
];

export default function Home() {
  return (
    <main className="pb-20">
      <nav style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
        <Link href="/">Home</Link>
        <Link href="/how-it-works">How It Works</Link>
        <Link href="/recycle-devices">Recycle Devices</Link>
        <Link href="/phone-buyback">Phone Buyback</Link>
        <Link href="/donate">Donate</Link>
        <Link href="/impact">Impact</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <section className="section pb-12 pt-10 md:pt-16">
        <div className="relative isolate overflow-hidden rounded-[32px] border border-white/70 bg-slate-950 shadow-glow">
          <SplineHero />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(112deg,rgba(4,12,22,0.96)_12%,rgba(4,12,22,0.9)_36%,rgba(4,12,22,0.62)_58%,rgba(4,12,22,0.16)_100%)]"
          />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

          <div className="relative flex min-h-[560px] items-center px-8 py-14 md:px-12 md:py-16 lg:min-h-[620px] lg:px-16">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm uppercase tracking-[0.18em] text-techjoy-accent">
                Circular Electronics Economy Platform
              </p>
              <h1 className="mt-6 max-w-2xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                Recycle Technology. Power the Future.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-200">
                TechJoy turns idle electronics into cash, donations, and measurable climate impact with secure logistics,
                transparent processing, and rewards built in.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/recycle-devices" className="rounded-full bg-white px-5 py-3 text-slate-950 transition hover:bg-slate-100">
                  Recycle Devices
                </Link>
                <Link
                  href="/phone-buyback"
                  className="rounded-full border border-white/25 bg-white/10 px-5 py-3 text-white transition hover:bg-white/15"
                >
                  Sell a Phone
                </Link>
                <Link
                  href="/donate"
                  className="rounded-full border border-white/25 bg-white/10 px-5 py-3 text-white transition hover:bg-white/15"
                >
                  Donate Devices
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {heroHighlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/12 bg-white/10 px-4 py-4 text-sm text-slate-100 backdrop-blur">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-10">
        <p className="mb-5 text-sm uppercase tracking-[0.22em] text-slate-500">Future trusted partners</p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
          {trustLogos.map((logo) => (
            <div key={logo} className="glass rounded-xl p-4 text-center text-sm text-slate-600">
              {logo}
            </div>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="grid gap-5 md:grid-cols-4">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </section>

      <section className="section grid gap-6 md:grid-cols-3">
        {processSteps.map((step, index) => (
          <div key={step.title} className="glass rounded-2xl p-6">
            <p className="text-sm text-techjoy-primary">Step {index + 1}</p>
            <h2 className="mt-2 text-2xl font-medium">{step.title}</h2>
            <p className="mt-3 text-slate-600">{step.copy}</p>
          </div>
        ))}
      </section>

      <section className="section grid gap-6 md:grid-cols-2">
        <div className="glass rounded-2xl p-8">
          <p className="text-sm text-techjoy-primary">Mission</p>
          <h2 className="mt-2 text-3xl font-semibold">Circular electronics economy</h2>
          <p className="mt-4 text-slate-600">
            Every device is routed through refurbishment, parts harvesting, or materials recovery to maximize lifetime
            value and minimize landfill impact.
          </p>
        </div>

        <div className="glass rounded-2xl p-8">
          <p className="text-sm text-techjoy-primary">Gamification preview</p>
          <ul className="mt-4 grid gap-2 text-slate-700">
            {rewardActions.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/rewards" className="rounded-full bg-slate-900 px-4 py-2 text-white">
              View Rewards
            </Link>
            <Link href="/impact" className="rounded-full border border-slate-300 px-4 py-2">
              View Impact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
