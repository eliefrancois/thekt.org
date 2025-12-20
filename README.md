# The KT Foundation Website

> Honoring Kersey Thermidor's legacy by supporting families affected by childhood leukemia.

## About

The KT Foundation is dedicated to supporting families affected by childhood acute lymphoblastic leukemia (ALL), funding critical research, and raising awareness about this devastating disease. This website serves as the digital home for our mission, connecting donors, families, and supporters.

**In Memory of Kersey Thermidor**  
December 15, 2008 – August 22, 2023

## Mission

Our three core pillars:
1. 🤝 **Support Families** - Providing financial and emotional support to families facing childhood leukemia
2. 🔬 **Fund Research** - Investing in cutting-edge research for better treatments and cures
3. 📢 **Raise Awareness** - Educating communities about childhood leukemia and early detection

## Tech Stack

This is a [Next.js](https://nextjs.org/) project built with:
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React** - UI components

## Getting Started

First, install dependencies:

```bash
npm install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── _sections/        # Main page sections
│   │   ├── hero.tsx      # Hero section with Kersey's story
│   │   ├── features.tsx  # About Kersey and mission
│   │   ├── price.tsx     # Donation options
│   │   └── features/
│   │       ├── bento-layout.tsx  # Mission cards
│   │       └── our-work.tsx      # Visual showcase
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── cult/             # Custom UI components
│   │   ├── tweet-grid.tsx    # Testimonials
│   │   └── ...
│   ├── navbar.tsx        # Navigation
│   └── faq.tsx          # FAQ section
└── ...
```

## Key Features

- 🎗️ **Orange Theme** - Leukemia awareness color throughout
- 💝 **Donation System** - Multiple giving options
- 📱 **Responsive Design** - Mobile-first approach
- ♿ **Accessible** - WCAG 2.1 AA compliant
- ⚡ **Fast** - Optimized performance
- 🎨 **Beautiful Animations** - Smooth, purposeful motion

## Color Palette

- **Orange 600** (#ff6c0a) - Primary brand color (leukemia awareness)
- **Orange 500** (#ff8533) - Accents
- **White** (#ffffff) - Backgrounds
- **Gray 900** (#1d1d1f) - Text

## Documentation

- [REVAMP_SUMMARY.md](./REVAMP_SUMMARY.md) - Complete list of changes made
- [DESIGN_GUIDE.md](./DESIGN_GUIDE.md) - Brand guidelines and design system

## Contributing

We welcome contributions! If you'd like to help improve the website:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

```bash
npm run build
```

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Support

For questions about the foundation or website:
- **Email:** info@ktfoundation.org
- **Website:** thekt.org

## License

Copyright © 2025 The KT Foundation. All rights reserved.

---

## #KTStrong 🎗️

*Turning tragedy into hope, one life at a time.*
