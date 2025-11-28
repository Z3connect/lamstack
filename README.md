# Recruitment Website - Modern React + Tailwind

A professional, mobile-first recruitment website built with React, Vite, and Tailwind CSS.

## 🚀 Tech Stack

- **Frontend Framework:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **SEO:** React Helmet Async
- **Forms:** Formspree (ready to integrate)
- **Data:** Static JSON files

## 🎨 Design Features

### Colors
- **Primary Gradient:** #8B5CF6 → #22D3EE
- **Background:** #F8FAFC
- **Text Primary:** #0F172A
- **Accent/Hover:** #2563EB

### Typography
- **Headings:** Poppins
- **Body:** Inter

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build
```

### Development Server

The app will run on `http://localhost:3000`

## 📄 Pages Included

1. **Home** - Hero, services, process, metrics, testimonials
2. **Employers** - Services, pricing, process, FAQ
3. **Candidates** - Benefits, process, talent network form
4. **Jobs** - Job listings with filters
5. **Job Detail** - Job description with application form
6. **Case Studies** - Success stories grid
7. **About** - Company story, values, team
8. **Contact** - Contact form
9. **Legal Pages** - Privacy, Terms, Cookies

## 🔧 Quick Configuration

### 1. Update Formspree Form IDs

Replace `YOUR_FORM_ID` in these files:
- `src/pages/Contact.jsx`
- `src/pages/Candidates.jsx`
- `src/pages/JobDetail.jsx`

### 2. Update Content

Edit JSON files in `src/data/`:
- `jobs.json` - Job listings
- `casestudies.json` - Case studies
- `faq.json` - FAQs
- `team.json` - Team members

### 3. Add Google Analytics

Add your GA4 code to `index.html`

## 📱 Features

✅ Fully responsive (mobile-first)
✅ Perfect grids on all screens
✅ SEO optimized with React Helmet
✅ JSON-LD structured data
✅ Fast loading (Core Web Vitals optimized)
✅ Smooth animations
✅ Form submissions ready
✅ Static data (no backend needed)

## 🚀 Deployment

### Recommended: Cloudflare Pages / Netlify / Vercel

```bash
npm run build
# Upload dist/ folder
```

Build command: `npm run build`
Publish directory: `dist`

---

Built with ❤️ using React, Vite, and Tailwind CSS

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
