#!/bin/bash

# Git Setup Script for Landing Page
# This script helps you connect your landing-page to GitHub

set -e

echo "🔧 Git Remote Setup for Landing Page"
echo "====================================="
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
    git commit -m "Initial commit: Serverless landing page"
    echo "✅ Git initialized!"
    echo ""
fi

# Check if remote already exists
if git remote | grep -q "origin"; then
    echo "✅ Git remote 'origin' already configured!"
    echo ""
    git remote -v
    echo ""
    read -p "Do you want to update it? (y/n): " update_remote
    if [ "$update_remote" = "y" ]; then
        git remote remove origin
        echo "🗑️  Removed old remote"
    else
        echo "Keeping existing remote. You can now push with: git push -u origin main"
        exit 0
    fi
fi

echo "📋 Setup Options:"
echo ""
echo "1. I already created a GitHub repository (give me the URL)"
echo "2. I need to create a GitHub repository first"
echo ""
read -p "Choose option (1-2): " choice

case $choice in
    1)
        echo ""
        read -p "Enter your GitHub repository URL (e.g., https://github.com/username/repo.git): " repo_url
        
        if [ -z "$repo_url" ]; then
            echo "❌ Error: No URL provided"
            exit 1
        fi
        
        echo ""
        echo "🔗 Adding remote repository..."
        git remote add origin "$repo_url"
        
        echo "✅ Remote added successfully!"
        echo ""
        echo "📤 Pushing to GitHub..."
        git push -u origin main
        
        echo ""
        echo "✅ Done! Your code is now on GitHub!"
        echo ""
        echo "🚀 Next steps:"
        echo "1. Go to https://vercel.com"
        echo "2. Import your GitHub repository"
        echo "3. Add environment variables"
        echo "4. Deploy!"
        ;;
    2)
        echo ""
        echo "📝 Steps to create a GitHub repository:"
        echo ""
        echo "1. Go to: https://github.com/new"
        echo "2. Repository name: turnover-landing (or any name you like)"
        echo "3. Keep it PUBLIC (required for Vercel free tier)"
        echo "4. DON'T initialize with README (we already have files)"
        echo "5. Click 'Create repository'"
        echo ""
        echo "After creating the repository, GitHub will show you commands like:"
        echo ""
        echo "  git remote add origin https://github.com/YOUR-USERNAME/turnover-landing.git"
        echo "  git push -u origin main"
        echo ""
        echo "Then run this script again and choose option 1!"
        ;;
    *)
        echo "❌ Invalid option"
        exit 1
        ;;
esac

echo ""
