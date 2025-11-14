# 🧪 Local Testing Guide

## Quick Start - Test the Waitlist API Locally

### Option 1: Using Vercel CLI (Recommended - Full API Testing)

This will run your app exactly like production with the API working.

```bash
npm run dev
```

Or directly:

```bash
vercel dev
```

**First time setup:**

- Vercel will ask a few questions
- Just press Enter to accept all defaults
- It will create a `.vercel` folder (this is normal)

**Access your app at:** http://localhost:3000

✅ The `/api/waitlist` endpoint will work
✅ Emails will be sent using your `.env` file
✅ Database connection will work

---

### Option 2: React Only (No API)

If you just want to work on the frontend without testing the waitlist:

```bash
npm start
```

⚠️ **Note:** The waitlist form will show an error because the API isn't available.

---

## Testing the Waitlist Form

1. **Start the dev server:**

   ```bash
   npm run dev
   ```

2. **Wait for it to compile** (may take 1-2 minutes first time)

3. **Open browser:** http://localhost:3000

4. **Go to waitlist page:** Click "Join Waitlist" or go to http://localhost:3000/waitlist

5. **Fill out the form** with your email

6. **Submit and check:**
   - Check the terminal for logs
   - Check your email inbox for confirmation
   - Check razaqalagbada@gmail.com for notification

---

## Reading the Logs

After submitting the form, look in your terminal for:

### ✅ Success Messages:

```
🔍 Email Config Check:
EMAIL_USER exists: true
EMAIL_PASSWORD exists: true
✅ Transporter created successfully
📧 Emails sent successfully to: test@example.com
```

### ❌ Error Messages:

**If you see "EMAIL_USER exists: false":**

- Your `.env` file isn't being read
- Make sure `.env` is in the root directory
- Restart the dev server

**If you see "Email error: Invalid login":**

- Your Gmail app password might be wrong
- Generate a new app password
- Update `.env` file
- Restart dev server

**If you see "Email error: Connection timeout":**

- Check your internet connection
- Gmail might be blocking the connection

---

## Your Current .env File

Make sure your `.env` file looks like this (in the root folder):

```env
EMAIL_USER=razaqalagbada@gmail.com
EMAIL_PASSWORD=aqblnyrrhxszhjlb
OWNER_EMAIL=razaqalagbada@gmail.com
MONGODB_URI=mongodb+srv://razaqalagbada_db_user:FYUYatCdFyRonCXJ@runovercluster1.h7ntir2.mongodb.net/?appName=TrunoverCluster1
DB_NAME=turnover
```

⚠️ **Important:** The password should have NO SPACES!

---

## Common Issues & Fixes

### Issue: "npm run dev" not found

**Fix:** I just added it back to package.json. Try again!

### Issue: Vercel asks too many questions

**Fix:** Just press Enter for all questions. Accept the defaults.

### Issue: Port 3000 is already in use

**Fix:**

```bash
# Kill whatever is using port 3000
lsof -ti:3000 | xargs kill -9

# Then try again
npm run dev
```

### Issue: API returns 404

**Fix:** Make sure you're using `npm run dev` NOT `npm start`

### Issue: Emails not sending

**Checklist:**

1. ✅ Using `npm run dev` (not `npm start`)
2. ✅ `.env` file exists in root directory
3. ✅ Gmail app password has NO spaces
4. ✅ 2-Step Verification is enabled in Gmail
5. ✅ Generated a valid app password

---

## Stopping the Server

Press `Ctrl + C` in the terminal where the server is running.

---

## Quick Test Without Browser

You can test the API directly with curl:

```bash
curl -X POST http://localhost:3000/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "isTuroHost": "Yes, I currently host on Turo",
    "wouldUse": "Yes, definitely!",
    "additionalInfo": "Test"
  }'
```

You should see:

```json
{
  "success": true,
  "emailSent": true,
  "savedToDatabase": true
}
```

---

## After Testing - Deploy to Production

Once everything works locally:

```bash
# Commit your changes
git add .
git commit -m "Fix email notifications"

# Push to GitHub (auto-deploys to Vercel)
git push origin main
```

⚠️ **Don't forget:** You still need to add environment variables in Vercel Dashboard for production!

---

## Need Help?

If you're stuck, check:

1. Terminal logs for error messages
2. Browser console for frontend errors
3. Make sure you're using `npm run dev` not `npm start`
4. Restart the dev server after changing `.env`
