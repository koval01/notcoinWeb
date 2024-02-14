<script>
    import { onMount } from "svelte";

    let NoMatch;

    onMount(async () => {
        const NoMatchModule = await import("../elements/NoMatch.svelte");
        NoMatch = NoMatchModule.default;
    });
</script>

<!-- NoMatch -->
    <svelte:component this={NoMatch} />
<!-- NoMatch end -->
