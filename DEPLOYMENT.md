# 🚀 Quick Deployment Guide

## Deploy Your Landing Page in 5 Minutes

### Step 1: Initialize Git Repository

```bash
cd landing-page
git init
git add .
git commit -m "Initial landing page setup"
```

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Name it: `turnover-landing` (or any name you prefer)
3. Keep it **Public** (required for free Vercel/Netlify)
4. Don't initialize with README (we already have one)

### Step 3: Push to GitHub

```bash
# Replace with your actual repository URL
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/turnover-landing.git
git push -u origin main
```

---

## 🌐 Vercel Deployment (Recommended)

### Why Vercel?

- ✅ Free tier with custom domains
- ✅ Automatic HTTPS
- ✅ Instant deploys on git push
- ✅ Perfect for React apps

### Deploy Steps:

1. **Go to [vercel.com](https://vercel.com)**

   - Sign up/Login with GitHub

2. **Import Project**

   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find your `turnover-landing` repo
   - Click "Import"

3. **Configure Project**

   - Framework Preset: **Create React App** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-configured)
   - Output Directory: `build` (auto-configured)

4. **Add Environment Variable**

   - Click "Environment Variables"
   - Add: `REACT_APP_BACKEND_URL` = `http://localhost:3333` (change to your backend URL when ready)
   - Click "Add"

5. **Deploy!**
   - Click "Deploy"
   - Wait 1-2 minutes for build
   - Your site is live! 🎉

### Connect Custom Domain (turnover-manager.com)

1. In Vercel project dashboard, go to **Settings** → **Domains**
2. Click "Add"
3. Enter: `turnover-manager.com`
4. Vercel will show you DNS records to add
5. Go to your domain registrar (where you bought the domain)
6. Add the DNS records:

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

7. Wait 5-60 minutes for DNS propagation
8. Your site will be live at turnover-manager.com! 🌍

---

## 🔷 Netlify Deployment (Alternative)

### Deploy Steps:

1. **Go to [netlify.com](https://netlify.com)**

   - Sign up/Login with GitHub

2. **Add New Site**

   - Click "Add new site" → "Import an existing project"
   - Connect to Git provider (GitHub)
   - Select your `turnover-landing` repository

3. **Configure Build Settings**

   - Base directory: (leave empty)
   - Build command: `npm run build`
   - Publish directory: `build`

4. **Add Environment Variable**

   - Click "Show advanced"
   - Add variable:
     - Key: `REACT_APP_BACKEND_URL`
     - Value: `http://localhost:3333` (update when backend is deployed)

5. **Deploy!**
   - Click "Deploy site"
   - Wait 1-2 minutes
   - Your site is live! 🎉

### Connect Custom Domain

1. In Netlify site dashboard, go to **Domain Settings**
2. Click "Add custom domain"
3. Enter: `turnover-manager.com`
4. Follow DNS configuration instructions from Netlify
5. Add these records at your domain registrar:

   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: <your-site>.netlify.app
   ```

6. Wait for DNS propagation (5-60 minutes)
7. Done! 🌍

---

## 🔗 Update Backend URL

### For Local Testing:

Keep: `REACT_APP_BACKEND_URL=http://localhost:3333`

### For Production:

Once your backend is deployed, update the environment variable:

**Vercel:**

1. Project Settings → Environment Variables
2. Edit `REACT_APP_BACKEND_URL`
3. Set to: `https://your-backend.com`
4. Click "Save"
5. Trigger redeploy: Deployments → Latest → Click "..." → "Redeploy"

**Netlify:**

1. Site Settings → Build & deploy → Environment
2. Edit `REACT_APP_BACKEND_URL`
3. Set to: `https://your-backend.com`
4. Click "Save"
5. Trigger redeploy: Deploys → Trigger deploy → "Deploy site"

---

## ✅ Checklist

After deployment, verify:

- [ ] Landing page loads at your URL
- [ ] All sections visible (Hero, Features, How it Works, Benefits, Pricing)
- [ ] "Join Waitlist" buttons work
- [ ] Waitlist form loads
- [ ] Test submission works (check email notifications)
- [ ] Custom domain connected (if applicable)
- [ ] HTTPS is enabled (should be automatic)
- [ ] Mobile responsive (test on phone)

---

## 🎯 Next Steps

1. **Deploy Backend**: Your waitlist needs the backend API running

   - Deploy backend to Heroku, Railway, or DigitalOcean
   - Update `REACT_APP_BACKEND_URL` with deployed backend URL

2. **Run Ads**: Landing page is ready for traffic!

   - Google Ads
   - Facebook/Instagram Ads
   - Reddit Ads (great for Turo hosts)

3. **Monitor Signups**: Check your email for notifications

   - Or check MongoDB database directly
   - Or build simple admin dashboard

4. **Iterate**: Update copy, test different CTAs, optimize conversion

---

## 🆘 Troubleshooting

### Build Fails

- **Error**: `MODULE_NOT_FOUND`
  - **Fix**: Make sure package.json has all dependencies
  - Run `npm install` locally first to verify

### Waitlist Not Working

- **Error**: Network error / 404
  - **Fix**: Check `REACT_APP_BACKEND_URL` is correct
  - Verify backend is running and accessible
  - Check CORS is enabled on backend

### Domain Not Working

- **Error**: DNS_PROBE_FINISHED_NXDOMAIN
  - **Fix**: Wait longer for DNS propagation (up to 48 hours)
  - Verify DNS records are correct
  - Try clearing DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

---

## 📧 Support

Issues with deployment? Contact: razaqalagbada@gmail.com

**Pro Tip**: Both Vercel and Netlify have free tiers that are perfect for landing pages. Pick whichever you're more comfortable with!
