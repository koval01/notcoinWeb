<script>
    import { onMount } from "svelte";

    let Battle;

    onMount(async () => {
        Battle = (await import("../elements/battle/Main.svelte")).default;
    });
</script>

<!-- Battle -->
    <svelte:component this={Battle} />
<!-- Battle end -->
