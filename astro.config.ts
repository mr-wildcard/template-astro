import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import yaml from "@rollup/plugin-yaml";

const LOCAL_PORT = 4321;
const LOCAL_HOST = "localhost";

function getSiteURL() {
  if (process.env.CF_PAGES) {
    if (process.env.CF_PAGES_BRANCH === "main") {
      throw new Error(
        "You need to configure the production URL in astro config file",
      );
    } else {
      throw new Error(
        "You need to configure the Cloudlfare Pages URL in astro config file using pattern `https://${process.env.CF_PAGES_BRANCH}.DOMAIN.pages.dev/`",
      );
    }
  } else if (process.env.GITHUB_ACTION) {
    throw new Error(
      "You need to configure the production URL in case build is done made by Github Action",
    );
  } else {
    return `http://${LOCAL_HOST}:${LOCAL_PORT}/`;
  }
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    sitemap(),
  ],
  site: getSiteURL(),
  vite: {
    plugins: [yaml()],
    build: {
      // mainly for transpiling optional chaining for iOS 12
      target: "es2019",
    },
  },
  server: {
    host: LOCAL_HOST,
    port: LOCAL_PORT,
  },
});
