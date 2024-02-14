<script>
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

    let Stars, Hero, Balance, Online, Buttons, Total, Leaderboard;

    onMount(async () => {
        Stars = (await import("../misc/Stars.svelte")).default;

        Hero = (await import("./Hero.svelte")).default;
        Balance = (await import("./Balance.svelte")).default;
        Online = (await import("./Online.svelte")).default;
        Buttons = (await import("./Buttons.svelte")).default;

        Total = (await import("./total/Main.svelte")).default;
        Leaderboard = (await import("./leaderboard/Main.svelte")).default;

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
            <svelte:component this={Stars} count={12} />

            <svelte:component this={Hero} />
            <svelte:component this={Balance} />
            <svelte:component this={Online} />
            <svelte:component this={Buttons} />

            <svelte:component this={Total} />
            <svelte:component this={Leaderboard} />
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
