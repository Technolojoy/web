# TECHJOY — Next.js 14 Website

A modern, scalable, Vercel-ready web platform for electronic recycling and device buyback.

## Stack
- Next.js 14 App Router + TypeScript
- Tailwind CSS
- Framer Motion
- Spline embed placeholder for 3D mascot
- SEO metadata configured in `app/layout.tsx`

## Pages
- Home
- How It Works
- Recycle Devices
- Phone Buyback
- Corporate Partnerships
- Donate
- Rewards Program
- Impact
- About
- Blog
- Contact

## API Routes
- `POST /api/donate`
- `POST /api/estimate-device`
- `GET /api/rewards`
- `POST /api/referral`

## Run locally
```bash
npm install
npm run dev
```

## Deploy to Vercel
1. Push repository to GitHub.
2. Import project in Vercel.
3. Keep framework preset as **Next.js**.
4. Set optional env vars for Stripe/Supabase/Resend/PostHog.
5. Deploy.
