<script>
    import { onMount } from "svelte";

    let Desktop, Mobile;

    onMount(async () => {
        const [DesktopModule, MobileModule] = await Promise.all([
            import("./Desktop.svelte"),
            import("./Mobile.svelte")
        ]);

        Desktop = DesktopModule.default;
        Mobile = MobileModule.default;
    });

    let isDesktop = false;

    const checkScreenWidth = () => {
        isDesktop = window.innerWidth >= 890;
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
