# Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     - `GMAIL_USER`
     - `GMAIL_APP_PASSWORD`
     - `NEXT_PUBLIC_RESUME_FILE_ID` (optional)
     - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional)
   - Deploy!

## Alternative Platforms

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables in site settings

### Railway
1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically

### Render
1. Use the included `render.yaml` file
2. Add environment variables in dashboard
3. Deploy from GitHub

## Environment Variables Setup

Make sure to set these in your deployment platform:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
NEXT_PUBLIC_RESUME_FILE_ID=your-file-id
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-id
```

## Custom Domain (Optional)

1. **Purchase domain** from any registrar
2. **Add domain** in your hosting platform
3. **Update DNS** records as instructed
4. **Enable HTTPS** (usually automatic)

## Post-Deployment Checklist

- [ ] Test contact form functionality
- [ ] Verify resume download works
- [ ] Check Google Analytics tracking
- [ ] Test on mobile devices
- [ ] Verify SEO meta tags
- [ ] Submit sitemap to Google Search Console