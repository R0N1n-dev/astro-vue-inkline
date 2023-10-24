import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  // Enable Vue to support Vue components.
  integrations: [
    vue({
      appEntrypoint: "/src/main.js",
    }),
    robotsTxt(),
  ],
  vite: {
    ssr: {
      noExternal: ["@inkline/inkline"],
    },
  },
});
