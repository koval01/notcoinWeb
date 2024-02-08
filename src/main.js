import App from './App.svelte';

export const API_HOST = "https://clicker-api.joincommunity.xyz";
export const CDN_HOST = "https://cdn.joincommunity.xyz";
export const DISPLAY_SPLASH = false;

const app = new App({
	target: document.body,
});

export default app;
