# 🦅 LUCID SYSTEMS

**Clarity. Altitude. Systems.**

AI-powered operational intelligence systems for high-volume businesses. Built by Lucid the Eagle.

---

## 🎯 Overview

Lucid Systems provides three core intelligence systems:

- **The Prism**: Intelligent data fracturing and extraction
- **The Sentry**: Autonomous triage and qualification engine  
- **The Overwatch**: Predictive analytics and forecasting platform

Built for recruitment agencies, operations-heavy businesses, sales teams, and scaling startups drowning in manual work.

---

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.0 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Cinzel (serif) + JetBrains Mono (monospace)
- **Deployment**: Vercel

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
lucid-systems/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles + Tailwind
│   ├── not-found.tsx       # Custom 404 page
│   ├── privacy/page.tsx    # Privacy Policy
│   ├── terms/page.tsx      # Terms of Service
│   └── msa/page.tsx        # Master Services Agreement
├── components/
│   ├── Navigation.tsx      # Fixed header
│   ├── Hero.tsx            # Hero section
│   ├── Creed.tsx           # Manifesto section
│   ├── Problem.tsx         # Pain point diagnosis
│   ├── Systems.tsx         # Product cards (Prism/Sentry/Overwatch)
│   ├── HowItWorks.tsx      # 4-step process
│   ├── Pricing.tsx         # Deployment tiers
│   ├── Proof/              # System demonstrations
│   │   ├── index.tsx       # Proof section wrapper
│   │   ├── Prism.tsx       # Data fracturing demo
│   │   ├── Sentry.tsx      # Triage simulation
│   │   └── Overwatch.tsx   # Analytics demo
│   ├── FinalCTA.tsx        # Final conversion section
│   └── Footer.tsx          # Footer with links
├── public/
│   ├── og.png              # Open Graph image (1200x630)
│   ├── favicon.ico         # Browser icon
│   └── apple-touch-icon.png # iOS icon
└── lib/
    └── hooks/              # Reusable React hooks
```

---

## 🎨 Design System

### **Ancient Modern Aesthetic**

- **Sharp Edges**: Zero rounded corners (0px border-radius)
- **Stone Colors**: Dark backgrounds + cyan accents
- **Typography**: Cinzel (authority) + JetBrains Mono (precision)
- **Animations**: Premium cubic-bezier easing `[0.25, 0.1, 0.25, 1.0]`

### **Color Palette**

```css
--color-obsidian: #050505;   /* Background */
--color-basalt: #111111;     /* Cards */
--color-alabaster: #e5e5e5;  /* Primary text */
--color-granite: #737373;    /* Secondary text */
--color-lucid: #00f0ff;      /* Accent (cyan) */
```

---

## 🔧 Configuration

### **Metadata (app/layout.tsx)**

Update these before deployment:

```tsx
// Line ~35: Your domain
url: "https://yourdomain.com"

// Line ~42: OG image URL
url: "https://yourdomain.com/og.png"

// Line ~51: Twitter handle
creator: "@yourhandle"
```

### **Social Links (components/Footer.tsx)**

Update social media URLs:

```tsx
<a href="https://twitter.com/yourhandle" ...>
<a href="https://linkedin.com/in/yourprofile" ...>
<a href="https://github.com/yourusername" ...>
```

---

## 📊 Performance

Target metrics (Lighthouse):

- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+

Core Web Vitals:
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

---

## 🚢 Deployment

### **Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

### **Environment Variables**

No environment variables required. All configuration is in `layout.tsx`.

---

## 📝 Legal Pages

Three legal pages are included:

- **/privacy**: Privacy Policy
- **/terms**: Terms of Service
- **/msa**: Master Services Agreement

**Update jurisdiction** in Terms and MSA before launch (replace `[Your Jurisdiction]`).

---

## 🦅 Brand Identity

**Lucid the Eagle**

"I provide clarity where there is blur, fog, and smoke."

### **The Product Trinity**

- **The Prism**: Input (data fracturing)
- **The Sentry**: Process (autonomous triage)
- **The Overwatch**: Insight (predictive analytics)

### **Core Principles**

1. Sharp, never round
2. Stone meets light
3. Serif speaks vision, Mono speaks system
4. Vertical flow (scroll journey)
5. Minimal animation (intentional, not flashy)

---

## 📞 Contact

- **Email**: lucid@lucidsystems.io
- **Booking**: [Cal.com Strategy Call](https://cal.com/lucid-theeagle-ebabkz/system-strategy-call)

---

## 📄 License

All rights reserved © 2025 Lucid Systems.

Built by Lucid the Eagle.

**Intelligence enforced. Chaos removed.**