<script>
	import { Router, Route } from "svelte-routing";
	import { onMount } from "svelte";

    let Home, Battle, Squad, NoMatch;

    onMount(async () => {
		const [HomeModule, BattleModule, SquadModule, NoMatchModule] = await Promise.all([
			import("./routes/Home.svelte"),
			import("./routes/Battle.svelte"),
			import("./routes/Squad.svelte"),
			import("./routes/NoMatch.svelte")
		]);

		Home = HomeModule.default;
		Battle = BattleModule.default;
		Squad = SquadModule.default;
		NoMatch = NoMatchModule.default;
	});

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
