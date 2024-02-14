<script>
    import { onMount, onDestroy } from "svelte";
    import { fetchAndUpdateData } from "../../api.js";
    import { squadData } from "../../store.js";

    export let slug;
    let interval;
    let Hero, Mined, Join;
    const squadDataUrl = `/clicker/profile/team/slug/${slug}?count=1`;

    const fetchData = async (path, store) => {
        await fetchAndUpdateData(path, store, true);
    };

    onMount(async () => {
        Hero = (await import("./elements/Hero.svelte")).default;
        Mined = (await import("./elements/Mined.svelte")).default;
        Join = (await import("./elements/Join.svelte")).default;

        fetchData(squadDataUrl, squadData);
        interval = setInterval(() => {fetchData(squadDataUrl, squadData)}, 15e3);
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div class="container">
    <svelte:component this={Hero} />
    <svelte:component this={Mined} />
    <svelte:component this={Join} />
</div>

<style lang="sass">
    .container
        padding-bottom: 4rem
        width: 100%

</style>
