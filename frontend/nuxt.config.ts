// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false, viewer: true },
	modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
})
