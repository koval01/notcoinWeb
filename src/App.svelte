<script>
	import { Router, Route } from "svelte-routing";

	import Home from "./routes/Home.svelte";
	import Battle from "./routes/Battle.svelte";

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
		<Route path="/"><Home /></Route>
		<Route path="/battle"><Battle /></Route>
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
