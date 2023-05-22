// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        assets: "/<rootDir>/assets",
    },
    css: [
        "~/assets/main.css"
    ],
    ssr: false,
    methods: {
        addTocart(product)
    },
});
