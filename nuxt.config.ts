// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [{
    path: '../ecom-builder-fe/components',
    global: true
  }, {
    path: '~/components',
    prefix: 'Cms',
    global: true
  }],
  devtools: { enabled: true },
  devServer: {
    port: 3001
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/ui',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }]
  ],
  pinia: {
    storesDirs: ['stores']
  },
  extends: [
    ['../ecom-builder-fe']
  ]
})
