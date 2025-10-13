# Portfolio Website - Quick Reference Guide

## 📁 Project Structure at a Glance

```
portfolio-website/
├── public/              → Static files (HTML, favicon, etc.)
├── src/
│   ├── components/      → All React components
│   │   ├── ui/         → 40+ Shadcn/ui components
│   │   ├── About.jsx   → About section
│   │   ├── Contact.jsx → Contact form
│   │   ├── Header.jsx  → Navigation
│   │   ├── Hero.jsx    → Landing section
│   │   ├── Projects.jsx → Project showcase
│   │   ├── Skills.jsx  → Skills display
│   │   └── Portfolio.jsx → Main page
│   ├── hooks/          → Custom React hooks
│   ├── lib/            → Utility functions
│   ├── App.js          → Main app component
│   ├── index.js        → Entry point
│   ├── mock.js         → ⭐ YOUR CONTENT HERE
│   └── index.css       → Global styles
├── package.json        → Dependencies & scripts
├── tailwind.config.js  → Styling configuration
└── craco.config.js     → Path alias setup
```

---

## 🔧 Key Technologies

| Technology | Purpose | Why Used |
|------------|---------|----------|
| **React 18** | UI Library | Component-based, industry standard |
| **Tailwind CSS** | Styling | Fast development, responsive |
| **Shadcn/ui** | UI Components | Accessible, customizable |
| **Radix UI** | Primitives | Accessibility built-in |
| **React Router** | Navigation | Single-page app routing |
| **CRACO** | Config | Enable path aliases |
| **Lucide Icons** | Icons | Professional icons |

---

## 🎯 Important Files Explained

### **src/mock.js** - YOUR CONTENT
```javascript
export const portfolioData = {
  personal: { name, email, links... },
  about: { intro, education, highlights... },
  skills: { languages, frontend, backend... },
  projects: [ { title, description, tech, github... } ],
  experience: [ ... ]
}
```
**⭐ Edit this file to update your portfolio content!**

---

### **src/components/Portfolio.jsx** - MAIN PAGE
```jsx
<Portfolio>
  <Header />         // Navigation
  <Hero />          // Landing section
  <About />         // About me
  <Skills />        // Tech skills
  <Projects />      // Project cards
  <UpcomingProjects /> // Future work
  <Contact />       // Contact form
  <Footer />        // Footer
</Portfolio>
```

---

### **package.json** - SCRIPTS
```json
{
  "scripts": {
    "start": "craco start",    // Dev server
    "build": "craco build",    // Production build
    "test": "craco test"       // Run tests
  }
}
```

---

## 🚀 Common Commands

```bash
# Development
npm start              # Start dev server (localhost:3000)
npm run build          # Build for production
npm test               # Run tests

# Git
git add .              # Stage changes
git commit -m "msg"    # Commit changes
git push               # Push to GitHub

# Maintenance
npm install            # Install dependencies
npm update             # Update packages
```

---

## 📝 How to Update Your Portfolio

### 1. **Update Personal Info**
Edit `src/mock.js`:
```javascript
personal: {
  name: "Your Name",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  // ...
}
```

### 2. **Add Projects**
Edit `src/mock.js`:
```javascript
projects: [
  {
    id: 1,
    title: "My Project",
    description: "What it does...",
    tech: ["React", "Node.js"],
    github: "https://github.com/...",
    live: "https://..."
  }
]
```

### 3. **Update Skills**
Edit `src/mock.js`:
```javascript
skills: {
  languages: ["Java", "Python", "JavaScript"],
  frontend: ["React", "Vue", "Angular"],
  // ...
}
```

### 4. **See Changes**
- Save file
- Browser auto-refreshes
- Check result

---

## 🎨 UI Components Used

### **From Shadcn/ui:**
```jsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Dialog } from "@/components/ui/dialog"
import { Tabs } from "@/components/ui/tabs"
```

### **Common Patterns:**
```jsx
// Button variants
<Button variant="default">Primary</Button>
<Button variant="outline">Secondary</Button>
<Button variant="ghost">Subtle</Button>

// Cards
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// Badges (for skills)
<Badge>React</Badge>
<Badge variant="secondary">Node.js</Badge>
```

---

## 💅 Tailwind CSS Classes

### **Layout**
```jsx
className="flex flex-col items-center justify-center"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
className="container mx-auto px-4 py-8"
```

### **Responsive**
```jsx
className="text-sm md:text-base lg:text-lg"
className="hidden md:block"  // Hide on mobile
className="md:hidden"         // Show only on mobile
```

