<script>
	import { Router, Route } from "svelte-routing";
	import { onMount } from "svelte";

	import { PRODUCTION_BUILD, LAST_GIT_COMMIT } from "./env.js";

	let Home, Squad, NoMatch;

	onMount(async () => {
		const path = window.location.pathname;

        if (path === "/") {
            Home = (await import("./routes/Home.svelte")).default;
        }
		// else if (path === "/battle") {
		// 	Battle = (await import("./routes/Battle.svelte")).default;
		// }
		else if (/^\/squad\/[^\/]+\/*?$/.test(path)) {
			Squad = (await import("./routes/Squad.svelte")).default;
		}
        else NoMatch = (await import("./routes/NoMatch.svelte")).default;
    });

	export let url = "";
</script>

<svelte:head>
	{#if PRODUCTION_BUILD}
	<script defer data-domain={document.location.host} src="https://plausible.joincommunity.xyz/js/script.js"></script>
	{/if}
	{@html `<!-- commit ${LAST_GIT_COMMIT} -->`}
</svelte:head>

<Router {url}>
	<main class="noselect">
		<Route patth="*"><svelte:component this={NoMatch} /></Route>
		<Route path="/"><svelte:component this={Home} /></Route>
		<!-- <Route path="/battle"><svelte:component this={Battle} /></Route> -->
		<Route path="/squad/:slug" let:params>
			<svelte:component this={Squad} slug={params.slug} />
		</Route>
	</main>
</Router>

<style lang="sass">
  .noselect
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
  
</style>
