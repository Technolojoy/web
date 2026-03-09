import type { DetailedHTMLProps, HTMLAttributes } from "react";
import Script from "next/script";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        url: string;
      };
    }
  }
}

const HERO_SCENE_URL = "https://prod.spline.design/wEjjCh7CDZWn3hst/scene.splinecode";

export function SplineHero() {
  return (
    <>
      <Script
        src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"
        type="module"
        strategy="afterInteractive"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-techjoy-primary/15 blur-3xl" />
        <spline-viewer
          url={HERO_SCENE_URL}
          className="block h-full w-full scale-[1.12] opacity-95 md:scale-[1.04]"
        />
      </div>
    </>
  );
}
