<script>
    import Header from "../elements/Header.svelte";
    import Footer from "../elements/Footer.svelte";

    import { Home } from "../elements/home";
</script>

<!-- Home -->
    <svelte:component this={Header} />
    <svelte:component this={Home} />
    <svelte:component this={Footer} />
<!-- Home end -->
