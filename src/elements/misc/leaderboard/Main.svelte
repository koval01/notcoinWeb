<script>
    import { onMount } from "svelte";

    let List;

    onMount(async () => {
        const ListModule = await import("./List.svelte");
        List = ListModule.default;
    });

    export let StoreObject, teamsDisplay;
</script>

<div class="leaderboard">
  <div class="listInner">
      <div class="padding-0 direction-column willChange">
          <svelte:component this={List} StoreObject={StoreObject} teamsDisplay={teamsDisplay} />
      </div>
  </div>
</div>

<style lang="sass">
  .padding-0
    padding: 0

  .direction-column
    display: flex
    flex-direction: column

  .leaderboard
    border-radius: 20px
    background: rgba(255, 255, 255, 0.12)
    backdrop-filter: blur(24px)
    -webkit-backdrop-filter: blur(24px)

  .listInner
    padding: 12px 12px 16px

  .willChange
    will-change: opacity

</style>
