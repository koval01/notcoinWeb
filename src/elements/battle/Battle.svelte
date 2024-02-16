<script>
    import Background from "./Background.svelte";

    import { onMount, onDestroy } from "svelte";
    import { fetchAndUpdateData } from "../../api.js";
    import { battleRoyaleStat } from "../../store.js";

    const battleRoyaleStatUrl = "/clicker/battle";
    let interval;

    const fetchData = async (path, store) => {
        await fetchAndUpdateData(path, store);
    };

    let Leaderboard;

    onMount(async () => {
      const [LeaderboardModule] = await Promise.all([
          import("./Leaderboard.svelte")
      ]);

      Leaderboard = LeaderboardModule.default;

      fetchData(battleRoyaleStatUrl, battleRoyaleStat);
      interval = setInterval(() => {fetchData(battleRoyaleStatUrl, battleRoyaleStat)}, 15e3);
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div class="root page">
    <svelte:component this={Background} />
    <svelte:component this={Leaderboard} />
</div>

<style lang="sass">
  .root
    height: 100vh
    overflow-y: auto
    overflow-x: hidden
    padding-left: 16px
    padding-right: 16px
    padding-top: 16px
    user-select: none
    -webkit-touch-callout: none
    -webkit-user-select: none
  
  .page
    color: #fff
    flex-direction: column
    height: 100vh
    position: relative
    display: flex
    background: #000
  
</style>
