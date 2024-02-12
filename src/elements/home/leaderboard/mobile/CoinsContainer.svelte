<script>
    import Coins from "./Coins.svelte";
    import { teamLink } from "../../../../utils.js";

    export let index, teamsDisplay, objValues, d;
</script>

<a href={teamLink(d.slug)}>
    <div class="title">{teamsDisplay ? d.name : d.user?.firstName}</div>
    {#if teamsDisplay}
        <Coins objValue={objValues[0][index]} coins={d.coins} />
    {:else}
        <Coins objValue={objValues[1][index]} coins={d.totalCoins} />
    {/if}
</a>

<style lang="sass">
  a
    > .title
      overflow: hidden
      text-wrap: nowrap
      text-overflow: ellipsis
      max-width: 200px

</style>
