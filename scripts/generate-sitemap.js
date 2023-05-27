const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')
// const siteMetadata = require('../data/siteMetadata')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/*.js',
    '!pages/[regular].js',
    '!pages/search.js',
    // 'content/posts/**/*.mdx',
    'content/posts/**/*.md',
    'public/tags/**/*.xml',
    '!pages/_*.js',
    '!pages/api',
  ])

  const filePath = './public/tags.txt';

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const strings = fileContent.split('\n');

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                console.log(page)
                const path = page
                  .replace('pages/', '/')
                  .replace('content/posts', '')
                  .replace('public/', '/')
                  .replace('2020/', '')
                  .replace('2021/', '')
                  .replace('2022/', '')
                  .replace('2023/', '')
                  .replace('2024/', '')
                  .replace('2025/', '')
                  .replace('2026/', '')
                  .replace('.js', '')
                  .replace('.mdx', '')
                  .replace('.md', '')
                  .replace('/feed.xml', '')
                const route = path === '/index' ? '' : path
                if (page === `pages/404.js` || page === `pages/[slug].js`) {
                  return
                }
                return `
                        <url>
                            <loc>https://reachlocations.com${route}</loc>
                        </url>
                    `
              })
              .join('')}

              ${strings
                .map((page) => {
                  console.log(page)
                  const path = page
                  return `
                          <url>
                              <loc>https://reachlocations.com/tags/${path}</loc>
                          </url>
                      `
                })
                .join('')}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted)
})()
