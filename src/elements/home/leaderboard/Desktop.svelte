<script lang="js">
  import Hint from "./Hint.svelte";
  import { Leaderboard } from "../../misc/leaderboard";

  import { allStatUsers, allStatTeams } from "../../../store";
</script>

<div class="mt-8 w-full flex gap-4">
  <div class="list w-[calc(50%-.5rem)]">
    <Hint>top miners</Hint>
    <Leaderboard StoreObject={$allStatUsers.leaderboard} teamsDisplay={false} />
  </div>
  <div class="list w-[calc(50%-.5rem)]">
    <Hint>top teams</Hint>
    <Leaderboard StoreObject={$allStatTeams.leaderboard} teamsDisplay={true} />
  </div>
</div>
