// @ts-check
import { defineConfig } from "astro/config";
import vercelAdapter from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://isaque16-portfolio.vercel.app",
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  adapter: vercelAdapter(),
});
