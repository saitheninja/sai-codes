import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */ const config = {
  plugins: [
    sveltekit({
      preprocess: [vitePreprocess(), preprocess({ postcss: true })],
      adapter: adapter(),
      paths: { base: process.argv.includes("dev") ? "" : "/sai-codes" },
    }),
  ],
};

export default config;
