import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: process.env.GITHUB_ACTIONS ? "/everafterbloom/" : "/",
  },

  nitro: process.env.GITHUB_ACTIONS ? false : undefined,

  tanstackStart: {
    server: { entry: "server" },

    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
});
