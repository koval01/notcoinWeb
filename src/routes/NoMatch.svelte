<script>
    import { onMount } from "svelte";

    let NoMatch;

    onMount(async () => {
        NoMatch = (await import("../elements/NoMatch.svelte")).default;
    });
</script>

<!-- NoMatch -->
    <svelte:component this={NoMatch} />
<!-- NoMatch end -->
