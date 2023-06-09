// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        assets: "/<rootDir>/assets",
    },
    buildDir: 'dist',
    target: 'static',

    css: [
        "~/assets/main.css"
    ],
    ssr: false,
});
