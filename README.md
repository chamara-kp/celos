# Celos — Agency Website

Next-Level Digital Marketing Solutions

## Tech Stack
- React 18 + Vite
- Tailwind CSS v3
- Lucide React icons
- Google Fonts: Syne + DM Sans

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser
# http://localhost:5173
```

## Build for production
```bash
npm run build
npm run preview
```

## Sections
- Hero
- About
- Services
- Pricing (Startup / Growth / Scale)
- Add-ons rate card
- Why Celos
- Service notes
- Contact (form + WhatsApp button)
- Footer

## Customise
- Colors: `tailwind.config.js` — change `orange` and `charcoal` ramps
- Content: edit files inside `src/sections/`
- WhatsApp number: `src/sections/Contact.jsx` → `waLink`
- Email: `src/sections/Contact.jsx` → mailto href
