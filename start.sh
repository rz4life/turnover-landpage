#!/bin/bash

# Turnover Manager Landing Page - Quick Start Script
# This script will start both the backend and landing page

echo "🚀 Starting Turnover Manager Landing Page..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in landing-page directory"
    echo "Please run: cd landing-page"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Check if backend is running
echo "🔍 Checking if backend is running..."
if curl -s http://localhost:3333/health-check > /dev/null 2>&1; then
    echo "✅ Backend is running on port 3333"
else
    echo "⚠️  Backend not detected on port 3333"
    echo ""
    echo "Please start the backend in another terminal:"
    echo "  cd ../turnover-manager-backend"
    echo "  yarn start"
    echo ""
    echo "Press Enter to continue anyway, or Ctrl+C to cancel..."
    read
fi

echo ""
echo "🌐 Starting landing page..."
echo ""
echo "  Local:            http://localhost:3000"
echo "  Landing Page:     http://localhost:3000/"
echo "  Waitlist Form:    http://localhost:3000/waitlist"
echo ""
echo "Press Ctrl+C to stop"
echo ""

npm start
