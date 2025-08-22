# Integrative Health Solutions – Static Site

A clean, expandable website with pages for:
- VZ8 Fat Loss Laser (`/vz8.html`)
- Neuropathy Care Program (`/neuropathy.html`)
- New Patient Intake (`/intake.html`)
- Home (`/index.html`) with sticky announcement banner and top menu.

## Quick Start
Upload the `site/` folder to your static host (GitHub Pages, Netlify, etc.).

Replace the **JotForm** placeholders in `vz8.html`, `neuropathy.html`, and `intake.html`:
- `VZ8_FORM_ID`
- `NEURO_FORM_ID`
- `INTAKE_FORM_ID`

Optional: pass prefill data via URL, e.g. `/intake.html?first=Jane&last=Doe`. The iframe will forward the query string to JotForm automatically.

## Customize
- Update phone/email and address in the footer.
- Swap images in `/assets/img` with your clinic photos.
- Edit the announcement banner text in the header HTML (at the top of each page).
