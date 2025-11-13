# Development Guide

## Running the App Locally

### Option 1: Use Vercel CLI (Recommended - Full Feature Testing)

This will run your app exactly as it would on Vercel, including the serverless API functions.

```bash
# Install Vercel CLI (already done)
npm install -g vercel

# Run the development server
vercel dev
```

Then open http://localhost:3000

**Benefits:**

- API endpoints work exactly like production
- Can test email sending and database integration
- Most accurate preview of production environment

### Option 2: React Development Server (Quick Start - No Backend)

This is faster for frontend-only development, but API calls won't work.

```bash
npm start
```

Then open http://localhost:3000

**Note:** The waitlist form will show an error since the API endpoint isn't available. Use this only for UI/UX development.

## Testing the Waitlist

### Local Testing with Vercel Dev

1. Start the development server:

   ```bash
   vercel dev
   ```

2. Navigate to the waitlist page
3. Fill out the form
4. Check the terminal for logs

### Production Testing

Deploy to Vercel and test there:

```bash
vercel --prod
```

## Environment Variables

For the waitlist API to work, you need these environment variables in your Vercel project settings or `.env.local` file:

```env
# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
OWNER_EMAIL=owner@example.com

# Database (Optional)
MONGODB_URI=mongodb+srv://...
DB_NAME=turnover-manager
```

## Common Issues

### API Returns 404

- **Cause:** Not using Vercel CLI or serverless functions aren't configured
- **Solution:** Use `vercel dev` instead of `npm start`

### CORS Errors

- **Cause:** Making requests from different origin
- **Solution:** Should work automatically with Vercel, check CORS headers in api/waitlist.js

### Email Not Sending

- **Cause:** Missing environment variables
- **Solution:** Add EMAIL_USER and EMAIL_PASSWORD to Vercel project settings
