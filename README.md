# LedgerLine Website

A high-trust agency website for LedgerLine, a specialized studio that builds backend-heavy internal systems in Bubble for teams operating in complex, real-world workflows.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

## Project Structure

```
/app                 # Next.js App Router pages
  /api/contact       # Contact form API endpoint
  /work              # Case studies
  /about             # About page
  /contact           # Contact page
  /process           # Process page
  /services          # Services page
/components          # Reusable React components
/public              # Static assets
  /brand             # Brand assets (logos, images)
```

## Pages

- **Home** (`/`) - Hero, approach, featured work, process highlight
- **Work** (`/work`) - Case studies index and detail pages
- **Process** (`/process`) - 5-phase development process
- **Services** (`/services`) - Service offerings
- **About** (`/about`) - Studio philosophy and approach
- **Contact** (`/contact`) - Lead qualification form

## Design System

The site uses a neutral, system-focused design aesthetic:

- **Primary Color**: Slate (neutral blacks and grays)
- **Accent**: Deep slate blue (#1e293b)
- **Typography**: Inter sans-serif
- **Layout**: Clean, generous whitespace, card-based components

## Contact Form

The contact form collects:
- Name
- Email
- Company (optional)
- What are you replacing?
- Workflow description
- Timeline
- Budget range

Currently configured with a stub API endpoint. In production, integrate with your email service or CRM.

## Deployment

This is a standard Next.js application and can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## License

All rights reserved © LedgerLine
