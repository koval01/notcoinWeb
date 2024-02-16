<script>
  export let teamsDisplay;
</script>

{#if teamsDisplay}
  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="root chevron">
      <path d="M1 1L6 6L1 11" stroke="#C8C7CB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
{:else}
  <div></div>
{/if}

<style lang="sass">
  .root
    display: inline-block
    margin: 0
    vertical-align: top
    font-size: 22px

  .chevron
    margin-left: auto
    min-width: 7px

</style>
