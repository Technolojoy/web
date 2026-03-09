import Link from "next/link";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
          TECHJOY
        </Link>
        <div className="hidden gap-5 md:flex">
          {navLinks.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm text-slate-700 transition hover:text-techjoy-primary">
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
