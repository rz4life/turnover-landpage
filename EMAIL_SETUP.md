# 📧 Email Configuration Guide

## Current Setup (What We Just Did)

Your emails now appear to come from:

- **From Name:** "Turnover Manager Support"
- **From Email:** razaqalagbada@gmail.com
- **Reply-To:** razaqalagbada@gmail.com

**What the recipient sees:**

```
From: Turnover Manager Support <razaqalagbada@gmail.com>
```

All emails are still sent through your Gmail account and replies come to `razaqalagbada@gmail.com`.

---

## 🎯 Want to Use support@turnover-manager.com?

To send emails from `support@turnover-manager.com`, you have **two options**:

---

### Option 1: Gmail Alias (Easiest - 5 minutes)

Use Gmail to send emails that **appear** to come from support@turnover-manager.com:

#### Step 1: Add Custom Email in Gmail

1. Go to Gmail → Settings (⚙️) → **"See all settings"**
2. Click **"Accounts and Import"** tab
3. Under **"Send mail as"**, click **"Add another email address"**

#### Step 2: Enter Custom Email Details

- **Name:** Turnover Manager Support
- **Email:** support@turnover-manager.com
- Click **"Next Step"**

#### Step 3: Configure SMTP (Use Gmail's)

- **SMTP Server:** smtp.gmail.com
- **Port:** 587
- **Username:** razaqalagbada@gmail.com
- **Password:** Your Gmail App Password
- Check **"Secured connection using TLS"**
- Click **"Add Account"**

#### Step 4: Verify Email

Gmail will send a verification email to support@turnover-manager.com. You need to:

1. Set up email forwarding from support@turnover-manager.com → razaqalagbada@gmail.com
2. Click the verification link in the email

#### Step 5: Set as Default

- Go back to Gmail Settings → Accounts
- Make support@turnover-manager.com the default
- Check **"Reply from the same address the message was sent to"**

#### Step 6: Update Environment Variable (Optional)

Add to Vercel:

```
EMAIL_FROM_NAME=Turnover Manager Support
EMAIL_FROM_ADDRESS=support@turnover-manager.com
```

Then update the code to use these variables.

---

### Option 2: Professional Email Service (Best for Production)

For a more professional setup, use a dedicated email service:

#### **A) Google Workspace (Recommended)**

**Cost:** $6/user/month

**Benefits:**

- ✅ Professional email: support@turnover-manager.com
- ✅ Custom domain branding
- ✅ Better deliverability
- ✅ Larger sending limits (2,000/day)
- ✅ Professional support

**Setup:**

1. Go to https://workspace.google.com
2. Sign up for Google Workspace
3. Add domain: turnover-manager.com
4. Create email: support@turnover-manager.com
5. Use these credentials in your app

**Update .env:**

```env
EMAIL_USER=support@turnover-manager.com
EMAIL_PASSWORD=your-workspace-app-password
OWNER_EMAIL=razaqalagbada@gmail.com
```

---

#### **B) SendGrid (Great for Email Marketing)**

**Cost:** FREE up to 100 emails/day, then $15/month

**Benefits:**

- ✅ 100 emails/day free
- ✅ Better deliverability
- ✅ Email analytics
- ✅ Email templates
- ✅ API-based (more reliable)

**Setup:**

1. Go to https://sendgrid.com
2. Sign up for free account
3. Verify your domain (turnover-manager.com)
4. Create API key
5. Update code to use SendGrid API

**Update .env:**

```env
SENDGRID_API_KEY=your-api-key
EMAIL_FROM_ADDRESS=support@turnover-manager.com
EMAIL_FROM_NAME=Turnover Manager Support
```

**Update api/waitlist.js:**

```javascript
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Send email
await sgMail.send({
  from: {
    email: "support@turnover-manager.com",
    name: "Turnover Manager Support",
  },
  to: email,
  subject: "Welcome to Turnover Manager!",
  html: "...",
});
```

