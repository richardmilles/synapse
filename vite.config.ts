import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        bio: path.resolve(__dirname, "bio.html"),
        resources: path.resolve(__dirname, "resources.html"),
        resourceClaude: path.resolve(__dirname, "resource-claude.html"),
        resourceProgression: path.resolve(__dirname, "resource-progression.html"),
        resourceContexte: path.resolve(__dirname, "resource-contexte.html"),
        resourceSecurity: path.resolve(__dirname, "resource-security.html"),
        resourceMemory: path.resolve(__dirname, "resource-memory.html"),
      },
    },
  },
}));
