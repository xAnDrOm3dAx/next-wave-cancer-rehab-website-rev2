# Next Wave Cancer Rehab website

Static website for Next Wave Cancer Rehab, an oncology physiotherapy and cancer rehabilitation practice on the Sunshine Coast, Queensland.

Live site: https://www.nextwavecancerrehab.com.au

## Stack

Plain HTML, CSS and a little JavaScript. No framework, build step or npm dependencies. Pages sit in the root, and styles, scripts and images are in `public/`.

## Preview locally

```bash
npx serve . -l 5173
```

Then open http://localhost:5173. Claude Code uses the same command through the `static-site` config in `.claude/launch.json`.

## Deploy

GitHub Pages publishes the `main` branch, and the custom domain is set in `CNAME`. Pushing to `main` updates the live site within a few minutes.

`_config.yml` stops Pages publishing `docs/`, `CLAUDE.md` and this README. Keep internal notes in `docs/`, never alongside the pages.

## Forms

The Contact and Referrers forms post to a Google Apps Script web app, which writes each submission to a Google Sheet and sends an email notification. The script lives in Google Apps Script, not in this repo. If you rename or add form fields, update the script and the Sheet columns to match, then redeploy the existing deployment as a new version so the form URL stays the same.

## Analytics

Google Analytics (GA4) is loaded on every page. The Privacy Policy describes its use.

## Conventions

[`CLAUDE.md`](CLAUDE.md) holds the editing rules: AHPRA copy compliance, accessibility, design tokens, and spacing and typography. [`docs/Brand_Voice.md`](docs/Brand_Voice.md) covers voice and tone for new copy. `docs/CHANGELOG.md` was frozen in October 2026, so git history is the change record from then on.
