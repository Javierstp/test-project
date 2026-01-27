export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxt/devtools",
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/hints",
  ],
  css: ["~/assets/css/main.css", "leaflet/dist/leaflet.css"],
});
