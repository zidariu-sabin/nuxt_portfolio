// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/ui', // '@nuxtjs/color-mode'
  '@nuxtjs/tailwindcss', 'motion-v/nuxt', '@nuxtjs/mdc', '@nuxt/content', '@nuxthub/core'],
  colorMode:{
    classSuffix: ' '
  },
  content:{
    build:{
      markdown:{
        highlight: {
          theme: 'ayu-dark',
          langs:[
            'go'
          ]
        }

      }
    }

  },
  components:[
    {
      path: '~/components',
      extensions: ['.vue'],
    }
  ],
css: [ '~/assets/css/main.css'],
   tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    // injectPosition: 0,
    viewer: true,
  },
  })