# Code with GitHub Copilot

A personal walkthrough of the [GitHub Skills](https://skills.github.com) course **"Code with GitHub Copilot"**, completed in a Codespace using GitHub Copilot's autocomplete and comment-driven code suggestions in VS Code.

## What's in this repo

This repo contains the small JavaScript exercises produced while working through the course activities:

- `skills.js` — a `calculateNumbers(var1, var2)` function generated from a Copilot autocomplete suggestion (Step 2: seeing AI code suggestions).
- `member.js` — a `skillsMember()` factory function that returns an object for tracking a member's skills (`addSkill`, `removeSkill`, `getSkills`), generated via Copilot's suggestions hub (Step 3).
- `comments.js` — an [Express](https://expressjs.com/) web server exercise driven by comment-based Copilot suggestions (Step 4: "Create web server", "Create comments array", etc.). This file is an in-progress course exercise and is not a complete, runnable server.

The `.github/workflows/` and `.github/steps/` directories are GitHub Skills course-progression automation: each workflow checks for specific file contents and advances a step counter in this README as the course activities are completed. They are not application CI/CD.

## Tech stack

- Node.js
- [Express](https://expressjs.com/) (dependency used by `comments.js`)
- ESLint + Prettier for linting/formatting

## Setup

```bash
npm install
```

## Running

`skills.js` and `member.js` export plain functions and are not meant to be run directly. `comments.js` is an incomplete course exercise (it does not yet define any Express routes), so `npm start` will start the process but the server won't serve anything yet:

```bash
npm start
```

## Linting & formatting

```bash
npm run lint      # check for lint errors
npm run lint:fix   # auto-fix what ESLint can
npm run format     # format with Prettier
```

## License

MIT — see [LICENSE](./LICENSE).
