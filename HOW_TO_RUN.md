# 🎯 HOW TO RUN THIS APP - SIMPLIFIED GUIDE

## 🏠 Running Locally

### Option 1: Quick Frontend Development (No API)

```bash
npm start
```

✅ Use this when: Working on UI/styling  
❌ Limitation: Waitlist form won't work (API returns 404)

---

### Option 2: Full Stack Local Development (With API)

```bash
vercel dev
```

✅ Use this when: Testing the waitlist functionality  
✅ Includes: API endpoints, email sending, database  
⚠️ Requirement: Vercel CLI installed (`npm install -g vercel`)

**First time setup:**

- Vercel will ask questions about your project
- Just press Enter to accept defaults
- It will create a `.vercel` folder (ignored by git)

---

## 🌍 Deploying to Production

### Step 1: Prepare Environment Variables

Before deploying, gather these credentials:

1. **Gmail App Password**:

   - Go to Google Account → Security → 2-Step Verification
   - Scroll to "App passwords"
   - Generate new password
   - Copy the 16-character code

2. **MongoDB URI** (Optional):
   - If using database, get connection string from MongoDB Atlas
   - Otherwise, comment out MongoDB code in `api/waitlist.js`

---

### Step 2: Deploy to Vercel

**Method A: Using CLI (Fastest)**

```bash
# Login to Vercel (first time only)
vercel login

# Deploy to production
vercel --prod
```

Follow the prompts:

- Link to existing project? → No (first time) or Yes (subsequent deploys)
- Project name? → landing-page (or your choice)
- Directory? → ./ (press Enter)

**Method B: Using GitHub (Automatic)**

1. Push code to GitHub:

   ```bash
   git add .
   git commit -m "Deploy to production"
   git push origin main
   ```

2. Connect to Vercel:

   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel auto-detects Create React App
   - Click "Deploy"

3. Every future push auto-deploys!

---

### Step 3: Add Environment Variables (CRITICAL!)

**After deploying**, the waitlist won't work until you add environment variables:

1. Go to [vercel.com](https://vercel.com) → Your Project
2. Click **Settings** → **Environment Variables**
3. Add these variables:

```
EMAIL_USER = your-email@gmail.com
EMAIL_PASSWORD = (your 16-character app password)
OWNER_EMAIL = owner@example.com
```

Optional (for database):

```
MONGODB_URI = mongodb+srv://...
DB_NAME = turnover
```

4. Click **"Redeploy"** after adding variables

---

## ✅ Testing Checklist

### Local Testing (with `vercel dev`)

- [ ] App loads at http://localhost:3000
- [ ] Can navigate to waitlist page
- [ ] Can submit form
- [ ] Receive confirmation email
- [ ] Owner receives notification email

### Production Testing

- [ ] Visit your Vercel URL (e.g., `your-project.vercel.app`)
- [ ] Homepage loads
- [ ] Navigate to `/waitlist`
- [ ] Submit form with test email
- [ ] Check inbox for confirmation
- [ ] Check owner email for notification

---

## 🐛 Common Issues & Fixes

### Issue: "Module not found: @radix-ui/react-slot"

**Fix:**

```bash
npm install @radix-ui/react-slot
```

### Issue: API returns 404 locally

**Fix:** Use `vercel dev` instead of `npm start`

### Issue: API returns 404 in production

**Fixes:**

1. Ensure `api/waitlist.js` exists
2. Check file is not in `.vercelignore`
3. Redeploy: `vercel --prod`

### Issue: Emails not sending

**Fixes:**

1. Verify environment variables in Vercel Dashboard
2. Regenerate Gmail app password
3. Check Vercel function logs:
   - Go to Dashboard → Your Project → Functions
   - Click on `waitlist` function
   - View execution logs

### Issue: "Recursive invocation" error

**Fix:** This was caused by `npm run dev` calling `vercel dev` which called itself. It's now removed from package.json.

---

## 📁 Project Structure

```
landing-page/
├── api/
│   └── waitlist.js       ← Serverless API function
├── src/
│   ├── pages/
│   │   ├── Landing/     ← Landing page components
│   │   └── Waitlist.js  ← Waitlist form
│   └── App.js           ← Main app
├── .env                  ← Local environment variables
├── vercel.json          ← Vercel configuration
└── package.json         ← Dependencies
```

---

## 🚀 Quick Commands Reference

| Command           | Purpose                       |
| ----------------- | ----------------------------- |
| `npm start`       | Local dev (frontend only)     |
| `vercel dev`      | Local dev (with API)          |
| `npm run build`   | Build for production          |
| `vercel --prod`   | Deploy to production          |
| `vercel logs`     | View deployment logs          |
| `vercel env pull` | Download env vars from Vercel |

---

## 🎉 You're All Set!

Your app is ready to deploy. Here's the fastest path:

1. Run `vercel --prod` in your terminal
2. Follow the prompts
3. Add environment variables in Vercel Dashboard
4. Redeploy
5. Test your live site!

**Questions?** Check the detailed [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
