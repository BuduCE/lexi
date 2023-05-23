// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        assets: "/<rootDir>/assets",
    },
    target: 'server',
    css: [
        "~/assets/main.css"
    ],
    ssr: false,
});
