// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        assets: "/<rootDir>/assets",
    },
    css: [
        "~/assets/main.css"
    ],
    ssr: false,
    runtimeConfig: {
        public: {
            serviceId:process.env.SERVICE_ID,
            templateId:process.env.TEMPLATE_ID
            publicKey:process.env.PUBLIC_KEY
        }
    },
});
