<script>
    import { onMount } from "svelte";
    import { PRODUCTION_BUILD } from "$/env.js";

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

{#if PRODUCTION_BUILD}
<!-- Nothing here -->
{:else}
<div class="leaderboardSection">
    {#if isDesktop}
        <Desktop />
    {:else}
        <Mobile />
    {/if}
</div>
{/if}

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
