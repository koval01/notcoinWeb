<script>
    import Stars from "../elements/misc/Stars.svelte";
    import Header from "../elements/Header.svelte";
    import Squad from "../elements/squad/Main.svelte";
    import Footer from "../elements/Footer.svelte";

    export let slug;
</script>

<!-- Squad -->
    <Stars count={8} />

    <Header headTitle="Notcoin" />
    <Squad slug={slug} />

    <Footer />
<!-- Squad end -->
