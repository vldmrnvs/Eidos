# Eidos Demo

This project is a simplified Next.js + TypeScript starter showcasing reusable UI components built with TailwindCSS, shadcn/ui patterns and Framer Motion.

## Stack

- **Next.js** for the React framework
- **TypeScript** for type safety
- **TailwindCSS** for utility-first styling
- **Framer Motion** for animations
- **Jest** and **Testing Library** for basic unit tests

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the demo.

## Available Pages

- `/` – examples of all UI components with animations
- `/login` – animated login form
- `/dashboard` – protected page loading sample data from `/data`
- `/about` – simple about page

## Using Animations

All interactive components use Framer Motion. Example snippet:

```tsx
<motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
  Hover me
</motion.button>
```

## Testing

Run unit tests with:

```bash
npm test
```

## Data

The `data/` directory contains JSON files with base components used in the examples. These files must remain untouched.
