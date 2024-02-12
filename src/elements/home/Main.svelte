<script>
    import Hero from "./Hero.svelte";
    import Balance from "./Balance.svelte";
    import Online from "./Online.svelte";
    import Buttons from "./Buttons.svelte";

    import Total from "./total/Main.svelte";
    import Leaderboard from "./leaderboard/Main.svelte";

    import { onMount, onDestroy } from "svelte";
    import { fetchAndUpdateData } from "../../api.js";
    import { stat, allStatUsers, allStatTeams } from "../../store.js";

    const allStatUrl = "/clicker/league/leaderboard/public/%s/silver/all";
    const paths = {
        stat: "/clicker/core/stat",
        allStatUsers: allStatUrl.replace("%s", "user"),
        allStatTeams: allStatUrl.replace("%s", "team")
    };

    const fetchData = async (path, store) => {
        await fetchAndUpdateData(path, store);
    };

    let intervals = [];

    onMount(() => {
        intervals = [
            { path: paths.stat, store: stat },
            { path: paths.allStatUsers, store: allStatUsers },
            { path: paths.allStatTeams, store: allStatTeams }
        ];

        intervals.forEach(({ path, store }) => {
            fetchData(path, store);
            store.intervalId = setInterval(() => fetchData(path, store), 15e3);
        });
    });

    onDestroy(() => {
        intervals.forEach(({ store }) => clearInterval(store.intervalId));
    });
</script>

<div class="wrapper">
    <div class="container">
        <div>
            <Hero />
            <Balance />
            <Online />
            <Buttons />

            <Total />
            <Leaderboard />
        </div>
    </div>
</div>

<style lang="sass">
  div.wrapper
    position: relative
    min-height: 100vh
  
    > div.container
      margin: 0 auto
      max-width: 1040px
      padding: 0 1rem
  
      > div
        padding-bottom: 4rem
        width: 100%
  
</style>
