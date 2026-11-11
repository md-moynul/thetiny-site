# thetiny.site

[![Live Demo](https://img.shields.io/badge/Live_Demo-thetiny--site--ten.vercel.app-5b21f3?style=for-the-badge&logo=vercel&logoColor=white)](https://thetiny-site-ten.vercel.app/)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.6-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A pixel-perfect, high-performance web application recreating [thetiny.site](https://thetiny.site) — a modern URL shortener, link management, and real-time analytics platform. Built with **Next.js 16** (App Router & Turbopack), **React 19**, **Tailwind CSS v4**, and **TypeScript**.

🔗 **Live Deployment:** [https://thetiny-site-ten.vercel.app/](https://thetiny-site-ten.vercel.app/)

---

## 🚀 Overview

**thetiny.site** enables users and businesses to shorten URLs in seconds, generate custom QR codes, and track link performance with detailed analytics.

This project replicates the live site with 1:1 fidelity in spacing, typography, layout, animations, and color schemes (`#5b21f3` primary brand color, `#f8f9fc` background, and dark slate foreground).

---

## ✨ Features

- **Sticky Navigation Bar:**
  - Crisp branding with high-resolution logo.
  - Responsive navigation links with active state indicator.
  - Primary (`Get Started Free`) and secondary (`Log In`) action buttons.
  - Fully responsive mobile drawer menu with animated hamburger toggle.

- **Hero Section:**
  - Ambient gradient background (`linear-gradient(135deg, #f8f9fc 0%, #eef0ff 100%)`).
  - Trust badge: *"Trusted by thousands of users"*.
  - Large display headline with purple accent: *"Shorten Your URL in seconds"*.
  - Central authentication prompt card with soft glow, lock icon, and direct action CTAs.

- **Live Statistics Banner:**
  - High-impact brand purple banner (`#5b21f3`).
  - 4 key operational metrics: Links Created (`100K+`), Total Clicks (`1M+`), Countries (`180+`), and Platform Uptime (`99.9%`).

- **Most Popular Links Section:**
  - Real-time display of top performing shortened links.
  - Click counter badges with mouse pointer icons.
  - One-click link copying to clipboard with confirmation feedback.
  - Full URL hover tooltips for truncated destination URLs.
  - Integrated QR Code generation trigger.

- **QR Code Generator Modal:**
  - Modular, accessible popover modal (`QRModal.tsx`).
  - Generates instant scannable QR codes for any link.
  - One-click high-resolution PNG download functionality.
  - Quick short link copy utility.
  - Closes smoothly on backdrop click or `Escape` key press.

- **Premium Tools & Analytics Dashboard:**
  - Highlighted growth tools (Branded short links, UTM builder, QR Code generator, REST API).
  - High-converting **Link Analytics Dashboard** card preview with monospace metrics and proportional visual progress bars.

- **Transparent Pricing:**
  - Clean 3-tier pricing matrix: **FREE** ($0), **PRO** ($9/mo), and **BUSINESS** ($29/mo).
  - Featured **PRO** card highlighted in brand purple with glowing drop shadow and 14-day trial CTA.
  - Detailed feature checklist with custom status checkmark icons.

- **Social Proof & Testimonials:**
  - Customer review card featuring 5 purple star rating and verified user credential.

- **Why Choose Us Grid:**
  - 6-card feature matrix covering Lightning Fast speed, Detailed Analytics, Global CDN, QR Codes, Security encryption, and Expiration Control.

- **Full-featured Footer:**
  - 3-column layout: brand overview, product navigation directory, company links.
  - Social media links (Facebook, LinkedIn, YouTube, WhatsApp).
  - Direct support email and phone hotline.
  - Sub-footer with copyright notice and legal links (Privacy Policy, Refund Policy, Cookie Policy, Terms).

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** Inline SVG & Lucide Icons
- **Typography:** Inter (Primary sans-serif) & DM Mono (Monospace for analytics & links)

---

## 📁 Project Structure

```text
thetiny-site/
├── public/
│   ├── favicon.ico           # Site favicon
│   └── logo.png              # Brand logo
├── src/
│   ├── app/
│   │   ├── globals.css       # Tailwind CSS v4 @import & theme variables
│   │   ├── layout.tsx        # Root HTML layout with Navbar & Footer
│   │   └── page.tsx          # Main landing page combining all sections
│   └── components/
│       ├── index.ts          # Central component barrel exports
│       ├── Navbar.tsx        # Sticky responsive navigation bar & mobile menu
│       ├── Hero.tsx          # Hero section with prompt card & CTAs
│       ├── Stats.tsx         # Purple metric counter banner
│       ├── PopularLinks.tsx  # Popular links list with copy & QR triggers
│       ├── QRModal.tsx       # QR code modal with preview & download
│       ├── Features.tsx      # Premium growth tools & analytics dashboard card
│       ├── Pricing.tsx       # 3-tier pricing matrix with featured Pro tier
│       ├── Testimonials.tsx  # Social proof & customer testimonial
│       ├── WhyChooseUs.tsx   # 6-card feature & benefits grid
│       └── Footer.tsx        # Multi-column footer & copyright bar
├── package.json              # Project dependencies & scripts
├── tsconfig.json             # TypeScript compiler configuration
└── README.md                 # Project documentation
```

---

## 🏁 Getting Started

### Prerequisites

- **Node.js**: `v18.17` or higher (Node `v20+` recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/md-moynul/thetiny-site.git
   cd thetiny-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Turbopack |
| `npm run build` | Builds the production-optimized application |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check for code quality and style issues |
| `npx tsc --noEmit` | Runs TypeScript compiler to verify all types |

---

## 🎨 Color Palette & Design Tokens

| Token | Value | Preview / Usage |
| :--- | :--- | :--- |
| `--primary` | `#5b21f3` | Brand purple (Buttons, featured cards, icons) |
| `--background` | `#f8f9fc` | Base light background |
| `--foreground` | `#0a0a14` | Primary dark text |
| `--muted-foreground` | `#6b7280` | Subtitles and secondary text |
| `--border` | `rgba(0, 0, 0, 0.09)` | Subtle borders and dividers |
| Gradient | `linear-gradient(135deg, #f8f9fc 0%, #eef0ff 100%)` | Hero section ambient backdrop |

---

## 📄 License

This project is created for educational and demonstration purposes. All rights reserved by Bangla Puzzle Limited.
