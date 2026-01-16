# Contributing to Lucid Systems

**This is a personal brand project.** Contributions are not actively solicited, but feedback and suggestions are welcome.

---

## 🦅 Philosophy

Lucid Systems is built on the **Ancient Modern** aesthetic:

- **Sharp edges**: No rounded corners
- **Stone colors**: Dark + cyan accents
- **Intentional animation**: Premium easing, no fluff
- **Eagle voice**: "I" not "we", authority not friendliness

Any contribution must align with this vision.

---

## 🐛 Reporting Issues

If you find a bug or visual inconsistency:

1. **Check if it's intentional** (sharp edges, dark theme, etc.)
2. **Open an issue** with:
   - Browser + version
   - Screenshot or screen recording
   - Steps to reproduce
   - Expected vs actual behavior

---

## 💡 Suggesting Enhancements

For feature suggestions:

1. **Consider the brand** (does it fit "Ancient Modern"?)
2. **Describe the use case** (who benefits and how?)
3. **Provide examples** (mockups, competitor sites, etc.)

---

## 🔧 Code Style

If submitting code:

### **Typography**
- Headlines: `text-ancient` (Cinzel)
- Body: `text-modern` (JetBrains Mono)
- Always uppercase headings with wide tracking

### **Colors**
- Background: `bg-obsidian` (#050505)
- Cards: `bg-basalt` (#111111)
- Text primary: `text-alabaster` (#e5e5e5)
- Text secondary: `text-granite` (#737373)
- Accent: `text-lucid` (#00f0ff)

### **Spacing**
- Sections: `py-20 md:py-32`
- Components: `space-y-12 md:space-y-16`
- Cards: `gap-8`

### **Animations**
- Always use premium easing: `[0.25, 0.1, 0.25, 1.0]`
- Respect `prefers-reduced-motion`
- Keep durations < 1s (except intentional slow reveals)

### **Sharp Edges**
- **Never** use `rounded-*` classes
- Borders: `border` (no radius)
- Cards: Sharp corners always

---

## 📝 Commit Messages

Use this format:

```
🦅 FEATURE: Add new section
🔧 FIX: Correct mobile spacing
🎨 STYLE: Refine button hover state
📝 DOCS: Update README
♻️ REFACTOR: Simplify animation logic
⚡ PERF: Optimize image loading
```

---

## 🚀 Pull Request Process

1. **Fork the repo**
2. **Create a branch**: `git checkout -b feature/your-feature`
3. **Make changes** (follow code style above)
4. **Test locally**: `npm run build` → verify no errors
5. **Commit with emoji prefix** (see above)
6. **Push and open PR**

**Note:** PRs will be reviewed for brand alignment before merging.

---

## ❌ What Will Not Be Accepted

- Rounded corners or "soft" design elements
- Generic SaaS styling (colorful, playful)
- "We" voice instead of "I" voice
- Features that don't serve B2B buyers
- Excessive animations or "flashy" effects

---

## Contact

Questions? Email: **lucidtheeagle@gmail.com**

---

**Built by Lucid the Eagle. Every line of code is intentional.**