### **Colors**
```jsx
className="bg-primary text-primary-foreground"
className="bg-secondary text-secondary-foreground"
className="text-muted-foreground"
```

---

## 🌐 Deployment to Netlify

### **Quick Steps:**
1. ✅ Code is already on GitHub
2. Go to https://app.netlify.com/
3. "New site from Git" → Select repo
4. Build settings (auto-detected):
   - Build: `npm run build`
   - Publish: `build`
5. Click "Deploy"

### **Result:**
- Live URL: `https://yoursite.netlify.app`
- Free HTTPS
- Auto-deploy on git push
- Custom domain support

---

## 🐛 Troubleshooting

### **Problem: npm install fails**
```bash
npm cache clean --force
npm install
```

### **Problem: Port 3000 in use**
```bash
# Find and kill process
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### **Problem: Changes not showing**
```bash
# Hard refresh browser
Ctrl + Shift + R
```

### **Problem: Git push fails**
```bash
git pull origin main
git push
```

---

## 📦 Dependencies Overview

### **Production (42 packages)**
- React & React DOM
- React Router DOM
- 20+ Radix UI packages
- Tailwind CSS utilities
- Lucide Icons
- Testing libraries

### **Development (5 packages)**
- CRACO
- Tailwind CSS
- PostCSS
- Autoprefixer

### **Total: 1600+ packages (including dependencies)**

---

## 🔍 File Purposes Quick Reference

| File | Purpose |
|------|---------|
| `public/index.html` | HTML template |
| `src/index.js` | App entry point |
| `src/App.js` | Main component with routing |
| `src/mock.js` | **Your content data** |
| `src/components/Portfolio.jsx` | Main portfolio page |
| `src/components/Header.jsx` | Navigation bar |
| `src/components/Hero.jsx` | Landing section |
| `src/components/About.jsx` | About section |
| `src/components/Skills.jsx` | Skills display |
| `src/components/Projects.jsx` | Project showcase |
| `src/components/Contact.jsx` | Contact form |
| `src/components/Footer.jsx` | Page footer |
| `src/components/ui/*` | Reusable UI components |
| `src/hooks/use-toast.js` | Toast notifications |
| `src/lib/utils.js` | Helper functions |
| `package.json` | Dependencies & scripts |
| `tailwind.config.js` | Tailwind configuration |
| `craco.config.js` | Webpack customization |
| `jsconfig.json` | IDE configuration |
| `.gitignore` | Git ignore rules |

---

## 🎓 What This Project Demonstrates

### **Technical Skills:**
✅ React.js development
✅ Modern JavaScript (ES6+)
✅ Responsive web design
✅ Component architecture
✅ State management
✅ Routing
✅ CSS frameworks (Tailwind)
✅ Build tools (Webpack)
✅ Git version control
✅ Deployment (Netlify/Vercel)

### **Professional Practices:**
✅ Clean code organization
✅ Reusable components
✅ Documentation
✅ Version control
✅ Deployment workflow
✅ Accessibility standards
✅ Performance optimization

---

## 📚 Additional Resources

### **Documentation:**
- Full docs: `PROJECT_DOCUMENTATION.pdf` (50+ pages)
- React: https://react.dev/
- Tailwind: https://tailwindcss.com/
- Shadcn/ui: https://ui.shadcn.com/

### **Learning:**
- React Tutorial: https://react.dev/learn
- Tailwind Docs: https://tailwindcss.com/docs
- JavaScript MDN: https://developer.mozilla.org/

### **Deployment:**
- Netlify Docs: https://docs.netlify.com/
- Vercel Docs: https://vercel.com/docs

---

## ✅ Checklist Before Deployment

- [ ] Update `src/mock.js` with real data
- [ ] Add project screenshots/images
- [ ] Update social media links
- [ ] Add resume PDF to `public/`
- [ ] Test all sections
- [ ] Check mobile responsiveness
- [ ] Test contact form
- [ ] Run `npm run build` successfully
- [ ] Update `index.html` title/description
- [ ] Check for console errors

---

## 🎯 Quick Start Summary

1. **Install:** `npm install`
2. **Run:** `npm start`
3. **Edit:** `src/mock.js`
4. **Style:** Edit components with Tailwind
5. **Build:** `npm run build`
6. **Deploy:** Push to GitHub → Netlify

---

**Created:** October 11, 2025  
**Version:** 1.0  
**For:** Phani Manda

---

*For complete details, see `PROJECT_DOCUMENTATION.pdf`*
