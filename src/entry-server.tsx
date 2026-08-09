import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppContent } from "./App";
export { getRouteSeo, prerenderRoutes, sitemapRoutes } from "./seo/routeSeo";

export const render = (path: string): Promise<string> => new Promise((resolve, reject) => {
  let settled = false;

  const stream = renderToPipeableStream(
    <StaticRouter location={path}>
      <AppContent />
    </StaticRouter>,
    {
      onAllReady() {
        const body = new PassThrough();
        const chunks: Buffer[] = [];

        body.on("data", (chunk) => {
          chunks.push(Buffer.from(chunk));
        });
        body.on("end", () => {
          settled = true;
          clearTimeout(timeout);
          resolve(Buffer.concat(chunks).toString("utf8").split("\0").join(""));
        });
        body.on("error", reject);
        stream.pipe(body);
      },
      onShellError(error) {
        settled = true;
        clearTimeout(timeout);
        reject(error);
      },
      onError(error) {
        if (!settled) {
          console.error(error);
        }
      },
    },
  );

  const timeout = setTimeout(() => {
    if (!settled) {
      stream.abort();
      reject(new Error(`Le rendu de ${path} a dépassé le délai autorisé.`));
    }
  }, 15000);
});
