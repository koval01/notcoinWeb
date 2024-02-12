<script>
    import Hero from "./elements/Hero.svelte";
    import Mined from "./elements/Mined.svelte";
    import Join from "./elements/Join.svelte";

    export let slug;

    console.log(slug);
</script>

<div class="container">
    <Hero />
    <Mined />
    <Join />
</div>

<style lang="sass">
    .container
        padding-bottom: 4rem
        width: 100%

</style>
