<script>
    import { onMount } from "svelte";

    import Desktop from "./Desktop.svelte";
    import Mobile from "./Mobile.svelte";

    let isDesktop = false;

    const checkScreenWidth = () => {
        isDesktop = window.innerWidth >= 768;
    }

    window.addEventListener('resize', checkScreenWidth);

    onMount(async () => {
        checkScreenWidth();
    });
</script>

<div class="leaderboardSection">
    {#if isDesktop}
        <Desktop />
    {:else}
        <Mobile />
    {/if}
</div>

<style lang="sass">
    .leaderboardSection
      display: flex
      gap: 1rem
      margin-top: .5rem

    @media (min-width: 768px)
      .leaderboardSection
        margin-top: 0
</style>
