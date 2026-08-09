import { build } from "vite";
import { rm } from "node:fs/promises";
import { resolve } from "node:path";

await rm(resolve("dist"), { recursive: true, force: true });
await build();
await build({
  build: {
    ssr: "src/entry-server.tsx",
    outDir: ".prerender",
    emptyOutDir: true,
  },
});

await import("./prerender.mjs");
