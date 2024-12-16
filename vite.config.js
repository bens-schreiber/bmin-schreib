import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "public",
  build: {
    outDir: "../dist",
  },
  css: {
    postcss: path.resolve(__dirname, "postcss.config.js"),
  },
  server: {
    open: true,
  },
});
