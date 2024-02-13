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
        {animateValue(objValues[index], [stat.users, stat.onlineToday, stat.online][index], 2e3)}
    {/if}
</span>

<style lang="sass">
    span
      &.value
        font-variant-numeric: lining-nums tabular-nums
        margin-left: 12px

      &.value > .skeleton
        height: 1.3rem

      &.value.totalPlayers > .skeleton
        width: 130px

      &.value.onlineToday > .skeleton
        width: 110px

      &.value.onlineNow > .skeleton
        width: 90px

    @media (min-width: 768px)
      span
        &.value > .skeleton
          height: 2rem

        &.value.totalPlayers > .skeleton
          width: 160px

        &.value.onlineToday > .skeleton
          width: 140px

        &.value.onlineNow > .skeleton
          width: 110px

</style>
