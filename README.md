# Babatunde Atijosan — Portfolio (Next.js)

This is your static HTML/jQuery portfolio converted into a standard **Next.js 14 (App Router)** project.

## What changed vs. the original

The visual design, copy, layout, and accent color (`#ffbd39`) are all preserved exactly. The
**interaction layer** was modernized:

| Old (jQuery/plugins)                     | New (React)                                              |
|-------------------------------------------|-----------------------------------------------------------|
| `owl.carousel` (hero slider)              | Small custom React component (`components/Hero.jsx`) with `setInterval` + CSS fade |
| `jquery.waypoints` + `jquery.animateNumber` | `IntersectionObserver` + `requestAnimationFrame` (`components/AnimatedCounter.jsx`) |
| `AOS` (vanilla JS init in `main.js`)      | `aos` npm package, initialized once in `components/AosInit.jsx` |
| Bootstrap 4 JS (navbar collapse, scroll)  | Plain React state in `components/Navbar.jsx` |
| `magnific-popup`, `stellar.js`, `scrollax.js` | **Removed** — nothing in the page actually used a lightbox gallery or true parallax scrubbing; keeping them would have meant fighting jQuery's direct DOM manipulation against React's virtual DOM, which is fragile. If you want a lightbox back for the projects grid later, say the word and I'll wire one in with a React-native library. |
| `jquery`, `jquery-migrate`, `popper.js`, `bootstrap.min.js` | **Removed entirely** — no longer needed. |
| Bootstrap CSS pasted inline in `style.css` | `npm install bootstrap` → imported in `app/layout.js` |
| `animate.css` (static file)               | `npm install animate.css` → imported in `app/layout.js` |

The only two custom CSS files still needed as static assets are `icomoon.css` and
`open-iconic-bootstrap.min.css` — these are project-specific generated icon fonts (not on npm),
see setup step 2 below.

## Setup

This project now ships with **placeholder assets already in `public/`**, so it runs immediately
with no setup:

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server** — it'll work right away, with placeholder images/icons/CV:

   ```bash
   npm run dev
   ```

3. **When you're ready, swap in your real content** (see "Replacing the placeholders" below).

### What's a placeholder right now

| File | What it is now |
|---|---|
| `public/images/*.png`, `public/images/bg_1.jpg` | Generated placeholder graphics with labels like "PROJECT 1" |
| `public/BabatundeAtijosanPRINTT.pdf` | A one-page placeholder PDF |
| `public/css/icomoon.css` | Unicode-symbol fallback (📍 ☎ ✉ etc.) instead of your custom icon font |
| `public/css/open-iconic-bootstrap.min.css` | Unicode fallback (☰) for the mobile menu icon |
| `public/fonts/icomoon/`, `public/fonts/open-iconic/` | Empty — a `README.txt` inside each explains what to add |

Everything renders correctly with these in place — nothing is broken or missing, it just isn't
your real content yet.

### Replacing the placeholders

From your old static project, copy these in (same filenames, so no code changes needed):

```
old-project/images/                            → public/images/        (overwrite)
old-project/fonts/icomoon/                     → public/fonts/icomoon/
old-project/fonts/open-iconic/                 → public/fonts/open-iconic/
old-project/css/icomoon.css                    → public/css/icomoon.css        (overwrite)
old-project/css/open-iconic-bootstrap.min.css  → public/css/open-iconic-bootstrap.min.css (overwrite)
old-project/BabatundeAtijosanPRINTT.pdf        → public/BabatundeAtijosanPRINTT.pdf (overwrite)
```

You do **not** need to copy any `.js` files from the old `js/` folder — none of them are used
anymore.

### Build for production

   ```bash
   npm run dev
   ```

   Open http://localhost:3000

4. **Build for production**

   ```bash
   npm run build
   npm start
   ```

## Project structure

```
app/
  layout.js        → <html>/<head>, loads Bootstrap/animate.css/AOS/Poppins/Font Awesome
  globals.css       → your site's custom theme CSS (colors, hero, cards, footer, etc.)
  page.js           → assembles all sections
components/
  Navbar.jsx        → sticky nav, mobile menu, scroll-spy highlighting
  Hero.jsx          → auto-rotating hero slider (2 slides)
  About.jsx
  Resume.jsx        → experience timeline (edit the EXPERIENCE array to update)
  Services.jsx      → edit the SERVICES array
  Skills.jsx        → edit the SKILLS array (name + percentage)
  Projects.jsx       → edit the PROJECTS array (title, tag, link, image)
  CounterAndHire.jsx → stat counters + "hire me" banner
  Contact.jsx
  Footer.jsx
  AnimatedCounter.jsx → reusable "count up on scroll into view" component
  AosInit.jsx        → initializes the AOS scroll-reveal library once
  Loader.jsx         → the page-load spinner
public/
  css/               → icomoon.css, open-iconic-bootstrap.min.css (copy in, see step 2)
  images/            → your images (copy in, see step 2)
  fonts/             → icomoon + open-iconic font files (copy in, see step 2)
```

## Content that's easy to edit

All the copy that used to live in `index.html` now lives at the top of each component file as a
plain JS array or JSX block — e.g. open `components/Skills.jsx` and edit the `SKILLS` array to
change a percentage, or `components/Projects.jsx` to add a new project card.

## Deploying

This is a completely standard Next.js app — it deploys as-is to Vercel, Netlify, or any Node
host. No special configuration needed beyond the asset copy step above.
# main-portfolio
