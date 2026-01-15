# Tauanne Drumond Advocacia

## Overview

This is a landing page for a Brazilian family law practice (Tauanne Drumond Advocacia). The site is built as a single-page application focused on converting visitors into WhatsApp consultations. It targets individuals going through divorce or needing help with alimony (pensão alimentícia) matters.

The application is a static marketing site with no backend, database, or authentication requirements. It emphasizes performance through lazy loading, code splitting, and compression.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6 with SWC plugin for fast compilation
- **Styling**: Tailwind CSS loaded via CDN with custom configuration for brand colors and fonts
- **Component Structure**: Functional components with lazy loading for below-the-fold sections

### Design Patterns
- **Lazy Loading**: Components not immediately visible (Problem, Services, WhyUs, Process, Footer) are lazy-loaded using React.lazy() and Suspense to improve initial page load
- **Code Splitting**: Vendor chunk separates React, ReactDOM, and Lucide icons from application code
- **Constants Extraction**: Contact information and reviews stored in centralized constants.ts file for easy updates

### Performance Optimizations
- Gzip and Brotli compression via vite-plugin-compression
- Terser minification with console/debugger removal in production
- Font loading with print media trick for non-blocking behavior
- DNS prefetching for external font resources

### Brand Configuration
- **Colors**: Gold (#C5A059), Navy/Black (#09090b), and light variants
- **Fonts**: Cormorant Garamond (serif headings) and Inter (sans-serif body)
- **Primary CTA**: WhatsApp integration for direct contact

## External Dependencies

### Third-Party Services
- **WhatsApp Business API**: Primary contact method via wa.me links
- **Google Maps**: Location link for office address
- **Google Fonts**: Cormorant Garamond and Inter font families
- **Freepik/Imgur**: External image hosting for hero and profile images

### NPM Dependencies
- **lucide-react**: Icon library for UI elements
- **vite-plugin-compression**: Build-time compression for static assets
- **terser**: JavaScript minification

### Environment Variables
- `GEMINI_API_KEY`: Referenced in Vite config but appears unused in current codebase (may be for future AI chat features)

### CDN Dependencies
- Tailwind CSS loaded directly from cdn.tailwindcss.com (not installed via npm)