
  # DesignWithRoselyn

  This is a code bundle for DesignWithRoselyn. The original project is available at https://www.figma.com/design/0uOpBejDctQW9dTZKbWPp5/DesignWithRoselyn.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Production and SEO

  Run `npm run build` and deploy the entire `dist/` directory. The build
  prerenders all five routes, including their content and metadata, and generates
  `sitemap.xml`. Configure hosting to serve each route's generated `index.html`
  (for example, `/about` serves `dist/about/index.html`) before any SPA fallback.
  Rewriting every request to the homepage would give social crawlers the wrong
  metadata on inner pages. Return HTTP 404 for unknown paths.

  Edit page titles, descriptions and structured data in `src/app/seo.ts`.
  The homepage metadata in `index.html` also provides defaults during development;
  production metadata is generated from `seo.ts`. React keeps metadata in sync
  during navigation and hydrates the generated content.

  Social previews use `public/rosie-og.webp` (1200 × 630). Icons are PNG versions
  of `public/favicon.svg`. No X/Twitter account is declared because no verified
  handle is configured. After deployment, submit
  `https://designwithroselyn.com/sitemap.xml` in Google Search Console and refresh
  cached previews in the social platforms' inspection tools.

