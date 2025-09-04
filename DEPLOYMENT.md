# Deployment Guide

## Quick Setup

### 1. Environment Variables
Copy `.env.local.example` to `.env.local` and configure:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_RESUME_FILE_ID=your_google_drive_file_id
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

### 2. Google Drive Resume Setup
1. Upload your resume to Google Drive
2. Right-click → Share → Get link
3. Copy the file ID from the URL: `https://drive.google.com/file/d/FILE_ID_HERE/view`
4. Add it to your `.env.local`

### 3. Google Analytics Setup
1. Create a Google Analytics account
2. Get your Measurement ID (starts with G-)
3. Add it to your `.env.local`

### 4. Gmail Setup for Contact Form
1. Enable 2-factor authentication on your Gmail account
2. Go to Google Account Settings > Security > App passwords
3. Generate a new app password for "Mail"
4. Add your Gmail and app password to `.env.local`

## Deployment Options

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `out` folder to Netlify
3. Configure environment variables

### Static Hosting
1. Run: `npm run export`
2. Upload `out` folder to any static host

## Performance Tips
- Images are optimized for static export
- All animations use hardware acceleration
- Code is automatically split and optimized
- SEO metadata is pre-configured

## Troubleshooting
- If resume download doesn't work, check the Google Drive file ID
- For analytics issues, verify the Measurement ID format
- Build errors? Run `npm run type-check` first