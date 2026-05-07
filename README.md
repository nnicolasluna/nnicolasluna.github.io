# Developer Portfolio

Professional developer portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Fully static — deployable to GitHub Pages with zero server requirements.

---

## Folder Structure

```
src/
├── app/                    # Next.js App Router (layout, page, globals.css)
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, About, Skills, Experience, Projects, Education, Certifications, Contact
│   └── ui/                 # SectionHeader, ProjectCard, AnimatedSection
├── data/
│   └── portfolio.ts        # ← ALL editable content lives here
├── hooks/
│   └── useActiveSection.ts # Intersection Observer for active nav link
└── types/
    └── index.ts            # TypeScript interfaces
```

## Personalizing Your Portfolio

Open `src/data/portfolio.ts` and replace every field with your own information. The file is fully typed — your editor will guide you through each field.

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Build for Production

```bash
npm run build
```

Output is generated in the `out/` directory as a fully static site.

---

## Deploy to GitHub Pages

### Step 1 — Configure the base path

In `next.config.js`, uncomment and set your repository name:

```js
basePath: '/your-repo-name',
assetPrefix: '/your-repo-name/',
```

### Step 2 — Add the GitHub Actions workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

### Step 3 — Enable GitHub Pages

1. Go to your repository → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the workflow deploys automatically

### Step 4 — Add the CV file

Place your CV at `public/cv.pdf` so the "Download CV" button works.

---

## Customization Notes

- **Colors**: Edit `tailwind.config.ts` to change the accent color (`cyan-400/500`) to any Tailwind color.
- **Sections**: Remove any section from `src/app/page.tsx` and its nav link from `src/components/layout/Navbar.tsx`.
- **Fonts**: Change the Google Font import in `src/app/layout.tsx`.
