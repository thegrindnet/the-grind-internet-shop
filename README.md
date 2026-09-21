# The Grind Internet Shop

A complete, single-page React website for the coffee, desserts, refreshing drinks, and savory snacks at The Grind Internet Shop in Chaparral, New Mexico.

Suggested repository name: `the-grind-internet-shop`.

## Technology

React, Vite, JavaScript / JSX, plain CSS, and ESLint. No TypeScript, Tailwind, Bootstrap, routing library, or backend. Node.js **24 LTS** is recommended and is used by the GitHub Actions workflow. The `.nvmrc` file selects Node 24.

## Run locally

Install Node.js 24 LTS, extract the ZIP, and open this project folder in VS Code. In the terminal:

```bash
npm install
npm run dev
```

Open the local address printed by Vite. Stop the development server with Ctrl+C when finished.

```bash
npm run lint
npm run build
npm run preview
```

Vite creates the production build in **`dist`**, not `build`. The source archive includes a checked production build for convenience, but GitHub Actions rebuilds it. Do not upload `dist` manually. `npm ci` installs the exact dependency versions in the included `package-lock.json` and is used in CI.

## GitHub Pages

No repository was created or modified, and the website has not been published.

1. Sign into GitHub as `thegrindnet` and create a new **public** repository named `the-grind-internet-shop`. Create an empty repository; do not initialize it with another README or .gitignore.
2. Upload the contents of this project folder to its `main` branch. Upload the files at the repository root, not a surrounding nested folder. Include `.github/workflows/deploy.yml`, `.gitignore`, `.nvmrc`, and `package-lock.json`. Do not upload `node_modules`, `dist`, or the companion source-code listing. If you use the web uploader, ensure the hidden `.github` folder is included; VS Code or GitHub Desktop can publish the whole source folder with its hidden files.
3. Open **Settings → Pages** and choose **GitHub Actions** under **Build and deployment → Source**.
4. Open **Actions → Deploy to GitHub Pages → Run workflow** if the initial push ran before Pages was enabled. Later pushes to `main` deploy automatically.
5. Wait for the build and deploy jobs to finish. The workflow installs Node 24, runs `npm ci`, `npm run lint`, and `npm run build`, and publishes `dist`.

Expected URL after successful deployment:

https://thegrindnet.github.io/the-grind-internet-shop/

The workflow has Pages write and OIDC permissions. Vite uses `base: './'`, so CSS, JavaScript, the favicon, and images resolve relative to the repository subdirectory. Navigation uses section anchors; no server rewrite rules or `.htaccess` file are needed. If you choose another repository name, the same build configuration works; update this README's example URL. This has been tested under a local repository subdirectory. A live GitHub Pages URL cannot be checked until you publish it.

## Update business information

Edit **`src/utils/constants.js`** for:

- Business name, tagline, phone, email, address, map links, Facebook URL.
- Navigation, business hours, all menu items and prices, featured gallery items, service categories, reviews, and FAQs.
- Descriptions and source image references for product photographs.

The Facebook URL is intentionally blank. Add the actual page URL to `business.facebookUrl`; the site will automatically replace the clearly labeled “Page link coming soon” text with a working link. There is no placeholder button or fake form.

The hero and section storytelling text is in each section's JSX. `src/components/App/App.jsx` assembles the page. Each component has its own matching stylesheet and imports it directly. Global colors, typography, shared buttons, and responsive spacing are in `src/index.css`. Update page title and metadata in `index.html` when needed.

## Images

Both supplied menu sheets are included as optimized WebP files in **`src/assets/images/`**. No additional image is required. `ProductImage` uses CSS viewports to display the actual product photos from these sheets; `ProductImage.css` holds their crop positions. These are menu-resolution photographs and are not invented or replaced with stock photography. Keep their dimensions and layout when replacing the sheet files, or update the CSS viewports. For future higher-resolution imagery, supply separate photographs of the Chamoyada, Fresas Con Crema, blended coffee, The Grind Special, bagel sandwich, and shaved ice, then replace the `ProductImage` rendering with the corresponding individual image imports.

The favicon is a simple red-and-white G monogram, not a reproduction of an official business logo. It lives in `public/favicon.png`. The local arrow icon is in `src/assets/icons/`. The full supplied menu sheets retain their original Spanish text as source imagery; visible website descriptions and prices are rendered in English. Specialty names are preserved.

