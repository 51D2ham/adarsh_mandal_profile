# Adarsh Mandal - Professional Portfolio Website

A modern, responsive portfolio website for Adarsh Mandal, a professional Civil Engineer specializing in infrastructure design and development.

## 🚀 Features

- **Fast & SEO-Optimized**: Built with Next.js 15 for optimal performance
- **Mobile-First Design**: Fully responsive across all devices
- **Accessibility Compliant**: WCAG AA standards with proper ARIA labels
- **Interactive Portfolio**: Filterable project gallery with smooth animations
- **Smart Contact Form**: Enhanced form with email notifications
- **Secure Resume Download**: Optimized download with error handling
- **Performance Optimized**: Throttled scroll events and memoized calculations
- **Contact Slider**: Quick access contact options
- **Professional Animations**: Smooth Framer Motion animations
- **Modern Design System**: Consistent, scalable design components

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Email Service**: Nodemailer with Gmail
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── components/
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Hero.tsx              # Hero section with image slider
│   │   ├── About.tsx             # About section
│   │   ├── Experience.tsx        # Experience timeline
│   │   ├── Portfolio.tsx         # Projects showcase
│   │   ├── Skills.tsx            # Skills section
│   │   ├── Contact.tsx           # Contact form
│   │   ├── Footer.tsx            # Footer section
│   │   ├── ScrollToTop.tsx       # Scroll to top button
│   │   └── Preloader.tsx         # Loading animation
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── public/
│   ├── images/
│   │   ├── 001.jpg              # Profile image 1
│   │   └── 002.jpg              # Profile image 2
│   ├── robots.txt               # SEO robots file
│   └── sitemap.xml              # SEO sitemap
├── .env.local.example           # Environment variables template
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Gmail account (for contact form)

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd career-website-AD
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your configuration:
```env
# Gmail Configuration (Required for contact form)
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password

# Google Drive Resume (Optional)
NEXT_PUBLIC_RESUME_FILE_ID=your_google_drive_file_id

# Google Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

4. **Run the development server:**
```bash
npm run dev
```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## 📧 Gmail Setup for Contact Form

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification

### Step 2: Generate App Password
1. In Google Account settings, go to Security
2. Under "2-Step Verification", click on "App passwords"
3. Select "Mail" and "Other (custom name)"
4. Enter "Portfolio Contact Form"
5. Copy the generated 16-character password

### Step 3: Configure Environment Variables
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

## 📱 Google Drive Resume Setup (Optional)

1. **Upload your resume to Google Drive**
2. **Right-click → Share → Get link**
3. **Make sure it's set to "Anyone with the link can view"**
4. **Copy the file ID from the URL:**
   ```
   https://drive.google.com/file/d/FILE_ID_HERE/view
   ```
5. **Add to `.env.local`:**
   ```env
   NEXT_PUBLIC_RESUME_FILE_ID=FILE_ID_HERE
   ```

## 🎨 Customization

### Personal Information
Update the following files with your information:

- **Hero Section**: `app/components/Hero.tsx`
- **About Section**: `app/components/About.tsx`
- **Experience**: `app/components/Experience.tsx`
- **Projects**: `app/components/Portfolio.tsx`
- **Skills**: `app/components/Skills.tsx`
- **Contact Info**: `app/components/Contact.tsx` and `app/components/Footer.tsx`

### Images
Replace the profile images in `public/images/`:
- `001.jpg` - Primary profile image
- `002.jpg` - Secondary profile image

### Colors & Branding
The website uses a blue color scheme. To customize:
1. Update colors in `app/globals.css`
2. Modify the gradient backgrounds in components
3. Update the favicon and meta images

### SEO Configuration
Update `app/layout.tsx` with your:
- Meta title and description
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)

## 📊 Performance Features

- **Next.js Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Lazy Loading**: Components load as needed
- **Optimized Fonts**: Google Fonts optimization
- **Minimal JavaScript Bundle**: Only essential JavaScript

## ♿ Accessibility Features

- **Semantic HTML**: Proper HTML structure
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **High Contrast**: Proper color contrast ratios
- **Focus Indicators**: Clear focus states

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tag optimization
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **JSON-LD**: Structured data for search engines
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions

## 🚀 Deployment

### Vercel (Recommended)
1. **Push your code to GitHub**
2. **Connect your repository to Vercel**
3. **Add environment variables in Vercel dashboard**
4. **Deploy automatically**

### Other Platforms
The website can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Any static hosting service

### Environment Variables for Production
Make sure to add these in your deployment platform:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
NEXT_PUBLIC_RESUME_FILE_ID=your-file-id (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-id (optional)
```

## 📝 Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

## 🔧 Configuration Files

- **`next.config.js`**: Next.js configuration
- **`tailwind.config.ts`**: Tailwind CSS configuration
- **`tsconfig.json`**: TypeScript configuration
- **`postcss.config.mjs`**: PostCSS configuration

## 📞 Support

For support or questions:
- **Email**: adarsh.mandal.143@gmail.com
- **Phone**: +977 9811272899
- **Location**: Kathmandu, Nepal

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ using Next.js 15 and Tailwind CSS**

*Professional Portfolio for Adarsh Mandal - Civil Engineer (NEC Registration #85377)*