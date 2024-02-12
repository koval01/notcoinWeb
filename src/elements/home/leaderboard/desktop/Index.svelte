<script>
    export let index, href;
</script>

<a class="rowIndex" href={href}>
    {#if index < 3}
        <span class="text-medal">{['🥇','🥈','🥉'][index]}</span>
    {:else}
        <span>{index + 1}</span>
    {/if}
</a>

<style lang="sass">
  .rowIndex
    display: flex
    align-items: center
    justify-content: center
    padding-left: 1rem

    > .text-medal
      font-size: 28px

</style>
