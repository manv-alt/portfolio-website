# Modern React Portfolio Website

A stunning, fully responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. 
Designed with a sleek dark mode aesthetic, vibrant gradients, and smooth scroll interactions.

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173` in your browser.

## Deployment Guide (Vercel)

This project is optimized for easy deployment on [Vercel](https://vercel.com). Vercel is highly recommended for Vite + React applications.

1. **Push your code to GitHub/GitLab/Bitbucket.**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to your Vercel Dashboard and click "Add New..." > "Project".
   - Import your newly created repository.
   - Vercel will automatically detect the **Vite** framework.
   - Click **Deploy**. Your site will be live in less than a minute!

## Customization

- Edit colors and animations in `tailwind.config.js`.
- Modify specific component details, texts, and links inside `src/components/`.

Enjoy your new awesome portfolio!
