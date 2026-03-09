"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function AnimatedCounter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (latest) => Math.floor(latest).toLocaleString());

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  return (
    <div ref={ref} className="glass rounded-2xl p-6 text-center shadow-glow">
      <motion.p className="text-3xl font-semibold text-slate-900">{display}</motion.p>
      <p className="mt-2 text-sm text-slate-600">{label}</p>
    </div>
  );
}
