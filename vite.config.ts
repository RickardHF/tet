import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve("game"),
  build: {
    outDir: resolve("game/dist"),
    emptyOutDir: true
  },
  server: {
    fs: {
      allow: [resolve(".")]
    }
  }
});
