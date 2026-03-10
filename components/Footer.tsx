import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/60">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/techjoylogo.svg"
              alt="TECHJOY Logo"
              width={120}
              height={40}
              className="h-8 w-auto opacity-80"
            />
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} TECHJOY. Recycle Technology. Power the Future.
            </p>
          </div>
          <p className="text-sm text-slate-600">
            Vercel-ready • Stripe-ready • ESG-first circular economy platform
          </p>
        </div>
      </div>
    </footer>
  );
}
