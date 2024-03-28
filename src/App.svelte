<script lang="ts">
	import Home from "./routes/Home.svelte";
	import Squad from "./routes/Squad.svelte";
	import NoMatch from "./elements/NoMatch.svelte";

	import { Router, Route } from "svelte-routing";
	import { onMount } from "svelte";

	let Component: any;

	onMount(async () => {
		const path = window.location.pathname;

		if (path === "/") {
			Component = Home
		} else if (/^\/squad\/[^\/]+\/*?$/.test(path)) {
			Component = Squad
		} else {
			Component = NoMatch
		}
	});

	export let url: string = "";
</script>

<svelte:head>
	{#if import.meta.env.PROD}
	<script defer data-domain={document.location.host} src="https://plausible.joincommunity.xyz/js/script.js"></script>
	{/if}
</svelte:head>

<Router {url}>
	<main class="select-none">
		<Route patth="*"><svelte:component this={Component} /></Route>
		<Route path="/"><svelte:component this={Component} /></Route>
		<Route path="/squad/:slug" let:params>
			<svelte:component this={Component} slug={params.slug} />
		</Route>
	</main>
</Router>
