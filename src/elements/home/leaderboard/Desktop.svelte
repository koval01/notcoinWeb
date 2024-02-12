<script>
  import Index from "./desktop/Index.svelte";
  import RowTitle from "./desktop/RowTitle.svelte";
  import RowValue from "./desktop/RowValue.svelte";
  import HorizontalLine from "./desktop/HorizontalLine.svelte";

  import { allStatUsers, allStatTeams } from "../../../store.js";
  import { teamLink } from "../../../utils.js";

  let objValues = [[],[]];
  let usersList = [];
  let teamsList = [];

  $: {
      usersList = $allStatUsers.leaderboard;
      teamsList = $allStatTeams.leaderboard;
  }
</script>


<div class="container">
    <div class="thNumber">#</div>
    <h4 class="thTitle">top miners</h4>
    <hr class="hr">
    <!-- Template -->
    {#each usersList as d, i}
      <Index index={i} />
      <RowTitle rowName={d.user?.firstName} avatar={d.avatar} />
      <RowValue objValue={objValues[0][i]} coins={d.totalCoins} />
      <HorizontalLine index={i} />
    {/each}
    <!-- Template end -->
</div>

<div class="container">
    <div class="thNumber">#</div>
    <h4 class="thTitle">top teams</h4>
    <hr class="hr">
    <!-- Template -->
    {#each teamsList as d, i}
      <Index index={i} href={teamLink(d.slug)} />
      <RowTitle rowName={d.name} avatar={d.logo} href={teamLink(d.slug)} />
      <RowValue objValue={objValues[1][i]} coins={d.coins} href={teamLink(d.slug)} />
      <HorizontalLine index={i} />
    {/each}
    <!-- Template end -->
</div>

<style lang="sass">
  .container
    background-color: #ebebf520
    border-radius: .75rem
    width: 100%
    display: grid
    grid-template-columns: auto 1fr auto
    row-gap: .2rem
    column-gap: 1rem
    align-content: start
    z-index: 20
    -webkit-backdrop-filter: blur(5px)
    backdrop-filter: blur(5px)
    line-height: normal
    padding-bottom: 12px

    > .thNumber
      display: flex
      align-items: center
      justify-content: center
      margin-top: 16px
      margin-bottom: 3px
      padding-left: 1rem
      color: #ebebf599
      font-weight: 600
    
    > .thTitle
      color: #ebebf599
      font-weight: 600
      letter-spacing: 4px
      font-size: 12px
      display: flex
      margin-top: 16px
      margin-bottom: 3px
      align-items: center
      text-transform: uppercase

</style>
