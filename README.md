# 🍰 La Brise Pâtisserie

> A pastel carnival-themed cake shop web app built with **Next.js**, **InstantDB**, and **Stripe** —  
> a TownesDev collaboration project exploring full-stack TypeScript, realtime data, and delightful UX.

---

## ✨ Overview

**La Brise Pâtisserie** is a small e-commerce experience where users can browse cakes, leave reviews, and earn points on a live leaderboard.  
Built as a **one-week showcase** for modern TypeScript-everywhere architecture.

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-------------|
| Front-End | Next.js (App Router), TailwindCSS, shadcn/ui, Framer Motion |
| Database / Realtime / Storage | InstantDB |
| Auth | InstantDB Guest Sessions + Email Magic Link |
| Payments | Stripe Checkout (Test Mode) |
| Deploy | Vercel (Preview → Production) |
| Testing | Vitest + Playwright |
| Code Quality | ESLint + Prettier + Husky + Conventional Commits |
| Monitoring | Vercel Analytics + Sentry |

---

## 📂 Monorepo Structure

```bash
la-brise-patisserie/
├─ apps/
│ └─ web/ # Next.js frontend
├─ packages/
│ ├─ ui/ # Shared UI components
│ ├─ db/ # InstantDB client + schema
│ └─ config/ # Shared config (eslint, tailwind, tsconfig)
├─ docs/ # Documentation, brand, assets
└─ .github/ # CI, templates, CODEOWNERS
```

## 🚀 Getting Started (Local)

```bash
npm install
npm dev
```

## 🛠️ Script

```bash
npm run dev # Start local dev server
npm run build # Create production build
npm run start # Start production server
npm run lint # Run ESLint
npm run format # Run Prettier
npm run test # Run Vitest unit tests
```

## 🔑 Environment Variables

```bash
# .env.local
INSTANT_APP_ID=...
INSTANT_API_KEY=...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000
```

## Credits

| Role                        | Name                            |
| --------------------------- | ------------------------------- |
| Lead Developer / Frontend   | **[Donovan Townes](https://github.com/donovan-townes)** (@TownesDev) |
| Database & Realtime Systems | **[Brxndxn Diaz](https://github.com/brxndxndiaz)** (@Brxndxn)      |
| Development & Testing       | **[TownesDev](https://github.com/TownesDev)** (@TownesDev)       |

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).

> "A TownesDev production - building the web, one structure at a time." 💫
