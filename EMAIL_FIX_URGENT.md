# 🚨 URGENT: Fix Email Notifications

## Problem

Waitlist form submissions aren't sending emails. This is because **environment variables are not configured in Vercel**.

## ⚡ Quick Fix (5 minutes)

### Step 1: Go to Vercel Dashboard

1. Visit https://vercel.com
2. Click on your project: `landing-page`
3. Click **Settings** (top menu)
4. Click **Environment Variables** (left sidebar)

### Step 2: Add These Variables

Add each of these **exactly as shown**:

**Variable 1:**

```
Name: EMAIL_USER
Value: razaqalagbada@gmail.com
Environment: Production, Preview, Development (check all 3)
```

**Variable 2:**

```
Name: EMAIL_PASSWORD
Value: aqblnyrrhxszhjlb
Environment: Production, Preview, Development (check all 3)
```

⚠️ **IMPORTANT**: Remove ALL spaces from the password! Gmail app passwords should be 16 characters with NO spaces.

**Variable 3:**

```
Name: OWNER_EMAIL
Value: razaqalagbada@gmail.com
Environment: Production, Preview, Development (check all 3)
```

**Variable 4 (Optional - for database):**

```
Name: MONGODB_URI
Value: mongodb+srv://razaqalagbada_db_user:FYUYatCdFyRonCXJ@runovercluster1.h7ntir2.mongodb.net/?appName=TrunoverCluster1
Environment: Production, Preview, Development (check all 3)
```

**Variable 5 (Optional - for database):**

```
Name: DB_NAME
Value: turnover
Environment: Production, Preview, Development (check all 3)
```

### Step 3: Redeploy

After adding all variables:

1. Go to **Deployments** tab
2. Click the **three dots** (...) on the latest deployment
3. Click **Redeploy**
4. Wait 1-2 minutes

### Step 4: Test

1. Visit your live site
2. Go to waitlist page
3. Submit a test email
4. Check your inbox for confirmation email
5. Check razaqalagbada@gmail.com for the notification

---

## 🔍 Debugging

I've added debug logging to the API. After redeploying:

### View Logs

1. Go to Vercel Dashboard
2. Click **Deployments**
3. Click on latest deployment
4. Click **Functions** tab
5. Click on `waitlist` function
6. View the logs

### What to Look For

```
✅ Good: "Email Config Check: EMAIL_USER exists: true"
❌ Bad: "Email Config Check: EMAIL_USER exists: false"
```

If you see "false", the environment variables aren't set properly.

---

## ⚠️ Common Issues

### Issue 1: Gmail App Password Has Spaces

Your current password: `aqblnyrrh xszhj lb`
**Fix**: Remove spaces → `aqblnyrrhxszhjlb`

I've updated the API to automatically remove spaces, but it's better to fix it in Vercel.

### Issue 2: Gmail Blocking Login

If you see "Invalid credentials" error:

1. Go to https://myaccount.google.com/security
2. Ensure 2-Step Verification is ON
3. Go to App Passwords
4. Generate a NEW app password
5. Update the `EMAIL_PASSWORD` in Vercel

### Issue 3: Environment Variables Not Applied

After adding variables, you MUST redeploy for them to take effect.

---

## 📧 Email Password Format

Gmail app passwords should be:

- ✅ 16 characters
- ✅ No spaces
- ✅ Lowercase letters only
- ❌ NOT your Gmail password

Example of correct format: `abcdwxyzefgh1234`
Example of wrong format: `abcd wxyz efgh 1234` (has spaces)

---

## 🧪 Test Command

After setup, test the API directly:

```bash
curl -X POST https://your-site.vercel.app/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "isTuroHost": "Yes, I currently host on Turo",
    "wouldUse": "Yes, definitely!",
    "additionalInfo": "Test submission"
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

## ✅ Checklist

- [ ] Added EMAIL_USER to Vercel
- [ ] Added EMAIL_PASSWORD to Vercel (no spaces!)
- [ ] Added OWNER_EMAIL to Vercel
- [ ] Selected all 3 environments for each variable
- [ ] Clicked "Redeploy" after adding variables
- [ ] Tested waitlist form
- [ ] Received confirmation email
- [ ] Received owner notification email

---

## 🆘 Still Not Working?

If emails still don't send after following all steps:

1. **Check Vercel Function Logs** for error messages
2. **Generate New Gmail App Password**:

   - Delete the old one
   - Create a new one
   - Update in Vercel
   - Redeploy

3. **Verify Gmail Settings**:

   - 2-Step Verification must be ON
   - App passwords must be enabled
   - No unusual activity blocking

4. **Contact me** - I can help debug further!

---

## 📝 Current Status

Your `.env` file is configured correctly for LOCAL testing.
But Vercel needs the variables set in the dashboard for PRODUCTION.

The API is ready and will work as soon as you add the environment variables! 🚀
