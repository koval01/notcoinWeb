<script>
    export let index;
</script>

<div class="prefix">
    {#if index < 3}
        <span class="medal">{['🥇','🥈','🥉'][index]}</span>
    {:else}
        <span>{index + 1}</span>
    {/if}
</div>

<style lang="sass">
  .prefix
    min-width: 32px
    height: 32px
    margin-right: 10px
    display: flex
    align-items: center
    justify-content: center
    align-self: center
    font-size: 15px
    flex-shrink: 0

    > .medal
      font-size: 28px

</style>
