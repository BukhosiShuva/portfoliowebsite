import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project site: https://bukhosishuva.github.io/portfoliowebsite/
const base =
  process.env.GITHUB_PAGES === 'true' ? '/portfoliowebsite/' : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
