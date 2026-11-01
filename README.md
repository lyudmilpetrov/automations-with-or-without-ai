# Automations with or without AI

React, TypeScript, and Vite application published at
[lyudmilpetrov.github.io/automations-with-or-without-ai](https://lyudmilpetrov.github.io/automations-with-or-without-ai/).

## Local development

Use Node.js 24 and the committed npm lockfile, matching GitHub Actions:

```sh
npm ci
npm run dev
```

`npm run dev` starts Vite and automatically opens Microsoft Edge at
`http://localhost:5173/automations-with-or-without-ai/`. Microsoft Edge must be
installed. If port 5173 is already in use, Vite opens the next available port.

Run the same checks as CI before publishing:

```sh
npm run lint
node --test src/router/*.test.mjs
npm run build
```

To inspect the production build, run `npm run preview` and open
`http://localhost:4173/automations-with-or-without-ai/`.

## Installable web app (PWA)

The app supports installation with its own icon and a standalone window. The
manifest supplies a stable app ID, project-scoped launch URL, 192px and 512px PNG
icons, and a maskable Android icon. An Apple touch icon supports iOS home screens.
The browser's window color follows the selected light or dark theme.

Installation uses the browser's built-in controls: the install icon or app menu
in Chrome and Edge, or **Share → Add to Home Screen** on iOS. Install promotion
depends on browser support and engagement; it may not appear on the first visit.
Use the HTTPS GitHub Pages URL or localhost when checking installation.

The app requires a network connection. It uses normal browser HTTP caching with
no service worker, offline cache, background sync, or PWA dependency. A service
worker is [not required for installation](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

To verify a production build, open browser DevTools → **Application → Manifest**
and check the name, standalone display, start URL, scope, and loaded icons. Install
the app using the browser controls, launch it, and check that navigation and
reloads work in its standalone window. On iOS, check the home-screen icon and launch
using Add to Home Screen.

## Automatic GitHub Pages deployment

[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) follows
the deployment pattern used in `client-side-free-ai`:

1. Each push to `main` installs locked dependencies, runs lint and navigation
   tests, and builds the production site.
2. Only a successful build uploads `dist/` and deploys it to GitHub Pages.
3. Pull requests targeting `main` run the same validation without deploying.

After the one-time setup below, commit and push source changes to `main` (or merge
a pull request into `main`) to update the website automatically. There is no need
to commit `dist/` or update a `gh-pages` branch. The workflow uses GitHub's built-in
token; no personal access token or repository secret is required.

### One-time repository setup

In [Settings → Pages](https://github.com/lyudmilpetrov/automations-with-or-without-ai/settings/pages),
set **Build and deployment → Source → GitHub Actions**. This replaces the previous
`gh-pages` branch publishing source, as described in
[GitHub's custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

If the `github-pages` environment restricts deployment branches, ensure `main` is
allowed under **Settings → Environments → github-pages**. A restriction left over
from `gh-pages` publishing can otherwise block the first deployment.

Push the workflow and source changes to `main`. Track the first deployment in
[Actions](https://github.com/lyudmilpetrov/automations-with-or-without-ai/actions/workflows/deploy-pages.yml).
Subsequent pushes deploy automatically. To republish without a code change,
select **Deploy to GitHub Pages → Run workflow**, choosing `main`.

### Project URL and navigation

`vite.config.ts` sets `base: '/automations-with-or-without-ai/'`, following
[Vite's project-site deployment guidance](https://vite.dev/guide/static-deploy.html#github-pages).
Assets and navigation must remain under that project path.

Navigation uses hash URLs, for example
`/automations-with-or-without-ai/#/plan-my-workflow`, so direct links and reloads
work on GitHub Pages without server-side route rewrites.
