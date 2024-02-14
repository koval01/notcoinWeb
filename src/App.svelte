<script>
	import { Router, Route } from "svelte-routing";
	import { onMount } from "svelte";

    let Home, Battle, Squad, NoMatch;

    onMount(async () => {
		Home = (await import("./routes/Home.svelte")).default;
		Battle = (await import("./routes/Battle.svelte")).default;
		Squad = (await import("./routes/Squad.svelte")).default;
		NoMatch = (await import("./routes/NoMatch.svelte")).default;
    });

	import { PRODUCTION_BUILD } from "./env.js";

	// block debug menu
	window.addEventListener("contextmenu", function (e) {
		PRODUCTION_BUILD ? e.preventDefault() : void 0;
	});

	export let url = "";
</script>

<svelte:head>
	{#if PRODUCTION_BUILD}
	<script defer data-domain={document.location.host} src="https://plausible.joincommunity.xyz/js/script.js"></script>
	{/if}
</svelte:head>

<Router {url}>
	<main class="noselect">
		<Route patth="*"><svelte:component this={NoMatch} /></Route>
		<Route path="/"><svelte:component this={Home} /></Route>
		<Route path="/battle"><svelte:component this={Battle} /></Route>
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
