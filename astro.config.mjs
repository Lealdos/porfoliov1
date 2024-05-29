import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';

import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), robotsTxt()],
    output: 'static',
    adapter: vercelStatic(),
});
