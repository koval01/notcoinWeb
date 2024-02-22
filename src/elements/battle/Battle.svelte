<script>
    import Background from "./Background.svelte";
    import Leaderboard from "./Leaderboard.svelte";

    import { onMount } from "svelte";
    import { fetchAndUpdateData } from "../../api.js";
    import { battleRoyaleStat } from "../../store.js";

    const battleRoyaleStatUrl = "/clicker/battle";
    let interval;

    const fetchData = async (path, store) => {
        await fetchAndUpdateData(path, store);
    };

    onMount(async () => {
      fetchData(battleRoyaleStatUrl, battleRoyaleStat);
      interval = setInterval(() => {fetchData(battleRoyaleStatUrl, battleRoyaleStat)}, 15e3);
    });
</script>

<div class="root page">
    <Background />
    <Leaderboard />
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
