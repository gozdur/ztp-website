# Za Twoim Przewodem - GitHub Pages Deployment Guide

## 🚀 GitHub Pages Quick Deploy

This is a **production-ready, SEO-optimized static website** perfect for GitHub Pages.

### What's Included
✅ **8 Fully Optimized Pages** (5 main + 3 blog posts)  
✅ **Responsive Design** (desktop/tablet/mobile)  
✅ **Complete SEO Setup** (schema markup, sitemap, robots.txt)  
✅ **Contact Forms & Newsletter** (ready for integration)  
✅ **Brand Styling** (Gold #D4A574, Dark #2C2C2C)  
✅ **Zero Dependencies** (Pure HTML/CSS/JS)  
✅ **Automated Deployment** (GitHub Actions workflow included)

---

## 📍 Step-by-Step GitHub Pages Setup

### Step 1: Enable GitHub Pages

1. Go to: https://github.com/gozdur/ztp-website
2. Click **Settings** (top right)
3. In sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - (The workflow `.github/workflows/deploy.yml` is already configured)
5. Click **Save**

Your site will deploy to: **https://gozdur.github.io/ztp-website**

### Step 2: Push Code to GitHub

```bash
cd /home/robot/ztp-website

git add .
git commit -m "Initial website deployment - SEO optimized for Za Twoim Przewodem"
git push origin main
```

### Step 3: Watch Deployment

1. Go to your repo → **Actions** tab
2. Watch the workflow run (takes 30-60 seconds)
3. Once ✅ complete, your site is LIVE!

---

## 🔧 Before Going Live - Configure These

### 1. Add Your Logo & Favicon

Create these files in `assets/` folder:
- `assets/logo.png` (your company logo)
- `assets/favicon.png` (32x32 browser tab icon)

### 2. Update Contact Information

Replace globally across all files:
- `+48 123 456 789` → Your phone
- `info@zatwoimprzewodem.pl` → Your email  
- `ul. Przykładowa 123, 00-000 Warszawa` → Your address

Quick search:
```bash
grep -r "+48 123 456 789" .
grep -r "info@zatwoimprzewodem.pl" .
```

### 3. Set Up Contact Form Handling

Choose one service to receive form submissions:

#### Formspree (Easiest)
1. Go to https://formspree.io
2. Create account and new form
3. Get form endpoint: `https://formspree.io/f/YOUR_ID`
4. Update `script.js` line ~53:
   ```javascript
   const formspreeEndpoint = 'https://formspree.io/f/YOUR_ID';
   ```

#### EmailJS (Alternative)
1. Sign up at https://www.emailjs.com
2. Create service + template
3. Uncomment EmailJS function in `script.js` (~line 140)
4. Add your credentials

### 4. Set Up Google Analytics

1. Create GA4 property at: https://analytics.google.com
2. Get your **Measurement ID** (format: G-XXXXXXX)
3. In each HTML file, replace `GA_MEASUREMENT_ID`:
   ```html
   gtag('config', 'GA_MEASUREMENT_ID');  <!-- Replace this -->
   ```

### 5. Set Up Newsletter (Optional)

For Mailchimp, ConvertKit, etc.:
- Update `handleNewsletterSubmit()` in `script.js`
- Add your email service API endpoint

---

## 🌐 Custom Domain Setup (Optional)

If you want `zatwoimprzewodem.pl` instead of `github.io`:

### 1. GitHub Pages Settings

1. **Settings** → **Pages**
2. Under "Custom domain": `zatwoimprzewodem.pl`
3. Check "Enforce HTTPS"
4. Save

GitHub will create a `CNAME` file automatically.

### 2. Update DNS Records

At your domain registrar (GoDaddy, Namecheap, etc.):

```
CNAME Record:
Name: www
Value: gozdur.github.io

OR A Records (if CNAME doesn't work):
Name: @
Values: 
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
```

Wait 24-48 hours for DNS propagation.

### 3. Update Sitemap

In `sitemap.xml`, replace:
```xml
https://zatwoimprzewodem.pl/ <!-- Keep this if using zatwoimprzewodem.pl -->
```

---

## ✅ Post-Deployment Checklist

- [ ] Logo added to `assets/logo.png`
- [ ] Contact info updated (phone, email, address)
- [ ] Form handling configured (Formspree or EmailJS)
- [ ] Google Analytics ID added
- [ ] Domain configured (custom or github.io)
- [ ] Site tested on mobile/tablet/desktop
- [ ] All links working
- [ ] Forms testing (submit a test form)
- [ ] Sitemap submitted to Google Search Console
- [ ] Site added to Bing Webmaster Tools

---

## 🧪 Local Testing Before Deploy

```bash
# Test locally
python -m http.server 8000
# Visit: http://localhost:8000
```

**Test checklist:**
- [ ] Navigation working
- [ ] Forms display
- [ ] Images load
- [ ] Mobile responsive
- [ ] No console errors (F12)

---

## 📊 SEO Optimization

### Submit to Search Engines

**Google Search Console:**
1. Go to https://search.google.com/search-console
2. Add property (your domain)
3. Verify ownership (CNAME or HTML file)
4. Submit `sitemap.xml`

**Bing Webmaster Tools:**
1. Go to https://www.bing.com/webmasters
2. Add site
3. Submit sitemap

### Check SEO Score

Use Chrome Lighthouse (DevTools → Lighthouse):
- Performance
- Accessibility
- Best Practices
- SEO

Target: 90+ on all metrics

---

## 🐛 Troubleshooting

**Site not showing?**
- Check Actions tab → workflow logs
- Verify Pages settings enabled
- Wait 2-3 minutes for deployment

**Custom domain not working?**
- Check DNS records are correct
- Wait 24-48 hours for propagation
- Verify CNAME file in repository

**Forms not submitting?**
- Check browser console (F12)
- Verify form service configured
- Test with Formspree directly

**Images not loading?**
- Check paths use relative URLs
- Ensure files in `assets/` folder
- Use `assets/logo.png` (not `/assets/logo.png`)

---

## 📁 File Structure

## 🔒 Security Checklist (Before Going Live)

- [ ] Add HTTPS (all hosting options provide this)
- [ ] Update contact email/phone to real numbers
- [ ] Set up backend for form submissions (Formspree or own)
- [ ] Test forms work end-to-end
- [ ] Add privacy policy & terms of service pages
- [ ] Test on mobile devices (iOS & Android)
- [ ] Run Lighthouse audit (Chrome DevTools)

---

## 📊 SEO Setup (Critical!)

### 1. Google Search Console
```
1. Go to https://search.google.com/search-console
2. Add your domain
3. Verify ownership (HTML file or DNS record)
4. Submit your sitemap: yoursite.com/sitemap.xml
5. Request indexing for all pages
```

### 2. Google Analytics 4
```
1. Set up account at https://analytics.google.com
2. Get your GA4 Measurement ID
3. Add to all HTML files (see Configuration above)
4. Wait 24 hours for data to appear
```

### 3. Google Business Profile (Local SEO)
```
1. Create at https://business.google.com
2. Add your business info
3. Add services you offer
4. Get customers to review you (increases rankings)
```

### 4. Optimize for Keywords
Current target keywords in content:
- pomiary elektryczne
- instalacja elektryczna
- ładowarka EV
- bezpieczeństwo elektryk
- odbiory budynków

These are already integrated naturally in the content.

---

## 📱 Testing Before Launch

### Mobile Testing
```bash
1. Open on actual phone (iPhone & Android)
2. Test forms with mobile keyboard
3. Check hamburger menu works
4. Verify image sizes (not too large)
```

### Desktop Testing
```bash
1. Chrome, Firefox, Safari, Edge
2. Chrome DevTools → Responsive Design Mode
3. Test at: 320px, 768px, 1024px, 1400px widths
```

### SEO Testing
```bash
1. Google Search Console (preview)
2. Lighthouse audit (Chrome DevTools)
3. W3C HTML Validator: https://validator.w3.org
4. Mobile Friendly Test: https://search.google.com/test/mobile-friendly
```

### Performance Testing
```bash
1. Chrome DevTools → Performance tab
2. Lighthouse score should be 90+
3. Page load time should be < 2 seconds
4. Use PageSpeed Insights: https://pagespeed.web.dev
```

---

## 📝 Customization Guide

### Changing Colors
In `styles.css`, find and replace:
```css
/* Current colors */
#D4A574  /* Gold - primary */
#C19A4A  /* Gold - darker */
#2C2C2C  /* Dark text */
#F5F1E8  /* Cream background */

/* Replace with your brand colors */
```

### Adding New Blog Posts
1. Copy `blog/bezpieczenstwo-elektryczne.html`
2. Update: title, content, URL
3. Add link in `blog.html`
4. Update `sitemap.xml` with new URL
5. Submit to Google Search Console

### Adding New Pages
1. Copy `index.html` as template
2. Update content & header breadcrumb
3. Update navigation links in header (all pages)
4. Add to `sitemap.xml`
5. Add internal links from other pages

---

## 🐛 Troubleshooting

### Forms not working?
```
1. Check browser console (F12) for JavaScript errors
2. Verify Formspree endpoint is correct
3. Test by sending a form - check your email
```

### Website not showing on Google?
```
1. Submit sitemap to Google Search Console
2. Request indexing for homepage
3. Wait 3-7 days for indexing
4. Check Search Console for any errors
```

### Styles not loading correctly?
```
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+F5)
3. Check CSS file path is correct
4. Run W3C Validator to check for CSS errors
```

### Mobile layout broken?
```
1. Check viewport meta tag is in <head>
2. Verify media queries in styles.css
3. Test with Chrome DevTools device emulation
4. Check for horizontal scrolling on mobile
```

---

## 📚 Files Reference

| File | Purpose | Notes |
|------|---------|-------|
| `index.html` | Homepage | Main entry point |
| `o-nas.html` | About page | Company info |
| `uslugu.html` | Services | Product/service descriptions |
| `blog.html` | Blog index | Links to all posts |
| `blog/*.html` | Blog posts | 3 sample posts included |
| `kontakt.html` | Contact | Form + contact info |
| `styles.css` | Styling | Responsive design, all colors |
| `script.js` | Interactivity | Forms, navigation, analytics |
| `robots.txt` | SEO | Search engine crawling rules |
| `sitemap.xml` | SEO | URL list for indexing |
| `.github/copilot-instructions.md` | AI Guidelines | For AI code assistants |

---

## ⚡ Performance Tips

- **Images**: Keep under 100KB each. Use JPG for photos, PNG for graphics
- **Caching**: Enable browser caching in hosting (usually automatic)
- **CDN**: Vercel/Netlify automatically use CDN
- **Compression**: Enable gzip compression on server
- **CSS/JS**: Already minified - don't add more if possible

Current metrics:
- HTML: ~12 KB total (all pages)
- CSS: ~40 KB (styles.css)
- JS: ~8 KB (script.js)
- **Total: ~60 KB** (very fast!)

---

## 🎓 Learning Resources

If you need to make changes:
- [MDN Web Docs](https://developer.mozilla.org) - HTML/CSS/JavaScript reference
- [W3C HTML](https://html.spec.whatwg.org/) - Official HTML standard
- [CSS Tricks](https://css-tricks.com) - CSS tutorials
- [Schema.org](https://schema.org) - Structured data markup

---

## 🤝 Support & Next Steps

### Immediate Actions
- [ ] Add your logo
- [ ] Update contact information
- [ ] Choose form handling (Formspree recommended)
- [ ] Set up Google Analytics ID
- [ ] Deploy to hosting (Vercel easiest)

### First Week
- [ ] Verify site works on mobile
- [ ] Set up Google Search Console
- [ ] Submit sitemap to Google
- [ ] Test contact form end-to-end

### First Month
- [ ] Request customers to review you
- [ ] Create Google Business Profile
- [ ] Monitor Analytics for traffic
- [ ] Add more blog posts (1-2 per month)

---

## 📄 Important Notes

1. **No Backend Required** - This is a static site. Works everywhere!
2. **Form Handling** - You MUST set up a backend (Formspree/EmailJS/own)
3. **SEO** - Takes 3-4 weeks to see results in Google
4. **Updates** - You can edit HTML files directly, no build step needed
5. **Backups** - Keep backups of your content (use Git!)

---

**Created**: December 11, 2025  
**Status**: ✅ Ready for Deployment  
**Estimated Setup Time**: 30 minutes to launch

Good luck! 🚀
