import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";

const LOCAL_PORT = 4321;
const LOCAL_HOST = "localhost";

function getSiteURL() {
	if (process.env.CF_PAGES) {
		if (process.env.CF_PAGES_BRANCH === "main") {
			return "https://team-ux-com.pages.dev/";
		} else {
			return `https://${process.env.CF_PAGES_BRANCH}.team-ux-com.pages.dev/`;
		}
	} else if (process.env.GITHUB_ACTION) {
		return "https://www.team-ux.com/";
	} else {
		return `http://${LOCAL_HOST}:${LOCAL_PORT}/`;
	}
}

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), sitemap()],
});
