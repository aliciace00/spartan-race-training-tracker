#!/bin/bash

echo "🚀 Deploying Spartan Race Training Tracker to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please log in to Vercel..."
    vercel login
fi

# Deploy to Vercel
echo "📦 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "📱 Your app is now available on mobile devices!"
echo "🔗 Check the URL provided above to access your training tracker"
echo ""
echo "📋 Next steps:"
echo "1. Set up your Supabase project (see SETUP.md)"
echo "2. Update supabase-config.js with your credentials"
echo "3. Redeploy if needed: vercel --prod"
