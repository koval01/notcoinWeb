<script>
	import Home from "./routes/Home.svelte";
	import Battle from "./routes/Battle.svelte";
	import Squad from "./routes/Squad.svelte";
	import NoMatch from "./routes/NoMatch.svelte";

	import { Router, Route } from "svelte-routing";

	import { PRODUCTION_BUILD, LAST_GIT_COMMIT } from "./env.js";

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
	{@html `<!-- commit ${LAST_GIT_COMMIT} -->`}
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
