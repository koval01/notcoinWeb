<script>
    import { onMount } from 'svelte';
    
    let Stars, Container;
    export let slug;

    onMount(async () => {
        const moduleStars = await import('../misc/Stars.svelte');
        const moduleContainer = await import('./Container.svelte');
        
        Stars = moduleStars.default;
        Container = moduleContainer.default;
    });
</script>

<main class="wrapper">
    <div class="container">
        {#if Stars && Container}
            <Stars count={12} />
            <Container slug={slug} />
        {/if}
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
