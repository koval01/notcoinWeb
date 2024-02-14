<script>
    import { onMount } from "svelte";

    let Header, Squad, Footer;

    onMount(async() => {
        Header = (await import("../elements/Header.svelte")).default;
        Squad = (await import("../elements/squad/Main.svelte")).default;
        Footer = (await import("../elements/Footer.svelte")).default;
    });

    export let slug;
</script>

<!-- Squad -->
    <svelte:component this={Header} headTitle="Notcoin" />
    <svelte:component this={Squad} slug={slug} />

    <svelte:component this={Footer}/>
<!-- Squad end -->
