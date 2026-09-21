# Verification results

Checked September 21, 2026 using Node 24.19.0 and npm 11.9.0.

- Inspected the reference repository's current main tree and its App, Header, Gallery, main entry point, and global CSS before implementation. Commit: ef0a8dfb41a90e6ee070099a3ef4e15d3d8ea24e.
- `npm install`: passed. `package-lock.json` is included.
- `npm ci`: passed with the included lockfile.
- `npm run dev`: served HTTP 200.
- `npm run lint`: passed, zero ESLint errors or warnings.
- `npm run build`: passed, with production output in `dist` and no build warnings.
- Browser checks: Chromium at 320, 375, 768, 1024, 1440, and 1920 CSS pixels. No document overflow or off-screen text/control boxes at these sizes.
- Checked mobile menu opening, closing, Escape key behavior, and automatic closing after selecting a section.
- Verified all 24 internal anchor links resolve to unique existing IDs.
- Verified all five FAQ disclosure controls open and close.
- Verified every displayed local image loads and decodes successfully.
- Verified outbound new-tab links include `noopener noreferrer`; phone and email links use `tel:` and `mailto:`.
- No browser JavaScript errors and no failed local asset responses.
- Local production test mounted `dist` at `/the-grind-internet-shop/` on a plain static server, without SPA fallback. Direct JavaScript, CSS, favicon, and WebP requests returned HTTP 200 with the expected MIME types, not index.html. A deliberately missing asset returned 404.
- Checked text enlargement to 200% at 320 pixels. Header wraps, with no horizontal overflow in text/control boxes.
- Viewed desktop and mobile screenshots; corrected the narrow-screen header and mobile headline spacing.
- Checked all relative source imports and filename capitalization on the case-sensitive filesystem.
- Official Normalize.css 8.0.1 downloaded from https://necolas.github.io/normalize.css/8.0.1/normalize.css. Confirmed its complete 6,138-byte contents match the downloaded source exactly (349 lines).
- Normalize.css SHA-256: `580818700724d42d7fcc4979b0197971fca1c6d2e0286769237a0ac897df5512`.
- Official version / MIT license header retained. Its import precedes global and component styles; its rules appear first in the built stylesheet.
- No inherited client content in the webpage or metadata. The README includes the requested architecture reference for traceability.
- No additional images are required. Facebook URL remains a clearly labeled optional configuration value.

## Verification boundaries

No commit, push, repository modification, or deployment was performed. The workflow is supplied and configured; a live GitHub Actions run and the final public Pages URL cannot be verified until the owner enables Pages and publishes the source. Project-subdirectory serving and MIME checks were completed locally.

The Google Maps address query matches the provided address. Third-party map tile rendering was excluded from the automated layout checks; the always-visible directions link is provided as a fallback. Google controls address resolution. Reviews and prices were transcribed from user-supplied content, not independently verified with Google or the shop.

Keyboard interactions and responsive layout were checked; this is not a formal accessibility certification. npm printed a pre-existing environment warning about `http-proxy`; it is not a project error or part of the shipped configuration.
