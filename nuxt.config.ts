import { existsSync, readFileSync } from "node:fs";
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  nitro: {
    preset: "cloudflare-pages",
  },
  gtag: {
    id: "",
  },
  typescript: {
    strict: true,
  },
  modules: [
    "vuetify-nuxt-module",
    "@nuxtseo/module",
    "nuxt-link-checker",
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
    "nuxt-og-image",
    "nuxt-schema-org",
    "nuxt-seo-experiments",
  ],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    },
  },
  app: {
    head: {
      titleTemplate: "%s %separator %siteName",
      templateParams: {
        separator: "•",
      },
    },
  },
  site: {
    url: "https://softagon.com.br",
    name: "Softagon Sistemas",
    description: "Desde 2000",
    defaultLocale: "pt-br",
    trailingSlash: true,
    indexable: true,
  },
  vite: {
    vue: {
      script: {
        fs: {
          fileExists(file: string) {
            return existsSync(file);
          },
          readFile(file: string) {
            return readFileSync(file, "utf-8");
          },
        },
      },
    },
  },
});
