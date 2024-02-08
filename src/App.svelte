<script>
	import SplashScreen from "./SplashScreen.svelte";

	import Stars from "./elements/Stars.svelte";

	import Header from "./elements/Header.svelte";
	import Main from "./elements/main/Main.svelte";
	import Footer from "./elements/Footer.svelte";

	import { PRODUCTION_BUILD } from './main.js';
	import { onMount } from "svelte";

	// block debug menu
	window.addEventListener("contextmenu", function (e) {
		PRODUCTION_BUILD ? e.preventDefault() : void 0;
	});

	let showSplash = PRODUCTION_BUILD;

	onMount(() => {
		setTimeout(() => {
			showSplash = false;
		}, 4e3);
	});
</script>

<SplashScreen show={showSplash} />
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
