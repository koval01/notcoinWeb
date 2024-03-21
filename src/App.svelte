<script lang="ts">
	import { Router, Route } from "svelte-routing";
	import { onMount } from "svelte";

	let Home: any, Squad: any, NoMatch: any;

	onMount(async () => {
		const path = window.location.pathname;

		if (path === "/") {
			Home = (await import("./routes/Home.svelte")).default;
		} else if (/^\/squad\/[^\/]+\/*?$/.test(path)) {
			Squad = (await import("./routes/Squad.svelte")).default;
		} else {
			NoMatch = (await import("./routes/NoMatch.svelte")).default;
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
		<Route patth="*"><svelte:component this={NoMatch} /></Route>
		<Route path="/"><svelte:component this={Home} /></Route>
		<Route path="/squad/:slug" let:params>
			<svelte:component this={Squad} slug={params.slug} />
		</Route>
	</main>
</Router>
