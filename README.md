# TECHJOY — Next.js 14 Website

<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
A modern, scalable, Vercel-ready web platform for electronic recycling and device buyback.
=======
A modern, scalable web platform for electronic recycling and device buyback, optimized for deployment on **Vercel** and **Netlify**.
>>>>>>> theirs
=======
A modern, scalable web platform for electronic recycling and device buyback, optimized for deployment on **Vercel** and **Netlify**.
>>>>>>> theirs
=======
A modern, scalable web platform for electronic recycling and device buyback, optimized for deployment on **Vercel** and **Netlify**.
>>>>>>> theirs
=======
A modern, scalable web platform for electronic recycling and device buyback, optimized for deployment on **Vercel** and **Netlify**.
>>>>>>> theirs
=======
A modern, scalable web platform for electronic recycling and device buyback, optimized for deployment on **Vercel** and **Netlify**.
>>>>>>> theirs
=======
A modern, scalable web platform for electronic recycling and device buyback, optimized for deployment on **Vercel** and **Netlify**.
>>>>>>> theirs
=======
A modern, scalable web platform for electronic recycling and device buyback, optimized for deployment on **Vercel** and **Netlify**.
>>>>>>> theirs
=======
A modern, scalable web platform for electronic recycling and device buyback, optimized for deployment on **Vercel** and **Netlify**.
>>>>>>> theirs
=======
A modern, scalable web platform for electronic recycling and device buyback, optimized for deployment on **Vercel** and **Netlify**.
>>>>>>> theirs
=======
A modern, scalable web platform for electronic recycling and device buyback, optimized for deployment on **Vercel** and **Netlify**.
>>>>>>> theirs
=======
A modern, scalable web platform for electronic recycling and device buyback, optimized for deployment on **Vercel** and **Netlify**.
>>>>>>> theirs

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

<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
=======
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs

## Content Export Pipeline
- Canonical content source: `content/techjoy_site_content.md`
- Parser utilities: `lib/content-export.ts`
- Inspection route: `/content-export`
- JSON API route: `GET /api/content-export`

<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
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
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
=======
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs

## Deploy to Netlify
1. Push repository to GitHub.
2. Import the repo in Netlify.
3. Netlify will read `netlify.toml` and use:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Plugin: `@netlify/plugin-nextjs`
4. Set Node version to 20 (already configured in `netlify.toml`).
5. Add optional environment variables (Stripe/Supabase/Resend/PostHog) in Netlify site settings.
6. Deploy.
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
