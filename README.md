# Portfolio Website (React)

React version of the portfolio site, built with Vite, TypeScript, React Router, and Tailwind CSS.

## Getting started

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Netlify, Vercel, GitHub Pages, or any static host.

## Contact form

Submissions are sent via [FormSubmit](https://formsubmit.co) to `bukhosishuva@gmail.com` by default. To use a different endpoint, copy `.env.example` to `.env` and set `VITE_CONTACT_ENDPOINT`.

## Routes

| Path | Page |
|------|------|
| `/` | Landing (auto-redirects to home) |
| `/home` | Home |
| `/about` | About |
| `/portfolio` | Portfolio |
| `/contact` | Contact |
| `/portfolioprojectEvo` | Evo project |
| `/portfolioprojectEmerge` | Emerge project |
| `/portfolioprojectCurl` | Curl Spire project |

## Assets

Images and videos live in `public/images` and `public/videos`. Resume is at `public/resume.pdf`.
