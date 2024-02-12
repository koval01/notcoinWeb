<script>
    export let index;
</script>

{#if index < 99}
    <hr class="hr">
{/if}

<style lang="sass">
  .hr
    background-color: #ffffff1a
    height: 1px
    grid-column: span 2/span 2
    grid-column-start: 2
    border: none
    width: 100%

</style>
