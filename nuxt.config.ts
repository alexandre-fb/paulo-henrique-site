// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'vue3-carousel-nuxt',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts', 
      {
        families: {
          Nunito: {
            wght: [300, 400, 600, 700], 
          },
          OpenSans: {
            wght: [300, 400, 600, 700], 
          }
        }
      }
    ]
  ],
  css: ['~/assets/css/main.css']

})
