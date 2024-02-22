<script>
    import { animateValue } from "../../../utils";

    export let index, objValues, stat;
</script>

<span class="value {index === 0 ? 'totalPlayers' : index === 1 ? 'onlineToday' : 'onlineNow'}" bind:this={objValues[index]}>
    {#if stat.loading}
        <div class="skeleton" style="opacity: 1;">
            <div class="thickLine"></div>
        </div>
    {:else}
        {animateValue(objValues[index], [stat.users, stat.onlineToday, stat.online][index])}
    {/if}
</span>

<style lang="sass">
    .skeleton
      height: 1.3rem

    span
      &.value
        font-variant-numeric: lining-nums tabular-nums
        margin-left: 12px

      &.totalPlayers > .skeleton
        width: 130px

      &.onlineToday > .skeleton
        width: 110px

      &.onlineNow > .skeleton
        width: 90px

    @media (min-width: 768px)
      .skeleton
        height: 2rem

      span
        &.totalPlayers > .skeleton
          width: 160px

        &.onlineToday > .skeleton
          width: 140px

        &.onlineNow > .skeleton
          width: 110px

</style>
