# TECHJOY — Circular Electronics Economy Platform

A modern, scalable, and high-performance web platform for electronic recycling, device buyback, and technology donation. TECHJOY is designed with an **ESG-first** (Environmental, Social, and Governance) approach to drive measurable climate impact through responsible technology reuse.

## 🚀 Recent Updates
- **Green Theme Transition**: Transitioned core branding and UI to a vibrant green glow aesthetic.
- **Full-Screen Hero**: Implemented an immersive full-viewport hero section with integrated 3D Spline mascots.
- **SVG Branding**: Integrated high-fidelity SVG logos and a bold typography system.
- **Bottom Fade-Up**: Smooth visual transitions between hero content and the circular economy features.

## 🛠️ Stack
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router + TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Spline](https://spline.design/) (Interactive Mascot Integration)
- **Deployment**: Vercel & Netlify Ready

## 📄 Core Pages
- **Home**: Immersive hero section with circular economy highlights.
- **How It Works**: Step-by-step guide to selling, recycling, or donating.
- **Recycle Devices**: Responsible recycling for non-functional electronics.
- **Phone Buyback**: Instant quotes and secure payouts for used smartphones.
- **Donate**: Bridging the digital divide through hardware contribution.
- **Rewards**: Gamified sustainability program for active participants.
- **Impact**: Real-time tracking of carbon emissions avoided and devices diverted from landfills.

## ⚙️ Content Pipeline
The site uses a unified markdown source for content management:
- **Source**: `content/techjoy_site_content.md`
- **Utilities**: `lib/content-export.ts`
- **API**: `GET /api/content-export`

## 🏃 Run Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 🌍 Deployment

### Vercel
1. Push repository to GitHub.
2. Import project in Vercel.
3. Keep framework preset as **Next.js**.
4. Set optional env vars (Stripe, Resend, Supabase).
5. Deploy.

### Netlify
1. Push repository to GitHub.
2. Import project in Netlify (uses `netlify.toml`).
3. Build command: `npm run build`.
4. Publish directory: `.next`.
5. Deploy.

---
© 2026 TECHJOY. Recycle Technology. Power the Future.
