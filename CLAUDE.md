# Working in this repository

* This is Nic Carroll's personal site. Everything on the page comes from `public/resume.json`; pages are plain HTML, CSS and JavaScript with no build step. Pushing to `main` deploys.
* Follow the brand: read `brand-package/BRAND.md` before changing any look, logo, color or wording. Use the logo files in `brand-package/logos`; never redraw the mark.
* Colors come from `public/schemes.css`. Do not hard code an accent color in a page; use the variables. After adding or changing a scheme run `python3 scripts/check-schemes.py`; it must pass.
* Writing: no em dashes or dashes, Title Case for headings and buttons, "Georgia Southern University" in full, every number true and sourced.
* Never show real employer systems, people or records. Showcase screens use the fictional Oakhaven name and invented data.
