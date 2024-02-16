<script>
    import Stars from '../misc/Stars.svelte';
    import Container from './Container.svelte';

    export let slug;
</script>

<main class="wrapper">
    <div class="container">
        <svelte:component this={Stars} count={6} />
        <svelte:component this={Container} slug={slug} />
    </div>
</main>

<style lang="sass">
    .wrapper
        position: relative
        min-height: 100vh

    .container
        margin: 0 auto
        max-width: 1040px
        padding: 0 1rem

</style>
