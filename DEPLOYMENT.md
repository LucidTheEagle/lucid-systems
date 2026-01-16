# 🚀 Deployment Guide

**Lucid Systems deployment instructions.**

---

## 📋 Pre-Deployment Checklist

Before deploying to production:

- [ ] Update domain URLs in `app/layout.tsx`
- [ ] Update social links in `components/Footer.tsx`
- [ ] Update jurisdiction in `/terms` and `/msa` pages
- [ ] Verify Cal.com booking link works
- [ ] Create all required assets (OG image, favicon)
- [ ] Run `npm run build` locally (should succeed)
- [ ] Test production build: `npm start`

---

## 🔧 Configuration Updates

### **1. Metadata (app/layout.tsx)**

Replace these placeholders:

```tsx
// Line ~35
url: "https://yourdomain.com" // ← Your actual domain

// Line ~42
url: "https://yourdomain.com/og.png" // ← Your domain + OG image

// Line ~50
images: ["https://yourdomain.com/og.png"] // ← Same

// Line ~51
creator: "@yourhandle" // ← Your Twitter handle
```

### **2. Social Links (components/Footer.tsx)**

```tsx
// Update these URLs:
<a href="https://twitter.com/yourhandle" ...>
<a href="https://linkedin.com/in/yourprofile" ...>
<a href="https://github.com/yourusername" ...>
<a href="mailto:your@email.com">
```

### **3. Legal Pages**

In `/terms/page.tsx` and `/msa/page.tsx`, replace:

```
[Your Jurisdiction]
```

With your actual location (e.g., "Delaware", "California").

---

## 🌐 Vercel Deployment

### **Option 1: Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### **Option 2: GitHub Integration**

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Vercel auto-detects Next.js
6. Click "Deploy"

---

## ⚙️ Vercel Settings

### **Framework Preset**
- **Framework**: Next.js (auto-detected)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### **Node Version**
- Recommended: **18.x** or **20.x**

### **Environment Variables**
- **None required** (no API keys in this project)

---

## 🌍 Custom Domain

### **Add Domain in Vercel**

1. Go to Project Settings → Domains
2. Add your domain (e.g., `lucidsystems.io`)
3. Vercel provides DNS instructions

### **DNS Configuration**

**For root domain** (`lucidsystems.io`):
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain** (`www.lucidsystems.io`):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**SSL Certificate**: Auto-provisioned by Vercel (Let's Encrypt)

---

## 📊 Post-Deployment Verification

### **1. Basic Functionality**

Visit your production URL and test:

- [ ] Homepage loads
- [ ] All sections render correctly
- [ ] Animations work smoothly
- [ ] Navigation links scroll correctly
- [ ] Footer links work (legal pages)
- [ ] Cal.com booking opens
- [ ] Mobile responsive (test on phone)

### **2. SEO & Metadata**

- [ ] OG image appears when sharing link (test on Twitter/LinkedIn)
- [ ] Page title shows in browser tab
- [ ] Favicon displays correctly
- [ ] `robots.txt` allows indexing (Vercel auto-creates)

### **3. Performance**

Run Lighthouse audit:

```
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run audit
4. Target scores: 90+ for all metrics
```

### **4. Console Errors**

- [ ] Open DevTools Console
- [ ] Scroll through entire page
- [ ] Verify no errors (warnings OK)
- [ ] Check for hydration warnings (should be none)

---

## 🔍 Monitoring

### **Vercel Analytics**

Enable in Vercel dashboard:

```
Project Settings → Analytics → Enable
```

Tracks:
- Page views
- Unique visitors
- Top pages
- Referrers

### **External Analytics (Optional)**

Add Google Analytics or Plausible:

```tsx
// In app/layout.tsx <head>
<Script src="https://plausible.io/js/script.js" data-domain="yourdomain.com" />
```

---

## 🐛 Troubleshooting

### **Build Fails on Vercel**

1. Check build logs in Vercel dashboard
2. Common issues:
   - Missing dependencies (run `npm install` locally)
   - TypeScript errors (run `npm run type-check`)
   - Import path issues (check file names)

### **404 on Legal Pages**

- Verify folder structure: `app/privacy/page.tsx`, not `app/privacy.tsx`
- Check file exports: `export default function Privacy() { ... }`

### **OG Image Not Showing**

- Verify file exists: `public/og.png`
- Check metadata URL matches domain
- Clear Twitter/LinkedIn cache (use [opengraph.xyz](https://www.opengraph.xyz))

### **Fonts Not Loading**

- Verify imports in `app/layout.tsx`
- Check `next/font/google` is installed
- Clear `.next` folder and rebuild

---

## 🔄 Redeployment

To redeploy after changes:

```bash
# 1. Commit changes
git add .
git commit -m "Update: description"
git push origin main

# 2. Vercel auto-deploys on push
# OR manually trigger:
vercel --prod
```

---

## 📞 Support

Issues? Email: **lucid@lucidsystems.io**

---

**Deploy with confidence. The fog lifts.** 🦅