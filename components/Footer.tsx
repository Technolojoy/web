export function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/60">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-10 text-sm text-slate-600 md:grid-cols-2">
        <p>© {new Date().getFullYear()} TECHJOY. Recycle Technology. Power the Future.</p>
        <p className="md:text-right">Vercel-ready • Stripe-ready • ESG-first circular economy platform</p>
      </div>
    </footer>
  );
}
