import { sveltekit } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

/** @type {import('vite').UserConfig} */
const config = {
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	  ],
	plugins: [sveltekit()]
};

export default config;