---

#### **C) Mailgun (Developer-Friendly)**

**Cost:** FREE up to 1,000 emails/month, then $35/month

Similar to SendGrid but more developer-focused.

---

#### **D) AWS SES (Cheapest for Scale)**

**Cost:** $0.10 per 1,000 emails

Best for high volume but requires more technical setup.

---

## 🎨 Current Implementation

With the changes we just made, your emails now show:

### Email to User:

```
From: Turnover Manager Support <razaqalagbada@gmail.com>
Reply-To: razaqalagbada@gmail.com
To: user@example.com
Subject: 🚀 Welcome to the Turnover Manager Waitlist!
```

### Email to You (Owner):

```
From: Turnover Manager <razaqalagbada@gmail.com>
Reply-To: razaqalagbada@gmail.com
To: razaqalagbada@gmail.com
Subject: 🎯 New Waitlist Signup - user@example.com
```

**Benefits:**

- ✅ Professional branding ("Turnover Manager Support")
- ✅ Uses your existing Gmail
- ✅ No additional setup required
- ✅ FREE
- ✅ Works immediately

---

## 🚀 Recommended Path

### For Launch (Now):

**Use Current Setup** (what we just did)

- Professional name display
- Uses Gmail (free)
- Works immediately
- Good for first 100-500 signups

### For Growth (Later):

**Upgrade to Google Workspace** ($6/month)

- Custom email: support@turnover-manager.com
- Better deliverability
- More professional
- Larger sending limits
- Switch when you hit 500+ signups

### For Scale (Eventually):

**Add SendGrid** ($15/month or free tier)

- Email analytics
- Better deliverability
- Email templates
- Marketing campaigns
- Switch when you hit 1,000+ signups

---

## 📝 Environment Variables Summary

### Current Setup (Using Gmail with Custom Name):

```env
EMAIL_USER=razaqalagbada@gmail.com
EMAIL_PASSWORD=aqbln yrrh xszh jlb
OWNER_EMAIL=razaqalagbada@gmail.com
```

### With Google Workspace (Future):

```env
EMAIL_USER=support@turnover-manager.com
EMAIL_PASSWORD=your-workspace-app-password
OWNER_EMAIL=razaqalagbada@gmail.com
```

### With SendGrid (Future):

```env
SENDGRID_API_KEY=your-api-key
EMAIL_FROM_ADDRESS=support@turnover-manager.com
EMAIL_FROM_NAME=Turnover Manager Support
OWNER_EMAIL=razaqalagbada@gmail.com
```

---

## ✅ What Changed in the Code

**File:** `api/waitlist.js`

**Before:**

```javascript
from: process.env.EMAIL_USER,
```

**After:**

```javascript
from: `"Turnover Manager Support" <${process.env.EMAIL_USER}>`,
replyTo: process.env.OWNER_EMAIL || process.env.EMAIL_USER,
```

**What this does:**

- Shows "Turnover Manager Support" as the sender name
- Uses your Gmail address for sending
- All replies go to your email
- No additional configuration needed!

---

## 🧪 Testing

After deploying these changes:

1. **Submit test form** on your waitlist page
2. **Check the email** you receive
3. **From line should show:** "Turnover Manager Support <razaqalagbada@gmail.com>"
4. **Reply to the email** - should go to razaqalagbada@gmail.com

---

## 📊 Email Limits

### Gmail Free (Current):

- **Limit:** 500 emails/day
- **Cost:** FREE
- **Good for:** 500 signups/day

### Google Workspace:

- **Limit:** 2,000 emails/day
- **Cost:** $6/month
- **Good for:** 2,000 signups/day

### SendGrid:

- **Limit:** 100 emails/day (free), unlimited (paid)
- **Cost:** FREE or $15/month
- **Good for:** Unlimited signups

---

**For now, your current setup with the custom name is perfect! Upgrade when you start getting lots of signups.** 🚀
