# Ultra-Premium 3D Portfolio Website 🚀

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-blue?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

An award-winning, ultra-premium 3D portfolio website built for Rupesh Kumar - Enterprise MERN Full Stack Developer. Designed to feel like a million-dollar software company website.

## ✨ Features

### 🎨 Design & Animations
- **Aurora Background** - Animated gradient background with floating orbs
- **Particle System** - Interactive canvas-based particle effects with connection lines
- **Glassmorphism** - Modern glass-like components with blur effects
- **3D Elements** - Floating cards and animated components
- **Smooth Animations** - GSAP and Framer Motion for premium motion design
- **Responsive Design** - Mobile-first approach, fully responsive
- **Dark Theme** - Professional dark mode with purple/blue accents

### 🔧 Technical Features
- **Next.js 14** - Server-side rendering and static generation
- **TypeScript** - Full type safety and developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - Modern React patterns
- **Form Validation** - Zod + React Hook Form
- **Email Integration** - Nodemailer for contact form
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Performance Optimized** - Image optimization, lazy loading
- **Accessibility** - WCAG 2.1 compliance

### 📑 Sections
- **Hero** - Eye-catching hero section with CTA buttons
- **About** - Personal introduction with stats
- **Skills** - Technical skills organized by category
- **Experience** - Work experience and education timeline
- **Projects** - Featured projects with detailed case studies
- **Services** - Services offered with feature lists
- **Contact** - Professional contact form with validation
- **Footer** - Social links and navigation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (https://nodejs.org)
- npm 9+ or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/rupeshbuddhu78-dev/portfolio-3d.git
cd portfolio-3d
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Setup environment variables**
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your configuration:
```env
# Email Configuration (for contact form)
NEXT_PUBLIC_EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Contact Email
NEXT_PUBLIC_CONTACT_EMAIL=your-email@gmail.com

# Social Links
NEXT_PUBLIC_GITHUB_URL=https://github.com/rupeshbuddhu78-dev
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/rupesh-kumar-a0ba88410
NEXT_PUBLIC_WHATSAPP_NUMBER=+91xxxxxxxxxxxx
```

### For Gmail (Recommended)
1. Enable 2-Factor Authentication on your Google Account
2. Generate an [App Password](https://myaccount.google.com/apppasswords)
3. Use the generated password as `EMAIL_PASSWORD`

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Project Structure

```
portfolio-3d/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts     # Contact form API
│   ├── components/
│   │   ├── Navigation.tsx       # Navigation bar
│   │   ├── Hero.tsx             # Hero section
│   │   ├── About.tsx            # About section
│   │   ├── Skills.tsx           # Skills section
│   │   ├── Experience.tsx       # Experience section
│   │   ├── Projects.tsx         # Projects section
│   │   ├── Services.tsx         # Services section
│   │   ├── Contact.tsx          # Contact form
│   │   ├── Footer.tsx           # Footer
│   │   └── effects/
│   │       ├── Aurora.tsx       # Aurora background
│   │       └── ParticleBackground.tsx  # Particle system
│   ├── hooks/
│   │   ├── useMouseMove.ts      # Mouse movement hook
│   │   └── useIntersectionObserver.ts  # Intersection observer hook
│   ├── lib/
│   │   ├── constants.ts         # Constants and data
│   │   └── utils.ts             # Utility functions
│   └── types/
│       └── index.ts             # TypeScript types
├── public/                       # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── README.md
```

## 🎯 Key Technologies

### Frontend
- **Next.js 14** - React framework with SSR/SSG
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations
- **React Icons** - Icon library

### Validation & Forms
- **React Hook Form** - Performant forms
- **Zod** - Schema validation
- **React Hot Toast** - Toast notifications

### Backend
- **Next.js API Routes** - Serverless functions
- **Nodemailer** - Email sending

### Development
- **TypeScript** - Type checking
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 🎨 Customization

### Updating Content

1. **Project Data** - Edit `src/lib/constants.ts`
```typescript
export const PROJECTS = [
  {
    id: '1',
    title: 'Your Project',
    // ... more fields
  },
];
```

2. **Skills** - Update `SKILLS` array in constants
```typescript
export const SKILLS = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', ...],
  },
];
```

3. **Services** - Modify `SERVICES` array
4. **Experience** - Update `EXPERIENCES` array
5. **Social Links** - Edit `SOCIAL_LINKS` object

### Color Scheme

Edit `tailwind.config.ts` to customize colors:
```typescript
colors: {
  background: '#0a0e27',
  foreground: '#ffffff',
  primary: { ... },
  accent: { ... },
}
```

### Animations

Modify animation values in `globals.css` and component files:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

## 📝 Environment Variables

Required environment variables:

| Variable | Description | Example |
|----------|-------------|----------|
| `EMAIL_USER` | Gmail address for sending emails | user@gmail.com |
| `EMAIL_PASSWORD` | Gmail app password | xxxx xxxx xxxx xxxx |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email to receive contact forms | contact@example.com |
| `NEXT_PUBLIC_GITHUB_URL` | GitHub profile URL | https://github.com/... |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn profile URL | https://linkedin.com/in/... |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number with country code | +91xxxxxxxxxx |

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Deploy to Other Platforms

#### Netlify
```bash
npm run build
# Deploy the .next folder
```

#### Railway/Render
```bash
npm install
npm run build
npm start
```

## 📊 Performance Optimization

- ✅ Image optimization with Next.js Image
- ✅ Code splitting and lazy loading
- ✅ CSS-in-JS optimization
- ✅ Font optimization (Google Fonts)
- ✅ Minification and compression
- ✅ SEO meta tags
- ✅ Core Web Vitals optimized

## ♿ Accessibility

- WCAG 2.1 Level AA compliant
- Semantic HTML structure
- ARIA labels and attributes
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance

## 🔒 Security

- ✅ Content Security Policy headers
- ✅ XSS protection
- ✅ CSRF tokens
- ✅ Input validation and sanitization
- ✅ Environment variable protection
- ✅ No sensitive data in client-side code

## 📈 SEO

- ✅ Meta tags (title, description)
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ Structured data (JSON-LD)
- ✅ Sitemap ready
- ✅ Robots.txt ready
- ✅ Fast loading (Core Web Vitals)

## 🧪 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format
```

### Code Quality

- ESLint configuration
- TypeScript strict mode
- Prettier formatting
- Husky pre-commit hooks (optional)

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Framer Motion](https://www.framer.com/motion)
- [GSAP Documentation](https://gsap.com/docs)

## 🐛 Troubleshooting

### Contact Form Not Sending

1. Check Gmail app password is correct
2. Enable "Less secure app access" (if not using app password)
3. Check email configuration in `.env.local`
4. Look at server logs for errors

### Build Errors

1. Clear `.next` folder: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check Node.js version: `node --version` (should be 18+)

### Styling Issues

1. Clear Tailwind cache: `rm -rf .next`
2. Restart dev server
3. Check `tailwind.config.ts` paths

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

Designed and built with ❤️ by Rupesh Kumar

## 📞 Contact & Support

- 📧 Email: rupeshbuddhu78@gmail.com
- 💼 LinkedIn: [linkedin.com/in/rupesh-kumar-a0ba88410](https://linkedin.com/in/rupesh-kumar-a0ba88410)
- 🐙 GitHub: [github.com/rupeshbuddhu78-dev](https://github.com/rupeshbuddhu78-dev)
- 💬 WhatsApp: [+91 9877638282](https://wa.me/919877638282)

---

**Made with ❤️ for the web development community**
