# Setup Guide for Portfolio Website

## Getting Started

### 1. Prerequisites

Make sure you have installed:
- **Node.js** (v18 or higher): https://nodejs.org/
- **npm** (v9 or higher) or **yarn**
- **Git**: https://git-scm.com/

Verify installation:
```bash
node --version
npm --version
git --version
```

### 2. Clone & Setup

```bash
# Clone the repository
git clone https://github.com/rupeshbuddhu78-dev/portfolio-3d.git
cd portfolio-3d

# Install dependencies
npm install
```

### 3. Environment Setup

#### Option A: Gmail SMTP (Recommended)

1. Enable 2-Factor Authentication on your Google Account:
   - Go to: https://myaccount.google.com/
   - Select "Security" → "2-Step Verification"

2. Generate App Password:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Google will generate a 16-character password
   - Copy this password

3. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

4. Edit `.env.local` with your credentials:
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx  # 16-char password from step 2
NEXT_PUBLIC_CONTACT_EMAIL=your-email@gmail.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/rupeshbuddhu78-dev
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/rupesh-kumar-a0ba88410
NEXT_PUBLIC_WHATSAPP_NUMBER=+91xxxxxxxxxxxx
```

#### Option B: Other Email Providers

For SendGrid, Mailgun, etc., modify `src/app/api/contact/route.ts`:

```typescript
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
});
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Portfolio Content

Edit `src/lib/constants.ts`:

```typescript
// Update projects
export const PROJECTS = [
  {
    id: '1',
    title: 'Your Project',
    description: 'Project description',
    // ... other fields
  },
];

// Update skills
export const SKILLS = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript'],
  },
];

// Update services
export const SERVICES = [
  {
    id: '1',
    title: 'Web Development',
    // ... other fields
  },
];
```

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  background: '#0a0e27',  // Change background color
  primary: {
    500: '#0ea5e9',  // Change primary color
  },
}
```

### Update Social Links

Edit `SOCIAL_LINKS` in `src/lib/constants.ts`:

```typescript
export const SOCIAL_LINKS = {
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-profile',
  email: 'your-email@example.com',
  whatsapp: '+91xxxxxxxxxx',
};
```

## Deployment

### Deploy to Vercel (Easiest)

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables in Vercel dashboard
6. Click "Deploy"

### Deploy to Other Services

#### Netlify
```bash
npm run build
# Deploy the 'out' directory
```

#### Railway
```bash
# Connect your GitHub repo on railway.app
# Netlify will auto-detect Next.js
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## Testing Locally

```bash
# Test contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "This is a test message"
  }'
```

## Troubleshooting

### "Cannot find module" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Email not sending
- Check `.env.local` file exists
- Verify Gmail app password is correct (16 characters with spaces)
- Check Gmail account settings allow less secure apps (if not using app password)
- Check browser console for errors

### Styling issues
```bash
rm -rf .next
npm run dev
```

## Performance Optimization

### Before Production:

```bash
# Build and test
npm run build
npm start

# Type check
npm run type-check

# Lint code
npm run lint
```

## Additional Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Documentation](https://react.dev)

## Support

For issues or questions:
1. Check existing GitHub issues
2. Read troubleshooting section above
3. Contact: rupeshbuddhu78@gmail.com

---

**Happy coding! 🚀**
