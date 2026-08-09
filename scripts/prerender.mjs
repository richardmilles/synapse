import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getRouteSeo, prerenderRoutes, render, sitemapRoutes } from "../.prerender/entry-server.js";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDirectory = resolve(projectRoot, "dist");
const template = await readFile(resolve(distDirectory, "index.html"), "utf8");

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const renderHead = (seo) => {
  const canonical = `https://www.synapse-lab.co${seo.path === "/" ? "/" : seo.path}`;
  const image = "https://www.synapse-lab.co/og-image.png";
  const structuredData = seo.structuredData
    ? `<script id="page-structured-data" type="application/ld+json">${JSON.stringify(seo.structuredData).replaceAll("<", "\\u003c")}</script>`
    : "";

  return [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}">`,
    `<meta name="robots" content="${seo.index === false ? "noindex,follow" : "index,follow"}">`,
    `<link rel="canonical" href="${canonical}">`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}">`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}">`,
    `<meta property="og:type" content="${seo.type ?? "website"}">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:image" content="${image}">`,
    `<meta property="og:locale" content="fr_FR">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}">`,
    `<meta name="twitter:image" content="${image}">`,
    structuredData,
  ].filter(Boolean).join("\n    ");
};

const routeOutputPath = (route) => route === "/"
  ? resolve(distDirectory, "index.html")
  : resolve(distDirectory, `${route.slice(1)}.html`);

const routes = [...prerenderRoutes, "/404"];

for (const route of routes) {
  const appHtml = await render(route);
  const seo = getRouteSeo(route);
  const outputPath = routeOutputPath(route);
  const html = template
    .replace("<!--seo-head-->", renderHead(seo))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const canonical = `https://www.synapse-lab.co${seo.path === "/" ? "/" : seo.path}`;
  if (appHtml.length < 500 || html.includes('<div id="root"></div>')) {
    throw new Error(`Le contenu HTML initial de ${route} est incomplet.`);
  }
  if (!html.includes(`<link rel="canonical" href="${canonical}">`)) {
    throw new Error(`La canonique de ${route} est absente ou incorrecte.`);
  }
  if (html.includes("\0")) {
    throw new Error(`Le rendu de ${route} contient un caractère nul.`);
  }

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapRoutes.flatMap((route) => [
    "  <url>",
    `    <loc>https://www.synapse-lab.co${route.path === "/" ? "/" : route.path}</loc>`,
    route.lastModified ? `    <lastmod>${route.lastModified}</lastmod>` : null,
    "  </url>",
  ].filter(Boolean)),
  "</urlset>",
  "",
].join("\n");

await writeFile(resolve(distDirectory, "sitemap.xml"), sitemap);
await rm(resolve(projectRoot, ".prerender"), { recursive: true, force: true });
