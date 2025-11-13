# Turnover Manager - Landing Page

A beautiful, **standalone landing page** with **serverless waitlist** functionality for Turnover Manager.

**✨ No separate backend needed! Deploys as a single repository to Vercel.**

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm installed
- Vercel account (free tier works!)
- Gmail account (for sending emails)

### Local Development

1. Install dependencies:

```bash
npm install
```

2. Test locally with serverless functions:

```bash
# Install Vercel CLI
npm i -g vercel

# Run with serverless functions
vercel dev
```

3. Visit `http://localhost:3000` and test the waitlist form!

### Deploy to Production (5 Minutes)

**Option 1: Quick Deploy Script**
```bash
./deploy.sh
# Follow the prompts!
```

**Option 2: Manual Deploy**
```bash
# Push to GitHub
git add .
git commit -m "Deploy landing page"
git push

# Deploy to Vercel
vercel --prod
```

**Option 3: GitHub Integration (Recommended)**
1. Push code to GitHub
2. Import repo in Vercel dashboard
3. Add environment variables (see below)
4. Deploy! ✨

The landing page will be live at `https://your-project.vercel.app`

## 🎯 What's Included

- ✅ **Beautiful Landing Page** - Modern design with animations
- ✅ **Waitlist Form** - Capture early signups
- ✅ **Serverless Backend** - No separate server needed!
- ✅ **Email Notifications** - Auto-send confirmation emails
- ✅ **MongoDB Integration** - Optional database storage
- ✅ **One-Click Deploy** - Deploy to Vercel in minutes

## 📁 Project Structure

```
landing-page/
├── api/
│   └── waitlist.js       # 🆕 Serverless function (replaces backend!)
├── public/
│   ├── index.html
│   └── images/
│       └── screenshots/  # Product screenshots
├── src/
│   ├── components/
│   │   └── ui/           # Reusable UI components (buttons, cards, etc.)
│   ├── hooks/
│   │   └── use-toast.js  # Toast notification hook
│   ├── lib/
│   │   └── utils.js      # Utility functions (cn, etc.)
│   ├── pages/
│   │   ├── Landing/
│   │   │   ├── Landing.js
│   │   │   └── components/
│   │   │       ├── HeroSection.js
│   │   │       ├── FeaturesSection.js
│   │   │       ├── HowItWorksSection.js
│   │   │       ├── BenefitsSection.js
│   │   │       └── CTASection.js
│   │   └── Waitlist.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .env
├── .gitignore
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🔧 Configuration

### Backend API

The landing page connects to the backend API for waitlist submissions. Configure the backend URL in `.env`:

```env
REACT_APP_BACKEND_URL=http://localhost:3333
```

For production, update this to your deployed backend URL.

### Backend Endpoint Required

The app expects a POST endpoint at `/api/waitlist` that accepts:

```json
{
  "email": "user@example.com",
  "isTuroHost": "Yes, currently hosting",
  "wouldUse": "Definitely - I need this now!",
  "additionalInfo": "Optional message"
}
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push this folder to a Git repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. Import to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects React and configures build settings
   - Add environment variable: `REACT_APP_BACKEND_URL=<your-backend-url>`
   - Deploy!

### Deploy to Netlify

1. Push to Git repository (see above)

2. Deploy to Netlify:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Add environment variable: `REACT_APP_BACKEND_URL=<your-backend-url>`
   - Deploy!

### Custom Domain

After deployment, connect your custom domain (turnover-manager.com):

- **Vercel**: Go to Project Settings → Domains → Add Domain
- **Netlify**: Go to Site Settings → Domain Management → Add Custom Domain

## 🎨 Features

- **Modern Landing Page**: Beautiful, responsive design with animations
- **Waitlist System**: Collect leads with email, Turo host status, and interest level
- **Email Notifications**:
  - User receives confirmation email
  - Owner receives notification with signup details
- **Database Persistence**: All signups saved to MongoDB
- **Mobile Responsive**: Works perfectly on all devices
- **Fast Loading**: Optimized for performance

## 📝 Environment Variables

| Variable                | Description     | Default                 |
| ----------------------- | --------------- | ----------------------- |
| `REACT_APP_BACKEND_URL` | Backend API URL | `http://localhost:3333` |

## 🛠️ Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

### Tech Stack

- **React 19** - UI framework
- **React Router 7** - Client-side routing
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Axios** - HTTP client

## 📞 Support

For issues or questions about the landing page, please contact the development team.

## 📄 License

Private - Turnover Manager © 2024
