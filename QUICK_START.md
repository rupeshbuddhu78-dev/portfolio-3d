# Weather Dashboard on Render

## Quick Setup Command

```bash
# 1. Navigate to project
cd portfolio-3d

# 2. Checkout weather branch
git checkout weather-dashboard

# 3. Test locally
npm install
npm run dev

# 4. Visit http://localhost:3000
```

## Render Deployment (5 Minutes)

### Step 1: Get API Key
```
1. Go to https://openweathermap.org/api
2. Sign up (free)
3. Go to API keys page
4. Copy your API key
```

### Step 2: Deploy on Render
```
1. Go to https://render.com
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Select "portfolio-3d" repository
5. 
Configuration:
- Name: weather-dashboard
- Build Command: npm install && npm run build
- Start Command: npm start
- Branch: weather-dashboard

6. Add Environment Variable:
   NEXT_PUBLIC_WEATHER_API_KEY=YOUR_API_KEY_HERE

7. Click "Create Web Service"
8. Wait 3-5 minutes
9. Your app is live! 🎉
```

### Step 3: Custom Domain (Optional)
```
1. In Render dashboard, click your service
2. Go to Settings → Custom Domains
3. Add your domain
4. Update DNS with CNAME record
```

## Environment Setup

Create `.env.local`:
```env
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
```

## Features

✅ Real-time weather data
✅ 5-day forecast
✅ City search
✅ Temperature conversion
✅ Mobile responsive
✅ Beautiful animations
✅ Wind, humidity, pressure data
✅ Sunrise/sunset times
✅ Multiple cities support
✅ Local storage saved cities

## Troubleshooting

**Page shows blank:**
- Check API key in environment variables
- Check Render logs
- Verify API key from OpenWeatherMap

**Weather data not loading:**
- Check internet connection
- Verify API key is correct
- Check browser console for errors
- Wait 5 mins for API key to activate

**Build fails on Render:**
- Check Node.js version (needs 18+)
- Check build logs in Render dashboard
- Clear cache and rebuild

## Links

- 🌐 Render: https://render.com
- 🔑 OpenWeatherMap: https://openweathermap.org/api
- 📚 Full Deployment Guide: See RENDER_DEPLOYMENT.md

---

**Deploy Weather Dashboard in minutes! 🌤️**
