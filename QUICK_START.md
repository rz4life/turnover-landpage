# Quick Start Guide - Turnover Manager

## 🚀 Running the Application

### For Local Development (Frontend Only)

If you just want to work on the UI without testing the waitlist API:

```bash
npm start
```

Access at: http://localhost:3000

⚠️ **Note**: The waitlist form will show an error because the API endpoint isn't available with this method.

---

### For Testing with API (Recommended)

To test the full application including the waitlist API locally:

```bash
# Option 1: Using Vercel CLI
vercel dev --listen 3000

# Option 2: If you get issues, try
vercel dev
```

Access at: http://localhost:3000 (or the port shown in terminal)

✅ This method includes:

- Full React app
- Working `/api/waitlist` endpoint
- Environment variables from `.env`
- Email sending functionality
- MongoDB integration (if configured)

---

## 📦 Environment Setup

Create a `.env` file in the root directory (already exists):

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
OWNER_EMAIL=owner@example.com

# MongoDB (Optional)
MONGODB_URI=mongodb+srv://...
DB_NAME=turnover
```

---

## 🌍 Deploying to Production

### Method 1: Deploy via CLI (Fastest)

```bash
# First time setup (connects to Vercel)
vercel

# Then for production deployment
vercel --prod
```

### Method 2: Deploy via GitHub (Automatic)

1. Push code to GitHub:

   ```bash
   git add .
   git commit -m "Ready to deploy"
   git push origin main
   ```

2. Connect repository to Vercel:

   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect settings
   - Add environment variables in dashboard
   - Click "Deploy"

3. Every push to `main` branch will auto-deploy!

---

## ⚙️ Important: Environment Variables in Production

**CRITICAL**: After deploying, you MUST add environment variables in Vercel Dashboard:

1. Go to your project in Vercel Dashboard
2. Settings → Environment Variables
3. Add these variables:

   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `OWNER_EMAIL`
   - `MONGODB_URI` (optional)
   - `DB_NAME` (optional)

4. Redeploy after adding variables

---

## ✅ Testing the Deployment

Visit your production URL and test:

1. Homepage loads ✓
2. Navigate to waitlist page ✓
3. Submit the form ✓
4. Check for confirmation email ✓
5. Check owner receives notification ✓

---

## 🔧 Troubleshooting

### API Returns 404 Locally

**Solution**: Use `vercel dev` instead of `npm start`

### API Returns 404 in Production

**Solutions**:

1. Ensure `api/waitlist.js` file exists
2. Redeploy: `vercel --prod`
3. Check Vercel function logs in dashboard

### Emails Not Sending

**Solutions**:

1. Verify environment variables in Vercel Dashboard
2. Check Gmail app password (generate new one)
3. View function logs in Vercel Dashboard for errors

### CORS Errors

**Solution**: Already configured in `api/waitlist.js`. If still having issues, check browser console for specific error.

---

## 📊 Useful Commands

```bash
# Local development (React only)
npm start

# Local development (with API)
vercel dev

# Build for production
npm run build

# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# Pull environment variables from Vercel
vercel env pull
```

---

## 🎯 Project Structure

```
landing-page/
├── api/
│   └── waitlist.js          # Serverless function for waitlist
├── public/
│   └── index.html           # HTML template
├── src/
│   ├── components/          # React components
│   ├── pages/              # Page components
│   ├── App.js              # Main app component
│   └── index.js            # Entry point
├── .env                    # Local environment variables
├── vercel.json             # Vercel configuration
└── package.json            # Dependencies and scripts
```

---

## 🔐 Security Checklist

- [ ] `.env` file is in `.gitignore`
- [ ] Environment variables set in Vercel Dashboard
- [ ] Using Gmail app password (not account password)
- [ ] MongoDB connection string is secure
- [ ] No sensitive data in code

---

## 📞 Need Help?

1. Check the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions
2. Review Vercel function logs for errors
3. Test API endpoint directly with curl/Postman
4. Check browser console for frontend errors

---

## ✨ You're Ready!

Your Turnover Manager landing page is ready to deploy! 🎉

**Next Steps**:

1. Test locally with `vercel dev`
2. Deploy to production with `vercel --prod`
3. Add environment variables in Vercel Dashboard
4. Test the live site
5. Share with the world! 🚀
