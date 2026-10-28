# Sachin Hipparge — Developer Portfolio

A futuristic, responsive React + Vite portfolio for a Full Stack Developer. Includes animated sections, project cards, skills, contact links, resume download, and responsive navigation.

## 1. Run locally

Install Node.js (LTS), then open this folder in VS Code and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

To check the production build:

```bash
npm run build
npm run preview
```

## 2. Personalize before sharing

Open `src/main.jsx` and update the `PROFILE` object near the top:

- `email`: your professional email address
- `github`: your real GitHub profile URL
- `linkedin`: your real LinkedIn profile URL
- `resume`: keep `/resume.pdf` and place your actual PDF at `public/resume.pdf`

Then update the `projects` array:

- Add or verify repository URLs for Smart Library, Expense Tracker, Group Chat, and the CRUD API. The Salon Booking System card links to the known repository `https://github.com/Sachin-Hipparge/salon-booking-system`.
- Add live demo URLs only after the projects are deployed.
- Keep only technologies and features you actually implemented and can explain in an interview.
- The portfolio now showcases five project cards: Smart Library, Expense Tracker, Real-Time Group Chat, Salon Booking System, and RESTful CRUD API.

The Smart Library repository URL and the Expense Tracker, Group Chat, and CRUD API repository links still need to be filled in. No live demos are claimed by this starter.

## 3. Add your resume

Copy your actual resume PDF into `public/` and name it `resume.pdf`. The Download resume button points to `/resume.pdf`. Do not upload private documents or personal information you do not want public.

## 4. Publish with GitHub + Vercel

1. Create a new GitHub repository, for example `sachin-portfolio`.
2. In the VS Code terminal, from this project folder, run:

```bash
git init
git add .
git commit -m "Build developer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/sachin-portfolio.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with the account you want to publish under. If Git says a remote already exists, inspect it with `git remote -v` before changing it.

3. Sign in to Vercel and import the GitHub repository.
4. Use the defaults for a Vite app: build command `npm run build`, output directory `dist`.
5. Deploy. Vercel will provide a public URL you can add to your resume, LinkedIn, and job applications.
6. After changes, commit and push; Vercel will redeploy automatically.

## 5. Final recruiter checklist

- [ ] Replace all `YOUR_...` placeholders in `src/main.jsx`.
- [ ] Add your real resume PDF.
- [ ] Verify all repository links open the intended projects.
- [ ] Use accurate project descriptions; don't claim features you haven't built.
- [ ] Add screenshots or a live demo after you have one.
- [ ] Test the site on a phone and desktop.
- [ ] Check spelling, email, LinkedIn, GitHub, and resume links.
- [ ] Keep your public resume free of sensitive personal information.

## Stack

React, Vite, Framer Motion, Lucide React, CSS.
