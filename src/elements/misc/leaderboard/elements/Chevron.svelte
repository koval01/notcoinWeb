<script lang="ts">
  export let teamsDisplay: boolean;
</script>

{#if teamsDisplay}
  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block m-0 ml-auto min-w-[7px] align-top text-[22px]">
      <path d="M1 1L6 6L1 11" stroke="#C8C7CB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
{:else}
  <div></div>
{/if}
