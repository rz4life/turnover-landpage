#!/bin/bash

# Quick Deploy Script for Turnover Manager Landing Page
# This script helps you deploy the serverless landing page to Vercel

set -e

echo "🚀 Turnover Manager Landing Page - Serverless Deployment"
echo "========================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found!"
    echo "Please run this script from the landing-page directory"
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: Serverless landing page with waitlist"
    echo "✅ Git initialized!"
    echo ""
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📥 Vercel CLI not found. Installing..."
    npm i -g vercel
    echo "✅ Vercel CLI installed!"
    echo ""
fi

echo "🎯 Deployment Options:"
echo ""
echo "1. Test locally (with serverless functions)"
echo "2. Deploy to production"
echo "3. Just show me the commands"
echo ""
read -p "Choose option (1-3): " choice

case $choice in
    1)
        echo ""
        echo "🧪 Starting local development server with serverless functions..."
        echo "Visit: http://localhost:3000"
        echo "Try the waitlist form at: http://localhost:3000/waitlist"
        echo ""
        vercel dev
        ;;
    2)
        echo ""
        echo "📤 Deploying to Vercel production..."
        echo ""
        echo "⚠️  IMPORTANT: After deployment, add these environment variables in Vercel Dashboard:"
        echo ""
        echo "   EMAIL_USER=razaqalagbada@gmail.com"
        echo "   EMAIL_PASSWORD=your-app-password"
        echo "   OWNER_EMAIL=razaqalagbada@gmail.com"
        echo "   MONGODB_URI=your-mongodb-connection-string (optional)"
        echo "   DB_NAME=turnover (optional)"
        echo ""
        read -p "Press Enter to continue with deployment..."
        vercel --prod
        echo ""
        echo "✅ Deployment complete!"
        echo ""
        echo "📝 Next steps:"
        echo "1. Go to Vercel dashboard"
        echo "2. Settings → Environment Variables"
        echo "3. Add the variables listed above"
        echo "4. Redeploy for changes to take effect"
        ;;
    3)
        echo ""
        echo "📋 Manual Deployment Commands:"
        echo ""
        echo "# Test locally:"
        echo "vercel dev"
        echo ""
        echo "# Deploy to production:"
        echo "vercel --prod"
        echo ""
        echo "# Or use GitHub integration:"
        echo "1. Push to GitHub: git push"
        echo "2. Import repo in Vercel dashboard"
        echo "3. Add environment variables"
        echo "4. Deploy!"
        echo ""
        ;;
    *)
        echo "❌ Invalid option"
        exit 1
        ;;
esac

echo ""
echo "📚 Need help? Check SERVERLESS_SETUP.md for full documentation"
echo ""
