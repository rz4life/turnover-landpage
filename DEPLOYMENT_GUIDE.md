# 🚀 Deployment Guide - Turnover Manager Landing Page

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Vercel CLI**: Already installed globally (`npm install -g vercel`)
3. **GitHub Repository**: Connected to your Vercel project

---

## 📦 Environment Variables Setup

Before deploying, you need to set up environment variables in Vercel Dashboard.

### Required Environment Variables

1. Go to your Vercel project dashboard
2. Navigate to **Settings → Environment Variables**
3. Add the following variables:

```env
# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
OWNER_EMAIL=your-owner-email@gmail.com

# MongoDB Configuration (Optional)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=turnover
```

### Getting Gmail App Password

1. Go to Google Account → Security → 2-Step Verification
2. Scroll to bottom → App passwords
3. Generate new app password
4. Copy the 16-character password (no spaces)
5. Use this as `EMAIL_PASSWORD`

---

## 🏠 Running Locally

### Method 1: Vercel Dev (Recommended - Tests Production Environment)

This runs your app exactly as it will run in production with serverless functions.

```bash
# Start Vercel development server
npm run dev

# Or directly
vercel dev
```

**Access at**: http://localhost:3000

✅ **Features:**

- API endpoints work (`/api/waitlist`)
- Environment variables loaded from `.env`
- Serverless functions tested locally
- Same behavior as production

### Method 2: React Dev Server (Frontend Only)

For quick frontend-only development (API won't work).

```bash
npm start
```

⚠️ **Note**: The `/api/waitlist` endpoint will return 404. Use this only for UI development.

---

## 🌍 Deploying to Production

### Option 1: Deploy via CLI (Recommended)

```bash
# Preview deployment (test before production)
vercel

# Production deployment
npm run deploy

# Or directly
vercel --prod
```

### Option 2: Deploy via GitHub (Auto-Deploy)

1. Push your code to GitHub:

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. Vercel will automatically deploy on push to `main` branch

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Configure project settings (auto-detected)
4. Add environment variables
5. Click **Deploy**

---

## ✅ Post-Deployment Checklist

### 1. Test the Deployment

Visit your production URL and test:

- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] Waitlist page accessible
- [ ] Form submission works
- [ ] Confirmation email received
- [ ] Owner notification email received

### 2. Verify Environment Variables

In Vercel Dashboard → Settings → Environment Variables:

- [ ] `EMAIL_USER` is set
- [ ] `EMAIL_PASSWORD` is set
- [ ] `OWNER_EMAIL` is set
- [ ] `MONGODB_URI` is set (if using database)
- [ ] `DB_NAME` is set (if using database)

### 3. Check Logs

1. Go to Vercel Dashboard → Deployments
2. Click on your deployment
3. Check **Functions** tab for API logs
4. Look for any errors

### 4. Test API Endpoint

Test the serverless function:

```bash
# Test with curl
curl -X POST https://your-domain.vercel.app/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "isTuroHost": "Yes, I currently host on Turo",
    "wouldUse": "Yes, definitely!"
  }'
```

Should return:

```json
{
  "success": true,
  "message": "Successfully joined the waitlist! Check your email for confirmation."
}
```

---

## 🔧 Troubleshooting

### Problem: API Returns 404

**Solution:**

1. Check `vercel.json` configuration is correct
2. Ensure `api/waitlist.js` exists
3. Redeploy: `vercel --prod`

### Problem: Email Not Sending

**Possible Causes:**

1. Missing environment variables
2. Invalid Gmail app password
3. Gmail security blocking

**Solution:**

1. Verify environment variables in Vercel Dashboard
2. Generate new app password
3. Check Vercel function logs for errors

### Problem: CORS Errors

**Solution:**

- API already has CORS headers configured
- If still having issues, check browser console for specific error
- Verify the API is being called from your Vercel domain

### Problem: MongoDB Connection Fails

**Solution:**

1. Verify `MONGODB_URI` is correct
2. Check MongoDB Atlas network access (allow all IPs: `0.0.0.0/0`)
3. Ensure database user has read/write permissions
4. Check connection string format

---

## 📊 Monitoring

### View Deployment Logs

```bash
# View logs for latest deployment
vercel logs

# View logs for specific deployment
vercel logs <deployment-url>
```

### View Function Logs

1. Go to Vercel Dashboard
2. Click on your project
3. Go to **Functions** tab
4. Click on `/api/waitlist`
5. View execution logs

---

## 🔄 Updating the Deployment

### Quick Update

```bash
# Make your changes
git add .
git commit -m "Update description"
git push origin main

# Vercel auto-deploys from GitHub
```

### Manual Deploy

```bash
# Deploy immediately
vercel --prod
```

---

## 🎯 Custom Domain Setup

1. Go to Vercel Dashboard → Settings → Domains
2. Add your custom domain (e.g., `turnover-manager.com`)
3. Update DNS records as instructed by Vercel
4. Wait for SSL certificate (automatic)

---

## 📝 Important Commands

```bash
# Local development with serverless functions
npm run dev

# Build for production (test build)
npm run build

# Deploy to production
npm run deploy

# View deployment logs
vercel logs

# Pull environment variables from Vercel
vercel env pull
```

---

## 🎉 Success!

Your app is now deployed!

- **Production URL**: Check Vercel Dashboard for your URL
- **API Endpoint**: `https://your-domain.vercel.app/api/waitlist`
- **Frontend**: `https://your-domain.vercel.app`

---

## 📞 Support

If you encounter issues:

1. Check Vercel function logs
2. Review browser console for errors
3. Verify environment variables
4. Test API endpoint directly
5. Check MongoDB connection (if using)

---

## 🔐 Security Notes

1. **Never commit `.env` file** - It's in `.gitignore`
2. **Use environment variables** - Set in Vercel Dashboard
3. **Rotate secrets regularly** - Update Gmail app password periodically
4. **Monitor logs** - Check for suspicious activity
5. **Keep dependencies updated** - Run `npm audit` regularly
