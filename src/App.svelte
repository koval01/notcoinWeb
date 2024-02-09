<script>
	import Stars from "./elements/Stars.svelte";

	import Header from "./elements/Header.svelte";
	import Main from "./elements/main/Main.svelte";
	import Footer from "./elements/Footer.svelte";

	import { PRODUCTION_BUILD } from "./env.js";

	// block debug menu
	window.addEventListener("contextmenu", function (e) {
		PRODUCTION_BUILD ? e.preventDefault() : void 0;
	});
</script>

<svelte:head>
	{#if PRODUCTION_BUILD}
	<script defer data-domain={document.location.host} src="https://plausible.joincommunity.xyz/js/script.js"></script>
	{/if}
</svelte:head>

<main class="noselect">
	<Stars />

	<Header />
	<Main />
	<Footer />
</main>

<style lang="sass">
  .noselect
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
  
</style>
