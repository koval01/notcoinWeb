<script>
    export let index;
</script>

<div class="index">
    {#if index < 3}
        <span class="text-medal">{['🥇','🥈','🥉'][index]}</span>
    {:else}
        <span>{index + 1}</span>
    {/if}
</div>

<style lang="sass">
  .index
    justify-self: center

    > .text-medal
      font-size: 28px

</style>
