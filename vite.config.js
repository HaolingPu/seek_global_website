import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// When DEPLOY_TARGET=gh-pages (set by GitHub Actions), prefix all asset URLs
// with the repo name so they resolve under https://<user>.github.io/<repo>/.
// On Vercel (and locally) we keep base="/" so the site lives at the root.
const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages'

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/seek_global_website/' : '/',
  server: {
    port: 5173,
    open: true,
  },
})
