<script>
    import Hero from "./Hero.svelte";
    import Balance from "./Balance.svelte";
    import Online from "./Online.svelte";
    import Buttons from "./Buttons.svelte";

    import Total from "./Total.svelte";

    import { onMount, onDestroy } from "svelte";
    import { fetchData } from "../../api.js";
    import { stat, allStatUsers } from "../../store.js";

    let intervalStat;
    let intervalAllStatUsers;

    const fetchAndUpdateData = async (endpoint, store) => {
        store.update((prev) => ({ ...prev }));

        try {
            const data = await fetchData(endpoint, {
                _convertStringToNumber: true,
            });
            store.set({ ...data, loading: false });
        } catch (error) {
            setTimeout(() => fetchAndUpdateData(endpoint, store), 1e3);
        }
    };

    onMount(async () => {
        fetchAndUpdateData("/clicker/core/stat", stat);
        fetchAndUpdateData(
            "/clicker/league/leaderboard/public/user/silver/all",
            allStatUsers,
        );

        intervalStat = setInterval(
            () => fetchAndUpdateData("/clicker/core/stat", stat),
            15e3,
        );
        intervalAllStatUsers = setInterval(
            () =>
                fetchAndUpdateData(
                    "/clicker/league/leaderboard/public/user/silver/all",
                    allStatUsers,
                ),
            15e3,
        );
    });

    onDestroy(() => {
        clearInterval(intervalStat);
        clearInterval(intervalAllStatUsers);
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
