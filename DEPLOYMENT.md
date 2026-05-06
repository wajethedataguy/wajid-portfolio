# Deployment Guide

This portfolio is built with React, Vite, and Tailwind CSS. Follow these steps to host it on your preferred platform.

## 1. Hosting on GitHub Pages (Recommended for Portfolio)

### Step A: Prerequisites
1. Ensure your `vite.config.ts` has the `base` property set to your repository name if it's not a custom domain:
   ```ts
   // vite.config.ts
   export default defineConfig({
     base: '/YOUR_REPO_NAME/', // example: '/portfolio/'
     // ...
   })
   ```

### Step B: Build and Deploy
1. Run `npm run build`. This creates a `dist` folder.
2. Install the `gh-pages` package: `npm install gh-pages --save-dev`.
3. Add these scripts to your `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

---

## 2. Hosting on Vercel (Easiest & Fastest)

### Step A: Link GitHub
1. Push your code to a GitHub repository.
2. Go to [Vercel.com](https://vercel.com) and sign up with your GitHub account.
3. Click **"Add New"** -> **"Project"**.
4. Import your portfolio repository.

### Step B: Configure
1. Vercel will automatically detect the Vite framework.
2. Ensure the **Build Command** is `npm run build` and the **Output Directory** is `dist`.
3. Click **Deploy**. Vercel will provide a production URL (e.g., `wajid-hussain.vercel.app`).

---

## 3. Making Future Changes

### To Add New Projects/Skills:
1. Open `src/constants.ts`.
2. Update the `SKILLS`, `EXPERIENCE`, or `FEATURED_PROJECTS` arrays with your new data.
3. The UI will automatically rebuild and display the new content.

### To Change Images:
1. Place your new images in `public/images/`.
2. Update the image paths in `src/constants.ts` (e.g., `image: "/public/images/projects/new_project.png"`).

### How to Remove Items:
- Simply remove the corresponding object from the arrays in `src/constants.ts`.
