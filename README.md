# Kishan Chiranjeevi — 3D Portfolio

A scroll-driven portfolio built with React, TypeScript, Three.js, and Tailwind CSS. The 3D scene follows the page as you move through the profile, skills, projects, timeline, and contact sections.

## Run it locally

```powershell
npm install
npm run dev
```

## Edit the portfolio without code

Open **Edit Content** in the navigation. The profile, project, skill, and timeline editor updates the page as you type and saves changes in the current browser. The **Export** panel lets you copy a JSON backup. These browser edits are private to that browser; to publish a changed version for everyone, update the repository data and push a new commit.

The editor is public in this starter so it can be used without a login. Do not put private information in the portfolio.

## Publish

The GitHub Actions workflow builds the site and deploys it to GitHub Pages when code is pushed to `main`. In the repository's **Settings → Pages**, select **GitHub Actions** as the build and deployment source if it is not already selected. The site URL will be:

```text
https://kishanchiranjeevi-07.github.io/cosmic-3d-portfolio/
```

## Content and privacy

The initial copy and projects are editable sample content. Replace any details that do not describe you before sharing the site. No analytics, contact form backend, or shared content database is configured. Contact form messages open the visitor's email app.
