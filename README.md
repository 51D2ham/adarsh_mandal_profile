# Adarsh Mandal - Professional Portfolio Website

A modern, responsive portfolio website for Adarsh Mandal, a professional Civil Engineer specializing in infrastructure design and development.

## 🚀 Features

- **Fast & SEO-Optimized**: Built with Next.js 15 for optimal performance
- **Mobile-First Design**: Fully responsive across all devices
- **Accessibility Compliant**: WCAG AA standards with proper ARIA labels
- **Interactive Portfolio**: Filterable project gallery with smooth animations
- **Smart Contact Form**: Enhanced form with improved validation
- **Secure Resume Download**: Optimized download with error handling
- **Performance Optimized**: Throttled scroll events and memoized calculations
- **Environment Configured**: Easy deployment with environment variables
- **Analytics Ready**: Configurable Google Analytics integration
- **Schema Markup**: JSON-LD structured data for better SEO
- **Security Headers**: Built-in security configurations
- **Static Export Ready**: Optimized for static hosting platforms
- **Modern Design System**: Consistent, scalable design components
- **Smooth Animations**: Hardware-accelerated transitions
- **Production Ready**: Optimized for performance and accessibility

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion with custom keyframes
- **Icons**: Lucide React
- **Language**: TypeScript
- **UI Components**: Custom component library
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

\`\`\`
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── images/
│   ├── sitemap.xml
│   └── robots.txt
└── README.md
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/adarshmandal/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.local.example .env.local
\`\`\`
Edit `.env.local` with your configuration.

4. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Configuration

### Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

\`\`\`env
NEXT_PUBLIC_RESUME_FILE_ID=your_google_drive_file_id
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
\`\`\`

### Google Drive Resume Download

1. Upload your resume to Google Drive
2. Right-click → Share → Get link
3. Copy the file ID from the URL
4. Add it to your `.env.local`

### Google Analytics

1. Create a Google Analytics account
2. Get your Measurement ID (starts with G-)
3. Add it to your `.env.local`

### Contact Form

The contact form includes validation and error handling. To make it functional:

1. Set up a backend service (e.g., Formspree, Netlify Forms)
2. Update the form submission logic in \`Contact.tsx\`

## 🎨 Customization

### Colors & Branding

The website uses a blue color scheme. To customize:

1. Update the color classes in Tailwind CSS
2. Modify the gradient backgrounds in components
3. Update the favicon and images

### Content

Update the following files with your information:

- Personal details in \`Hero.tsx\`
- Experience data in \`Experience.tsx\`
- Projects in \`Portfolio.tsx\`
- Skills in \`Skills.tsx\`
- Contact information throughout components

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus indicators

## 🔍 SEO Features

- Meta tags optimization
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data
- Sitemap.xml
- Robots.txt
- Semantic HTML

## 📊 Performance

- Next.js Image optimization
- Code splitting
- Lazy loading
- Optimized fonts
- Minimal JavaScript bundle

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The website can be deployed to:

- Netlify
- AWS Amplify
- GitHub Pages (with static export)
- Any static hosting service

For static export:
\`\`\`bash
npm run export
\`\`\`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

**Adarsh Mandal**
- Email: adarsh.mandal.143@gmail.com
- Phone: +977 9811272899
- Location: Birgunj, Nepal
- NEC Registration: 85377

---

Built with ❤️ using Next.js and Tailwind CSS
\`\`\`
