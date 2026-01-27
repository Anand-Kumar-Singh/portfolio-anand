# Anand Singh - Portfolio Website

## 🚀 **Built with Next.js 14 + TypeScript + Emotion CSS**

A modern, responsive full-stack developer portfolio showcasing projects, skills, and experience.

## ✨ Features

### 🎨 **Modern UI/UX**
- Beautiful gradient designs
- Smooth animations and transitions
- Fully responsive (desktop, tablet, mobile)
- Dark-themed hero section
- Clean, professional layout

### ⚡ **Performance**
- Next.js 14 App Router
- Server-side rendering (SSR)
- Automatic code splitting
- Optimized bundle size
- Fast page loads

### 🎭 **Animations**
- Entrance animations (fade, slide, scale)
- Scroll-triggered animations
- Floating tech icons
- Button hover effects
- Smooth scroll navigation

### 🎯 **Components**
- **Header**: Fixed navigation with hamburger menu
- **Hero**: Animated introduction with tech stack
- **About**: Expertise cards with hover effects
- **Skills**: Technology showcase with icons
- **Projects**: Portfolio projects with descriptions
- **Contact**: Interactive contact form
- **Footer**: Social links and copyright

### 💅 **Styling**
- Emotion CSS-in-JS
- Styled components
- TypeScript type safety
- Responsive breakpoints
- Global CSS variables

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Emotion CSS
- **Animations**: Emotion keyframes
- **HTTP Client**: Axios

### **Backend** (Separate Spring Boot project)
- **Framework**: Spring Boot
- **Language**: Java
- **Database**: JPA/Hibernate
- **Build Tool**: Maven

## 📦 Installation

### **Prerequisites**
- Node.js 18+ and npm
- Git

### **Clone & Install**
```bash
# Clone the repository
git clone <repository-url>
cd NewProject/frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start dev server (hot reload)

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🌐 Environment Variables

Create `.env.local` file in the `frontend` directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=/api

# Optional: Analytics, etc.
NEXT_PUBLIC_GA_ID=your-ga-id
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── registry.tsx        # Emotion setup
│   ├── components/
│   │   ├── common/             # Reusable components
│   │   │   ├── AnimatedSection.tsx
│   │   │   └── Button.tsx
│   │   └── portfolio/          # Portfolio sections
│   │       ├── Header.tsx
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Projects.tsx
│   │       ├── Contact.tsx
│   │       ├── Footer.tsx
│   │       └── styles/         # Emotion styled components
│   ├── hooks/                  # Custom React hooks
│   │   └── useScrollAnimation.ts
│   ├── services/               # API services
│   │   └── apiService.ts
│   ├── styles/                 # Global styles
│   │   ├── index.css
│   │   └── App.css
│   └── utils/                  # Utilities & constants
│       └── constants.ts
├── public/
│   └── images/                 # Static images
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies
```

## 🎨 Customization

### **Update Personal Information**

1. **Name & Details**: Edit `src/components/portfolio/Hero.tsx`
2. **Contact Info**: Edit `src/components/portfolio/Contact.tsx`
3. **Projects**: Edit `src/components/portfolio/Projects.tsx`
4. **Skills**: Edit `src/components/portfolio/Skills.tsx`
5. **Images**: Replace in `public/images/`

### **Colors & Theme**

Edit CSS variables in `src/styles/index.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-primary: #1a202c;
  /* ... more variables */
}
```

### **Animations**

Modify keyframes in component style files or `src/styles/index.css`

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

### **Other Platforms**
1. Build: `npm run build`
2. Output: `.next` directory
3. Start: `npm start` (or use platform-specific config)

### **Environment Variables**
Remember to set `NEXT_PUBLIC_API_URL` in your deployment platform.

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
Mobile: < 480px
Tablet: 481px - 768px
Desktop: 769px - 1200px
Large: > 1200px
```

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🐛 Known Issues

- Watchpack warnings on macOS (harmless, doesn't affect functionality)
- Fix: Increase file watcher limit or ignore warnings

## 📝 License

MIT License - feel free to use this portfolio template for your own projects!

## 👤 Author

**Anand Singh**
- Full Stack Developer
- Spring Boot | React | Next.js
- Email: anand.singh@example.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Emotion for CSS-in-JS
- React team
- All open-source contributors

---

**Built with ❤️ using Next.js and TypeScript**

For detailed migration notes, see [NEXTJS_MIGRATION.md](../NEXTJS_MIGRATION.md)
