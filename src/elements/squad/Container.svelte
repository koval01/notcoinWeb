<script lang="ts">
    import Hero from "./elements/Hero.svelte";
    import Mined from "./elements/Mined.svelte";
    import Join from "./elements/Join.svelte";

    import { onMount } from "svelte";
    import { fetchAndUpdateData } from "../../api";
    import { squadData } from "../../store";

    export let slug: string;
    let interval: ReturnType<typeof setInterval>;
    const squadDataUrl: string = `/clicker/profile/team/slug/${slug}?count=1`;

    const fetchData = async (path: string, store: typeof squadData): Promise<void> => {
        await fetchAndUpdateData(path, store, true);
    };

    onMount(async () => {
        fetchData(squadDataUrl, squadData);
        interval = setInterval(() => { fetchData(squadDataUrl, squadData); }, 15e3);
    });
</script>

<div class="pb-16 w-full">
    <Hero />
    <Mined />
    <Join />
</div>