## Content notes

Menu prices were transcribed from the two supplied menus. Confirm future price and flavor changes in `constants.js`. Hours and address follow the details supplied for this website. Reviews were provided by the business owner and link to the supplied reviewer profiles; star ratings and aggregate ratings were not invented. Claudia's review is translated into English and labeled accordingly; its original text is retained in the data file.

The map is a lazy-loaded Google Maps address embed and requires internet access; a visible directions link remains available. Map location results depend on Google resolving the supplied address. Phone and email links open the device's configured applications. No contact form, online ordering, or payment processing is implied.

Basic Open Graph title, description, type, locale, and site name are included. A canonical URL, `og:url`, and absolute social image URL are intentionally left unset until the actual repository URL is confirmed.

## Reference architecture and Normalize.css

Inspected the current `main` branch of:
https://github.com/thegrindnet/mesilla_view_builders_website

Reference commit: `ef0a8dfb41a90e6ee070099a3ef4e15d3d8ea24e`.

The project follows its component-folder, stylesheet-import, App assembly, shared-constants, and BEM organization. This site adds business-specific Menu, FAQ, Visit, ProductImage, Testimonials, and Footer components; groups images under `src/assets/images`; and uses a GitHub Actions deployment with output in `dist`.

`src/vendor/normalize.css` is the complete, unmodified official v8.0.1 downloaded from:
https://necolas.github.io/normalize.css/8.0.1/normalize.css

It is 6,138 bytes, 349 lines, and begins with the official version and MIT license comment. SHA-256:
`580818700724d42d7fcc4979b0197971fca1c6d2e0286769237a0ac897df5512`

`src/main.jsx` imports Normalize.css before `index.css` and all component styles. It is bundled locally, not fetched from a CDN at runtime.

## Official setup references

- Node LTS: https://nodejs.org/en/about/previous-releases
- Vite deployment guide: https://vite.dev/guide/static-deploy.html#github-pages
- GitHub Actions Node setup: https://github.com/actions/setup-node

## Actual source structure

`node_modules` is intentionally excluded. `dist` contains the generated production build and is ignored by Git.

```text
the-grind-internet-shop/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── dist/
│   ├── assets/
│   │   ├── index-D__9Ee7W.css
│   │   ├── index-ZQKLYvnz.js
│   │   ├── the-grind-menu-back-zzcunIF3.webp
│   │   └── the-grind-menu-front-BZawzsCg.webp
│   ├── favicon.png
│   └── index.html
├── public/
│   └── favicon.png
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   └── arrow-up-right.svg
│   │   └── images/
│   │       ├── the-grind-menu-back.webp
│   │       └── the-grind-menu-front.webp
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.css
│   │   │   └── About.jsx
│   │   ├── App/
│   │   │   ├── App.css
│   │   │   └── App.jsx
│   │   ├── Contact/
│   │   │   ├── Contact.css
│   │   │   └── Contact.jsx
│   │   ├── FAQ/
│   │   │   ├── FAQ.css
│   │   │   └── FAQ.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Gallery/
│   │   │   ├── Gallery.css
│   │   │   └── Gallery.jsx
│   │   ├── Header/
│   │   │   ├── Header.css
│   │   │   └── Header.jsx
│   │   ├── Hero/
│   │   │   ├── Hero.css
│   │   │   └── Hero.jsx
│   │   ├── Menu/
│   │   │   ├── Menu.css
│   │   │   └── Menu.jsx
│   │   ├── Navigation/
│   │   │   ├── Navigation.css
│   │   │   └── Navigation.jsx
│   │   ├── ProductImage/
│   │   │   ├── ProductImage.css
│   │   │   └── ProductImage.jsx
│   │   ├── Services/
│   │   │   ├── Services.css
│   │   │   └── Services.jsx
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.css
│   │   │   └── Testimonials.jsx
│   │   └── Visit/
│   │       ├── Visit.css
│   │       └── Visit.jsx
│   ├── utils/
│   │   └── constants.js
│   ├── vendor/
│   │   └── normalize.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .nvmrc
├── DIRECTORY-TREE.txt
├── README.md
├── VERIFICATION.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

## Verification

See `VERIFICATION.md` for actual build, asset, layout, and interaction results.
