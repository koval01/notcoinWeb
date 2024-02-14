<script>
    import { onMount } from 'svelte';

    let Stars, Container;
    export let slug;

    onMount(async () => {
        const [StarsModule, ContainerModule] = await Promise.all([
            import("../misc/Stars.svelte"),
            import("./Container.svelte")
        ]);

        Stars = StarsModule.default;
        Container = ContainerModule.default;
    });
</script>

<main class="wrapper">
    <div class="container">
        <svelte:component this={Stars} count={12} />
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
