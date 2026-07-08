# Weather Dashboard on Render

## Step-by-Step Setup Guide

### Prerequisites
- GitHub account
- Render account (https://render.com)
- OpenWeatherMap API key (free tier available)

---

## Part 1: Get OpenWeatherMap API Key

### 1. Create Account
1. Go to https://openweathermap.org/api
2. Click "Sign Up"
3. Create free account with email
4. Verify email

### 2. Get API Key
1. Go to https://home.openweathermap.org/api_keys
2. You'll see your default API key
3. Copy it (you'll need this later)
4. Free tier includes:
   - Current weather data
   - 5-day forecast
   - 1000 calls/day

---

## Part 2: Prepare GitHub Repository

### 1. Push Code to GitHub
```bash
# Make sure you're on weather-dashboard branch
git checkout weather-dashboard

# Add all files
git add .

# Commit changes
git commit -m "Add weather dashboard application"

# Push to GitHub
git push origin weather-dashboard
```

### 2. Verify on GitHub
- Go to your repository: https://github.com/rupeshbuddhu78-dev/portfolio-3d
- Check that `weather-dashboard` branch exists
- All files should be visible

---

## Part 3: Deploy on Render

### Step 1: Sign Up on Render
1. Go to https://render.com
2. Click "Get Started"
3. Sign up with GitHub (recommended)
4. Authorize Render to access your GitHub

### Step 2: Create New Web Service
1. Click on Dashboard
2. Click "New +"
3. Select "Web Service"
4. Connect your GitHub account if not already done
5. Search for your repository: `portfolio-3d`
6. Click "Connect"

### Step 3: Configure Web Service

**Name:**
```
weather-dashboard
```

**Environment:**
```
Node
```

**Region:**
```
Singapore (or closest to you)
```

**Branch:**
```
weather-dashboard
```

**Build Command:**
```
npm install && npm run build
```

**Start Command:**
```
npm start
```

### Step 4: Add Environment Variables

1. Scroll down to "Environment" section
2. Click "Add Environment Variable"
3. Add the following:

```
NEXT_PUBLIC_WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY_HERE
NODE_ENV=production
```

**Important:** Replace `YOUR_OPENWEATHER_API_KEY_HERE` with your actual API key from Step 1

### Step 5: Deploy
1. Click "Create Web Service"
2. Wait for deployment (3-5 minutes)
3. You'll see "Your service is live" message
4. Click the URL to visit your weather dashboard

---

## Part 4: Verify Deployment

### Check if Everything Works
1. Visit your Render URL
2. You should see:
   - Weather dashboard interface
   - Current weather
   - City search working
   - 5-day forecast loading

### Troubleshooting

**If page shows errors:**
1. Go back to Render dashboard
2. Click your service
3. Go to "Logs" tab
4. Check for errors
5. Common issues:
   - Missing API key → Add to Environment Variables
   - Wrong API key → Regenerate from OpenWeatherMap
   - Port issues → Should auto-configure

**API Key not working:**
1. Double-check API key copied correctly (no spaces)
2. Wait 5-10 minutes for API key to activate
3. Try another city search

---

## Part 5: Custom Domain (Optional)

### Add Your Own Domain
1. On Render dashboard, click your service
2. Go to "Settings" tab
3. Scroll to "Custom Domains"
4. Click "Add Custom Domain"
5. Enter your domain
6. Follow DNS instructions from your domain provider

### Example with Namecheap:
1. In Namecheap control panel
2. Go to "Advanced DNS"
3. Add CNAME record:
   - Host: `weather`
   - Type: `CNAME`
   - Value: `weather-dashboard.onrender.com`

---

## Part 6: Monitoring & Logs

### View Logs
1. Dashboard → Your Service → "Logs" tab
2. See real-time server logs
3. Check for errors

### Auto-Deploy on Push
- Render automatically redeploys when you push to `weather-dashboard` branch
- No manual action needed
- Check "Events" tab for deployment status

### View Metrics
- Dashboard → Your Service → "Metrics" tab
- Monitor CPU, Memory, Bandwidth usage
- Free tier limits:
  - RAM: 512 MB
  - CPU: Shared
  - Bandwidth: Unlimited

---

## Part 7: Environment Variables Explained

```env
# Required
NEXT_PUBLIC_WEATHER_API_KEY=YOUR_API_KEY

# Production settings (auto-set by Render)
NODE_ENV=production

# Optional
NEXT_PUBLIC_APP_NAME=Weather Dashboard
NEXT_PUBLIC_DEFAULT_CITY=New Delhi
```

**Note:** Variables starting with `NEXT_PUBLIC_` are accessible in browser (safe for API keys that don't expose secrets)

---

## Part 8: Troubleshooting Common Issues

### Issue 1: "Cannot GET /"
**Solution:**
- Check build command in settings
- Verify `next.config.js` exists
- Check logs for build errors
- Rebuild service: Dashboard → Service → "Manual Deploy" → "Deploy"

### Issue 2: API Key errors
**Solution:**
```bash
# Verify API key works locally first
curl "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_KEY"
```

### Issue 3: Service keeps restarting
**Solution:**
- Check memory usage in Metrics tab
- Optimize build
- Check for infinite loops in code

### Issue 4: Build fails
**Solution:**
```bash
# Test locally
npm install
npm run build
npm start

# Push fixes to GitHub
```

---

## Part 9: Going Live Checklist

- [ ] OpenWeatherMap API key obtained
- [ ] Repository pushed to GitHub
- [ ] Render account created
- [ ] Web Service created on Render
- [ ] Environment variables added
- [ ] Service deployed successfully
- [ ] Website accessible via Render URL
- [ ] Weather data loading correctly
- [ ] Search functionality working
- [ ] No console errors
- [ ] Mobile responsive check
- [ ] Custom domain configured (optional)

---

## Part 10: Updating Your App

### Make Changes Locally
```bash
# Make sure you're on weather-dashboard branch
git checkout weather-dashboard

# Make your changes
# Edit files...

# Test locally
npm run dev
```

### Deploy Updates
```bash
# Add changes
git add .

# Commit
git commit -m "Update weather dashboard"

# Push to GitHub
git push origin weather-dashboard
```

**Render will automatically redeploy!** ✅

---

## Useful Links

- **Render Dashboard:** https://dashboard.render.com
- **OpenWeatherMap API:** https://openweathermap.org/api
- **API Documentation:** https://openweathermap.org/weather-conditions
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Render Docs:** https://render.com/docs

---

## Support

If you get stuck:
1. Check Render logs
2. Verify API key is correct
3. Test locally first
4. Check GitHub branch is `weather-dashboard`
5. Contact: rupeshbuddhu78@gmail.com

---

**Happy Weather Tracking! 🌤️**
