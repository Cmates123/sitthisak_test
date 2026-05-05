# Meldalverse

A modern Next.js web application built with React 19, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16.2.4
- **React:** 19.2.4
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 + PostCSS 4
- **UI Components:** shadcn/ui, Base UI React
- **Icons:** Lucide React
- **Utilities:** clsx, class-variance-authority, tailwind-merge

## Getting Started

### Prerequisites
- Node.js 18+ (recommended Node.js 20+)
- npm or yarn

### Setup Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd meldalverse
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local and configure the required variables
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Development

- Edit pages in the `src/app` directory
- The page auto-updates as you edit files
- Use `npm run lint` to run ESLint

## Building

```bash
npm run build
npm start
```

## Deployment

This project is optimized for deployment on Vercel. The easiest way to deploy is to use the [Vercel Platform](https://vercel.com).

### Deploy using Vercel CLI:
```bash
vercel deploy
```

### Deploy on Vercel platform:
1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect the Next.js configuration and deploy

For more details, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
