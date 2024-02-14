<script>
  import { allStatUsers, allStatTeams } from "../../../store.js";

  import { onMount } from "svelte";

  let Hint, Leaderboard;

  onMount(async () => {
    Hint = (await import("./Hint.svelte")).default;

    import("../../misc/leaderboard").then(module => {
        Leaderboard = module.Leaderboard;
    });
  });
</script>

<div class="container">
  <div class="list">
    <svelte:component this={Hint}>top miners</svelte:component>
    <svelte:component this={Leaderboard} StoreObject={$allStatUsers.leaderboard} teamsDisplay={false} />
  </div>
  <div class="list">
    <svelte:component this={Hint}>top teams</svelte:component>
    <svelte:component this={Leaderboard} StoreObject={$allStatTeams.leaderboard} teamsDisplay={true} />
  </div>
</div>

<style lang="sass">
  .container
    margin-top: 2rem
    width: 100%
    display: flex
    gap: 1rem

    > .list
      width: calc(50% - .5rem)

</style>
