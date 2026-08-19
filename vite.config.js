import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const projectsData = fileURLToPath(new URL('./src/data/projects.js', import.meta.url))

// GitHub Pages serves only files that exist and ignores 404.html outside the site root,
// so every client-side route needs its own index.html to survive a direct visit.
function clientRoutes() {
  const source = readFileSync(projectsData, 'utf8')
  const caseStudies = [...source.matchAll(/caseStudyLink: '(\/[a-z0-9/-]+)'/g)].map(([, path]) => path)

  if (caseStudies.length === 0) {
    throw new Error('No caseStudyLink routes found in src/data/projects.js')
  }

  return ['/articles', ...caseStudies]
}

function staticRouteHtml() {
  let outDir

  return {
    name: 'static-route-html',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const index = resolve(outDir, 'index.html')
      if (!existsSync(index)) return

      copyFileSync(index, resolve(outDir, '404.html'))

      for (const route of clientRoutes()) {
        const routeDir = resolve(outDir, route.replace(/^\//, ''))
        mkdirSync(routeDir, { recursive: true })
        copyFileSync(index, resolve(routeDir, 'index.html'))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), staticRouteHtml()],
  base: '/',
})
