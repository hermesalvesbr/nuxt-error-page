// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: "cloudflare-pages",
  },
  gtag: {
    id: "G-PRNHGBG1F4",
  },
  typescript: {
    strict: true,
  },
  modules: ["vuetify-nuxt-module"],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    },
  },
});
