<script lang="js">
    import Header from "../elements/Header.svelte";
    import Footer from "../elements/Footer.svelte";

    import { Squad } from "../elements/squad";

    export let slug;
</script>

<!-- Squad -->
    <Header headTitle="Notcoin" />
    <Squad slug={slug} />

    <Footer />
<!-- Squad end -->
