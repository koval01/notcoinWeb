<script lang="ts">
    export let index: number;
</script>

<div class="prefix">
    {#if index < 3}
        <span class="text-[24px]">{index >= 0 ? ['🥇','🥈','🥉'][index] : '👑'}</span>
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

</style>
