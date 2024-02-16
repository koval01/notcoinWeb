<script>
    import { onMount } from "svelte";

    let Desktop, Mobile;

    let isDesktop = false;

    const checkScreenWidth = async () => {
        isDesktop = window.innerWidth >= 890;

        if (isDesktop && !Desktop) {
            Desktop = (await import("./Desktop.svelte")).default; // Dynamically import Desktop component
            return;
        }
        if (!Mobile) Mobile = (await import("./Mobile.svelte")).default;
    }

    window.addEventListener('resize', checkScreenWidth);

    onMount(async () => {
        checkScreenWidth();
    });
</script>

<div class="leaderboardSection">
    {#if isDesktop}
        <svelte:component this={Desktop} />
    {:else}
        <svelte:component this={Mobile} />
    {/if}
</div>

<style lang="sass">
    .leaderboardSection
      display: flex
      gap: 1rem
      margin-top: .5rem
      width: 100%

    @media (min-width: 768px)
      .leaderboardSection
        margin-top: 0

</style>
