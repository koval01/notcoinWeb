<script>
    import { onMount } from "svelte";

    let Header, Main, Footer;

    onMount(async () => {
        Header = (await import("../elements/Header.svelte")).default;
        Main = (await import("../elements/home/Main.svelte")).default;
        Footer = (await import("../elements/Footer.svelte")).default;
    });
</script>

<!-- Home -->
    <svelte:component this={Header} />
    <svelte:component this={Main} />
    <svelte:component this={Footer} />
<!-- Home end -->
