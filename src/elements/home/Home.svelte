<script lang="ts">
    import Stars from "../misc/Stars.svelte";
    import Hero from "./Hero.svelte";
    import Balance from "./Balance.svelte";
    import { Online } from "./online";
    import Buttons from "./Buttons.svelte";
    import { Total } from "./total";
    import { Leaderboard } from "./leaderboard";
    import { onMount } from "svelte";
    import { fetchAndUpdateData } from "../../api";
    import { stat, allStatUsers, allStatTeams } from "../../store";

    const allStatUrl: string = "/clicker/league/leaderboard/public/%s/silver/all";
    const paths: { [key: string]: string } = {
        stat: "/clicker/core/stat",
        allStatUsers: allStatUrl.replace("%s", "user"),
        allStatTeams: allStatUrl.replace("%s", "team")
    };

    const fetchData = async (path: string, store: any) => {
        await fetchAndUpdateData(path, store);
    };

    let intervals: { path: string; store: any }[] = [];

    onMount(async () => {
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
</script>

<div class="relative min-h-screen">
    <div class="my-0 mx-auto py-0 px-4 max-w-[1040px]">
        <div class="pb-16 w-full">
            <Stars count={4} />

            <Hero />
            <Balance />
            <Online />
            <Buttons />

            <Total />
            <Leaderboard />
        </div>
    </div>
</div>
