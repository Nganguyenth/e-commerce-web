import express from 'express'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

process.env.MY_CUSTOM_SECRET = 'API_KEY_qwertyuiop'

const scriptDevTools = `<script>
if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
}
</script>`

const robots = `User-agent: *
Allow: /
Allow: /ads.txt
Crawl-delay: 60
Disallow: /cgi-bin/
`

export async function createServer() {
  const resolve = (p) => path.resolve(__dirname, p)

  const indexProd = fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
  const cssFiles = fs.readdirSync(resolve('dist/client/css')).filter((x) => x.endsWith('.css'))
  const linkHtml = cssFiles.map((l) => `<link rel='stylesheet' type='text/css' href='/css/${l}' />`).join('\n')
  const app = express()
  const serveStatic = (await import('serve-static')).default

  app.use((await import('compression')).default())
  app.use(serveStatic(resolve('dist/client'), { index: false }))
  app.use(serveStatic(resolve('dist/client/css'), { index: false }))

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl
      console.log(`url`, req.hostname, url)
      if (url === '/robots.txt') {
        return res
          .status(200)
          .set({ 'Content-Type': 'text/plain' })
          .end(robots + `Sitemap: ${req.protocol}://${req.hostname}/sitemap.xml \n`)
      }

      // TODO handle tile
      const title = req.hostname
      // render = (await import('./dist/server/entry-server.js')).render

      // const context = {}
      // const appHtml = render(url, context)

      // if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      // return res.redirect(301, context.url)
      // }

      // console.log(`appHtml`, appHtml)
      const html = indexProd
        .replace(`<!--meta-html-->`, '<meta />')
        .replace('<!--link-html-->', linkHtml)
        .replace('<!--title-->', `<title>${title}</title>`)
        .replace('<!--script-react-dev-tools-->', scriptDevTools)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })

  return { app }
}

const port = process.env.PORT || 5175
createServer().then(({ app }) =>
  app.listen(port, () => {
    console.log('Application is running on http://localhost:' + port)
  })
)
