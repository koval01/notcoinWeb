<script>
    import Stars from "../elements/Stars.svelte";
    import Header from "../elements/Header.svelte";
    import Squad from "../elements/squad/Main.svelte";
    import Footer from "../elements/Footer.svelte";

    export let slug;
</script>

<!-- Squad -->
    <Stars />

    <Header headTitle="Notcoin" />
    <Squad slug={slug} />

    <Footer />
<!-- Squad end -->
