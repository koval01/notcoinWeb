<script>
    import Header from "../elements/Header.svelte";
    import Footer from "../elements/Footer.svelte";

    import { Squad } from "../elements/squad";

    export let slug;
</script>

<!-- Squad -->
    <svelte:component this={Header} headTitle="Notcoin" />
    <svelte:component this={Squad} slug={slug} />

    <svelte:component this={Footer}/>
<!-- Squad end -->
