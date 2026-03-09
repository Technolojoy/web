"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
          TECHJOY
        </Link>

        <button
          type="button"
          className="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-700 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <div className="hidden gap-5 md:flex">
          {navLinks.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm text-slate-700 transition hover:text-techjoy-primary">
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {open && (
        <div className="mx-6 mb-4 grid gap-2 rounded-xl border border-slate-200 bg-white p-3 md:hidden">
          {navLinks.map(([label, href]) => (
            <Link key={href} href={href} className="py-1 text-sm text-slate-700" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
