# 🚀 Serverless Waitlist Setup

## ✅ What Changed

Your landing page is now **100% STANDALONE** - no separate backend server needed!

### Before:

- ❌ Needed to deploy 2 repos (frontend + backend)
- ❌ Required separate server running 24/7
- ❌ More complex deployment process

### After:

- ✅ Only deploy 1 repo (landing-page)
- ✅ Serverless function handles waitlist
- ✅ Emails sent automatically
- ✅ MongoDB saves leads (optional)
- ✅ Deploy once to Vercel - done!

---

## 📁 New Files Created

### 1. `api/waitlist.js` (Serverless Function)

This is a **Vercel Serverless Function** that runs when someone submits the waitlist form.

**What it does:**

- ✅ Validates email and form data
- ✅ Saves to MongoDB (if configured)
- ✅ Sends email to you (owner notification)
- ✅ Sends confirmation email to user
- ✅ Prevents duplicate signups

**How it works:**

- URL: `https://your-domain.com/api/waitlist`
- Vercel automatically runs this when called
- No server needed - it's serverless!

### 2. `vercel.json` (Vercel Configuration)

Tells Vercel how to deploy your app with serverless functions.

### 3. Updated Files:

- ✅ `package.json` - Added nodemailer & mongodb
- ✅ `src/pages/Waitlist.js` - Now calls `/api/waitlist` instead of external backend
- ✅ `.env` - Updated with email/database credentials

---

## 🚀 Deploy to Vercel (5 Minutes)

### Step 1: Push to GitHub

```bash
cd landing-page
git add .
git commit -m "Add serverless waitlist function"
git push
```

### Step 2: Connect to Vercel

1. Go to https://vercel.com
2. Click **"Import Project"**
3. Select your `landing-page` repository
4. Framework: **Create React App** (auto-detected)
5. Click **"Deploy"**

### Step 3: Add Environment Variables in Vercel

**IMPORTANT:** Add these in Vercel Dashboard → Settings → Environment Variables

```
EMAIL_USER=razaqalagbada@gmail.com
EMAIL_PASSWORD=your-app-password-here
OWNER_EMAIL=razaqalagbada@gmail.com
MONGODB_URI=mongodb+srv://...your-connection-string...
DB_NAME=turnover
```

### Step 4: Redeploy

After adding environment variables, click **"Redeploy"** in Vercel dashboard.

### ✅ Done! Your site is live with working waitlist!

---

## 🔧 Environment Variables Explained

### Email Settings (REQUIRED for emails to work)

**EMAIL_USER** - Your Gmail address

```
razaqalagbada@gmail.com
```

**EMAIL_PASSWORD** - Your Gmail App Password

```
How to get:
1. Go to Google Account → Security
2. Enable 2FA (required)
3. Search "App Passwords"
4. Generate password for "Mail"
5. Copy 16-character code
```

**OWNER_EMAIL** - Where notifications go

```
razaqalagbada@gmail.com
```

### Database Settings (OPTIONAL - for saving leads)

**MONGODB_URI** - Your MongoDB connection string

```
Get free MongoDB:
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Create database user
4. Get connection string
5. Replace <password> with your password
```

**DB_NAME** - Database name

```
turnover
```

**Note:** If you don't add MongoDB variables, the system will:

- ✅ Still send emails
- ❌ Won't save to database
- ✅ Still works fine!

---

## 🧪 Testing Locally

### Test with Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Run locally with serverless functions
cd landing-page
vercel dev

# Visit http://localhost:3000
# Try submitting waitlist form
```

### Test with npm start (Frontend Only)

```bash
npm start
# Note: API calls will fail since serverless function won't run
# This is just for testing UI
```

---

## 📊 How It Works

### User Flow:

1. User visits `https://your-domain.com/waitlist`
2. User fills out form (email, radio buttons, message)
3. User clicks "Join Waitlist"
4. Frontend calls `/api/waitlist` (POST request)
5. **Vercel Serverless Function runs:**
   - Validates email format
   - Checks for duplicates (if MongoDB connected)
   - Saves to database (if MongoDB connected)
   - Sends email to you (owner notification)
   - Sends confirmation email to user
