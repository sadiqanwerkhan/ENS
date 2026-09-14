# Product Landing Page

A static, responsive landing page for a fictional product, ENS Pulse wireless over-ear headphones. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

> The product, brand, pricing, and contact details are fictional and used for demonstration only.

## Sections

- Header (`components/site-header.tsx`): product name and primary navigation.
- Hero (`components/product-hero.tsx`): product image, short description, price, and key stats.
- Key features (`components/product-features.tsx`): four features with a supporting detail image.
- Footer (`components/site-footer.tsx`): contact email, phone, address, and support information.

## Responsiveness

- CSS Grid for the hero and feature grids.
- Flexbox for the header bar and footer rows.
- Media queries through Tailwind breakpoints (`sm:`, `md:`, `lg:`).

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Getting started

Requires Node.js 20 or later.

    npm install
    npm run dev

Open http://localhost:3000 in your browser.

## Scripts

- `npm run dev`: start the development server.
- `npm run build`: create a production build.
- `npm start`: run the production build.