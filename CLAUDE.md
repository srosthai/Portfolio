# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern **personal portfolio website** for HE Sovannthai, a Laravel Backend Developer. Built with Next.js 13 (App Router), TypeScript, and Tailwind CSS, featuring advanced animations and interactive components.

## Development Commands

```bash
# Development
bun run dev          # Start development server

# Production
bun run build        # Build for production
bun run start        # Start production server

# Code Quality
bun run lint         # Run ESLint
```

## Architecture & Structure

### Tech Stack
- **Framework**: Next.js 13.5.8 with App Router
- **Runtime**: Bun (package manager and build tool)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **UI Components**: shadcn/ui with Radix UI primitives  
- **Animation**: Framer Motion
- **Email Services**: Resend (primary), Nodemailer (fallback)
- **3D Graphics**: React Three Fiber (available but not heavily used)

### Directory Structure
```
app/
├── components/
│   └── sections/       # Modular page sections
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── TechStackSection.tsx
│       ├── ResumeSection.tsx
│       └── ProjectsSection.tsx
├── constants/          # Application data and constants
│   ├── projects.ts
│   ├── tech-stack.ts
│   ├── navigation.ts
│   └── resume.ts
├── types/             # TypeScript type definitions
│   └── index.ts
├── lib/               # Utility functions
├── api/               # API routes (contact form endpoints)
├── cv/                # CV page
└── styles/            # CSS modules

components/ui/         # Reusable shadcn/ui components
```

### Key Architecture Patterns

1. **Modular Sections**: Main page broken into reusable section components in `app/components/sections/`

2. **Centralized Data**: All hard-coded data moved to `app/constants/` for easy maintenance

3. **Type Safety**: Centralized TypeScript definitions in `app/types/index.ts`

4. **Animation System**: Heavy use of Framer Motion for scroll-triggered animations and page transitions. Components use `whileInView` for viewport-based animations.

5. **Contact Form**: Dual implementation supporting both Resend API and Formspree for form submissions. Configuration in `app/api/contact-resend/` and fallback handling.

6. **Styling Strategy**: 
   - Tailwind for utility classes
   - CSS Modules for component-specific animations (see `app/styles/`)
   - Inline styles with `styled-jsx` for dynamic effects

7. **Image Optimization**: Uses Next.js Image component for better performance

## Important Implementation Details

### Contact Form Setup
The contact form requires environment configuration:
- **Resend**: Set `RESEND_API_KEY=re_your_key` in `.env.local`
- **Gmail Fallback**: Set `EMAIL_USER` and `EMAIL_PASSWORD` (app password)
- Test endpoint available at `/api/email-test`

### Animation System
- `AnimatedText` component for typewriter effects
- `MeteorRain` and `SlowMeteorRain` for background animations
- Tech stack uses CSS animations in `styles/tech-stack.module.css`
- Scroll-triggered animations use `whileInView` with `viewport={{ once: true }}`

### Static Export Considerations
- Next.js config has `output: 'export'` commented out due to API route compatibility
- Project can switch between static export (with Formspree) or full SSR (with API routes)

## Component Dependencies

### Core Components
- `AnimatedText`: Typewriter animation effect
- `Navigation`: Smooth scrolling navigation bar
- `Projects`: Interactive project showcase with cards
- `Footer`: Contact form with email integration
- Background effects: `MeteorRain`, `SlowMeteorRain`

### UI Framework
Built on shadcn/ui components with customizations:
- Button, Card, Toast for interactions
- LinkPreview for external link previews
- Form handling with React Hook Form + Zod validation

## Email Configuration

Two email delivery methods are supported:

1. **Resend (Primary)**: Modern email API, requires `RESEND_API_KEY`
2. **Nodemailer (Fallback)**: Gmail SMTP with app passwords

The system attempts Resend first, falls back to Nodemailer on failure.

## Development Notes

- Uses Bun for faster package management and builds
- TypeScript strict mode enabled
- ESLint configured but ignored during builds (`ignoreDuringBuilds: true`)
- Images are unoptimized for static export compatibility
- 3D graphics capabilities available via React Three Fiber but not currently used extensively

## Common Tasks

- **Adding new sections**: Follow the pattern in `app/page.tsx` with `motion.div` wrappers and `AnimatedText` for headings
- **Email testing**: Use `/api/email-test` endpoint to verify configuration
- **New animations**: Extend CSS modules in `app/styles/` or use Framer Motion patterns
- **UI components**: Add to `components/ui/` following shadcn/ui conventions