6. User sees success message with confetti 🎉

### Behind the Scenes:

```
Frontend (React)
    ↓
/api/waitlist (Vercel Serverless Function)
    ↓
├─→ MongoDB (save lead)
└─→ Gmail SMTP (send emails)
    ↓
Success response back to frontend
```

---

## 🔒 Security Features

✅ **CORS Protection** - Only allows POST requests  
✅ **Email Validation** - Checks valid email format  
✅ **Duplicate Prevention** - Checks MongoDB for existing email  
✅ **Error Handling** - Graceful failures if email/DB unavailable  
✅ **Environment Variables** - Credentials never in code

---

## 💡 Vercel Serverless Functions - Free Tier

**What you get for FREE:**

- ✅ 100,000 function invocations/month
- ✅ 100 GB-hours compute time
- ✅ Automatic scaling
- ✅ Global edge network

**For waitlist, this means:**

- ✅ ~3,000 signups/day FREE
- ✅ More than enough for early launch!

---

## 🎯 Production Deployment Checklist

Before going live, make sure:

- [ ] GitHub repo is public (required for Vercel free tier)
- [ ] Pushed latest code with `git push`
- [ ] Connected repo to Vercel
- [ ] Added ALL environment variables in Vercel dashboard
- [ ] Triggered redeploy after adding env vars
- [ ] Tested waitlist form on production URL
- [ ] Checked email inbox for test confirmation
- [ ] Connected custom domain (turnover-manager.com)
- [ ] Updated DNS records at domain registrar

---

## 🐛 Troubleshooting

### Waitlist form submits but no email received

**Fix:** Check Vercel deployment logs for errors

```
Vercel Dashboard → Deployments → Click latest → Functions
Check /api/waitlist logs for errors
```

Common issues:

- ❌ EMAIL_PASSWORD wrong - Generate new app password
- ❌ 2FA not enabled - Enable 2FA in Google Account
- ❌ Environment variables not set - Add in Vercel dashboard

### "Internal Server Error" on form submit

**Fix:** Missing environment variables

```
Go to Vercel Dashboard → Settings → Environment Variables
Add all required variables, then redeploy
```

### MongoDB connection fails

**Fix:** Check connection string

- ✅ Replace `<password>` with actual password
- ✅ Whitelist all IPs: `0.0.0.0/0` in MongoDB Atlas
- ✅ Make sure cluster is running

### Form works locally but not on Vercel

**Fix:** Environment variables

```
Local .env file is NOT used in production
Must add variables in Vercel dashboard
```

---

## 🎉 Next Steps

1. **Test locally:**

   ```bash
   vercel dev
   ```

2. **Deploy to Vercel:**

   ```bash
   vercel --prod
   ```

3. **Test production:**

   - Visit your Vercel URL
   - Submit waitlist form
   - Check your email inbox

4. **Connect custom domain:**

   - Add `turnover-manager.com` in Vercel
   - Update DNS records

5. **Start marketing:**
   - Your waitlist is LIVE! 🚀
   - Run ads, share on social media
   - Collect those early signups!

---

## 📚 Additional Resources

- **Vercel Serverless Functions:** https://vercel.com/docs/functions
- **MongoDB Atlas:** https://www.mongodb.com/cloud/atlas
- **Gmail App Passwords:** https://support.google.com/accounts/answer/185833
- **Vercel Environment Variables:** https://vercel.com/docs/environment-variables

---

## 💬 Questions?

Your landing page is now:

- ✅ Standalone (no separate backend needed)
- ✅ Serverless (scales automatically)
- ✅ Free to host (Vercel free tier)
- ✅ Production ready
- ✅ Easy to deploy (one git push)

**Just deploy to Vercel and you're DONE! 🎉**
