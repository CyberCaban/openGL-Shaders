import { defineConfig } from "vite";

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1200,
  },
  base: "/openGL-Shaders/",
});
