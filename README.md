# Deploying the frontend to GitHub Pages

With the GitHub Actions workflow already committed, publishing the site only requires pushing to the `main` branch (or running the workflow manually). The commands below assume you have the GitHub CLI installed and authenticated.

## One-time setup

```bash
# from the repo root
git checkout main
git pull origin main
```

## Deploy by pushing new commits

```bash
# commit any changes
git add .
git commit -m "chore: update frontend"

# push to main to trigger the deploy workflow
git push origin main
```

## Redeploy without new commits (manual workflow run)

```bash
# trigger the Pages workflow manually
gh workflow run deploy.yml --ref main

# monitor progress
gh run watch
```

## Verify locally before pushing (optional)

```bash
cd automations-with-free-ai-or-without.client
npm ci
npm run build
```
