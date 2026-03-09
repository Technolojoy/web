"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
};

export function AnimatedCounter({ value, label, prefix = "", suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 18, stiffness: 60 });
  const display = useTransform(spring, (latest) => `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-6 text-center shadow-glow"
    >
      <motion.p className="text-3xl font-semibold text-slate-900">{display}</motion.p>
      <p className="mt-2 text-sm text-slate-600">{label}</p>
    </motion.div>
  );
}
