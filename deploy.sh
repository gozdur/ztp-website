#!/bin/bash
# Za Twoim Przewodem - GitHub Pages Quick Deploy Script
# Run this to deploy your website in seconds!

echo "🚀 Za Twoim Przewodem - GitHub Pages Deployment"
echo "=================================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Not a git repository!"
    echo "Initialize with: git init"
    exit 1
fi

# Display current status
echo "📊 Current Status:"
git status

echo ""
echo "📋 Ready to deploy? Follow these steps:"
echo ""
echo "1. Add your logo to: assets/logo.png"
echo "2. Update contact info globally:"
echo "   - Phone: +48 123 456 789"
echo "   - Email: info@zatwoimprzewodem.pl"
echo "   - Address: ul. Przykładowa 123, 00-000 Warszawa"
echo ""
echo "3. Run this command to deploy:"
echo "   git add ."
echo "   git commit -m 'Deploy: SEO-optimized website'"
echo "   git push origin main"
echo ""
echo "4. Enable GitHub Pages:"
echo "   Go to: https://github.com/gozdur/ztp-website/settings/pages"
echo "   Select: GitHub Actions"
echo ""
echo "5. Your site will be live at:"
echo "   https://gozdur.github.io/ztp-website"
echo ""
echo "✅ That's it! Your website is live!"
echo ""
