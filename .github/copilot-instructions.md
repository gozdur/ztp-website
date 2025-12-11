# Copilot Instructions for ztp-website

## Project Status
SEO-optimized multilingual website for "Za Twoim Przewodem" - a Polish electrical contracting business. Polish-first implementation with future multi-language support.

## Current Scope
**Repository**: Website code for Za Twoim Przewodem  
**Business**: Electrical contracting (Pomiary 5-letnie, ładowarki EV/PHEV, instalacje elektryczne, odbiory developerskie)  
**Type**: Static website with SEO optimization, responsive design, and accessibility focus  
**Primary Language**: Polish (pl)  
**Logo**: Lightning bolt in compass rose design (gold/cream/black palette)

## Getting Started for AI Agents

When assisting with this project:

### Architecture Overview
- **Static site structure**: index.html (homepage), about.html, services.html, blog.html, contact.html
- **Assets**: Single CSS file (styles.css), minimal vanilla JS (script.js), logo in assets/
- **SEO-focused**: Semantic HTML5, schema.org markup, breadcrumb navigation, internal linking strategy
- **Polish content**: All text, titles, meta descriptions in Polish; maintain natural keyword integration

### Key Files & Their Purpose
| File | Purpose | Polish Keywords |
|------|---------|-----------------|
| `index.html` | Homepage - brand intro + services overview | Installation, contractor, 5-year inspection |
| `about.html` | O nas - company background, credentials | O nas, ekspertyza, doświadczenie |
| `services.html` | Usługi - service catalog with CTAs | Pomiary, ładowarki EV, instalacje, odbiory |
| `blog.html` + posts/ | Aktualności - 2-3 sample posts | Bezpieczeństwo, normy, trendy energetyczne |
| `contact.html` | Kontakt - form + location + social | Kontakt, zapytanie, wycena |
| `styles.css` | Responsive design; brand colors (gold #D4A574, dark #2C2C2C, white) |
| `script.js` | Form handling, minimal interactivity |
| `robots.txt` | SEO crawling directives |
| `sitemap.xml` | XML sitemap for search engines |

### Established Patterns

**1. Semantic HTML & Structure**
- Use `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- Breadcrumb navigation on all pages (e.g., Home > O nas > Historia)
- Internal linking between related services/pages to boost SEO crawlability

**2. Schema Markup (JSON-LD)**
- LocalBusiness schema in footer (address, phone, email, logo)
- Organization schema on homepage
- Service schema on services page
- BlogPosting schema on blog posts

**3. SEO Best Practices**
- Polish target keywords: "instalacja elektryczna Polska", "pomiary pięcioletnie", "ładowarka EV", etc.
- Every page: unique `<title>` (50-60 chars) and `<meta name="description">` (150-160 chars)
- H1 per page (one only), H2/H3 for sections
- Image alt text in Polish describing visual content
- Open Graph tags for social sharing (og:title, og:description, og:image, og:type, og:url)
- Mobile-first responsive design

**4. Polish Content Guidelines**
- Natural, conversational tone suitable for Polish audience
- Bullet points for services/features (easier scanning)
- Include trust signals (certifications, experience years, customer benefits)
- CTAs in Polish ("Złóż zapytanie", "Skontaktuj się", "Sprawdź cenę")
- Blog posts: 800-1200 words, keyword-rich intro, internal links

**5. Accessibility (WCAG 2.1 AA)**
- Sufficient color contrast (4.5:1 for text)
- Semantic HTML reduces need for aria-labels
- Form labels properly associated with inputs
- Skip navigation link in header (hidden but focusable)
- Alt text for all images (descriptive, not "image.jpg")

**6. Build & Deployment**
- No build step required (static HTML/CSS/JS)
- Deploy to hosting (Vercel, Netlify, or traditional web server)
- Add Google Analytics 4 script before closing `</body>`
- Enable HTTPS and add CSP headers in server config

### Debugging & Testing
- Check SEO with: Chrome DevTools (Lighthouse), Google Search Console, ahrefs/semrush free tier
- Test responsiveness: Chrome DevTools device emulation
- Validate HTML: W3C Validator
- Test accessibility: axe DevTools, WAVE
- Test forms: ensure submission handling works

## Quick Reference
- **Main Branch**: `main` (primary development branch)
- **Remote**: `origin` points to gozdur/ztp-website
- **Brand Colors**: Gold #D4A574 (primary), Dark #2C2C2C (text), Cream #F5F1E8 (background accents)
- **Target Polish Keywords**: pomiary elektryczne, instalacja elektryczna, ładowarka EV PHEV, bezpieczeństwo elektryk, odbiory budynków
- **Hosting**: Static site (no backend required)

---
**Last Updated**: December 11, 2025  
**Next Review**: After initial content/design completion
