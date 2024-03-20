<script>
  import Hint from "./Hint.svelte";
  import { Leaderboard } from "../../misc/leaderboard";

  import { allStatUsers, allStatTeams } from "../../../store";
</script>

<div class="container">
  <div class="list">
    <Hint>top miners</Hint>
    <Leaderboard StoreObject={$allStatUsers.leaderboard} teamsDisplay={false} />
  </div>
  <div class="list">
    <Hint>top teams</Hint>
    <Leaderboard StoreObject={$allStatTeams.leaderboard} teamsDisplay={true} />
  </div>
</div>

<style lang="sass">
  .container
    margin-top: 2rem
    width: 100%
    display: flex
    gap: 1rem

  .list
    width: calc(50% - .5rem)

</style>
