<script>
    import Hero from "./elements/Hero.svelte";
    import Mined from "./elements/Mined.svelte";
    import Join from "./elements/Join.svelte";

    import { onMount, onDestroy } from "svelte";
    import { fetchAndUpdateData } from "../../api.js";
    import { squadData } from "../../store.js";

    export let slug;
    const squadDataUrl = `/clicker/profile/team/slug/${slug}?count=1`;
    let interval;

    const fetchData = async (path, store) => {
        await fetchAndUpdateData(path, store, true);
    };

    onMount(() => {
      fetchData(squadDataUrl, squadData);
      interval = setInterval(() => {fetchData(squadDataUrl, squadData)}, 15e3);
    });

    onDestroy(() => {
        clearInterval(interval);
    });
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
