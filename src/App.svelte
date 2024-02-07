<script>
	import SplashScreen from './SplashScreen.svelte';

	import Stars from './elements/Stars.svelte';

	import Header from './elements/Header.svelte';
	import Main from './elements/main/Main.svelte';
	import Footer from './elements/Footer.svelte';

	import { onMount } from 'svelte';

	// block debug menu
	window.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

	// block zoom on desktop
	document.body.addEventListener('wheel', function(e) {
		if (e.ctrlKey) {
			e.preventDefault();
		}
	}, { passive: false });

	let showSplash = true;

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

<style>
	.noselect {
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none;   /* Safari */
		-khtml-user-select: none;    /* Konqueror HTML */
		-moz-user-select: none;      /* Old versions of Firefox */
		-ms-user-select: none;       /* Internet Explorer/Edge */
		user-select: none;           /* Non-prefixed version, currently
										supported by Chrome, Edge, Opera and Firefox */
	}
</style>
  