# Dependencies for Weather Dashboard

## Install All Dependencies

```bash
npm install
```

## What Each Package Does

### Core Dependencies
- **next** - React framework
- **react** - UI library
- **react-dom** - React DOM rendering
- **typescript** - Type safety

### API & State Management
- **axios** - HTTP client for API calls
- **zustand** - State management (weather data, favorites)

### UI & Animations
- **tailwindcss** - CSS utility framework
- **framer-motion** - Smooth animations
- **react-icons** - Weather icons
- **react-hot-toast** - Toast notifications

### Utilities
- **date-fns** - Date formatting
- **clsx** - Conditional CSS classes

### Build Tools
- **postcss** - CSS processing
- **autoprefixer** - CSS vendor prefixes

### Dev Dependencies
- **prettier** - Code formatter
- **eslint** - Code linter
- **@types/** - TypeScript types

## Install Specific Packages

```bash
# If you need to install individually
npm install axios zustand framer-motion react-icons react-hot-toast date-fns clsx

# Dev dependencies
npm install --save-dev typescript prettier eslint @types/node @types/react
```

## Check Installation

```bash
# Verify everything is installed
npm list

# Update packages
npm update

# Check for vulnerabilities
npm audit
```
