# Varro Group - Next.js Website

A modern, high-quality one-page website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind setup
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── WhyUs.tsx           # Why Us section
│   ├── WhatWeInvestIn.tsx  # Investment criteria section
│   ├── Logos.tsx           # Partner logos section
│   ├── AboutDetailed.tsx   # Detailed about section
│   ├── OurProcess.tsx      # Process steps section
│   ├── Contact.tsx         # Contact form section
│   └── Footer.tsx          # Footer component
├── public/
│   ├── images/             # Image assets
│   └── videos/             # Video assets
└── package.json            # Dependencies and scripts
```

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - Latest React features

## 📝 Next Steps

1. Upload hero section images to `public/images/`
2. Add hero video to `public/videos/` (optional)
3. Customize content in component files
4. Adjust styling as needed based on design images

## 🎨 Styling

The project uses Tailwind CSS with custom colors and fonts defined in `tailwind.config.ts`. All design tokens match the original design system.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🔧 Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint


