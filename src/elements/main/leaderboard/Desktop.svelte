<script>
  import { CDN_HOST } from "../../../env.js";

  import { allStatUsers, allStatTeams } from "../../../store.js";
  import { getAvatarByName, getAvatarThumb, animateValue } from "../../../utils.js";

  let objValues = [[],[]];
  let usersList = [];
  let teamsList = [];

  const handleImageError = (event) => {
      event.target.src = getAvatarThumb();
  };

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
      <div class="rowIndex">
        {#if i < 3}
            <span class="text-medal">{['🥇','🥈','🥉'][i]}</span>
        {:else}
            <span>{i+1}</span>
        {/if}
      </div>
      <div class="rowTitle">
        <img 
          src={d.avatar ? d.avatar : getAvatarByName(d.user?.firstName)} 
          alt="avatar" width="40" height="40" class="avatar" on:error={handleImageError}
        >
        <div class="rowName">{d.user?.firstName}</div>
      </div>
      <div class="rowValue">
        <img src={`${CDN_HOST}/clicker/penny.png`} alt="penny" width="20" height="20">
        <span class="rowCoins" bind:this={objValues[0][i]}>
          {animateValue(objValues[0][i], d.totalCoins, 2e3)}
        </span>
      </div>
      <hr class="hr">
    {/each}
    <!-- Template end -->
</div>
<div class="container">
    <div class="thNumber">#</div>
    <h4 class="thTitle">top teams</h4>
    <hr class="hr">
    <!-- Template -->
    {#each teamsList as d, i}
      <a class="rowIndex" href={`/${d.slug ? d.slug : ""}`}>
        {#if i < 3}
            <span class="text-medal">{['🥇','🥈','🥉'][i]}</span>
        {:else}
            <span>{i+1}</span>
        {/if}
      </a>
      <a class="rowTitle" href={`/${d.slug ? d.slug : ""}`}>
        <img 
          src={d.logo ? d.logo : getAvatarByName(d.name)} 
          alt="avatar" width="40" height="40" class="avatar" on:error={handleImageError}
        >
        <div class="rowName">{d.name}</div>
      </a>
      <a class="rowValue" href={`/${d.slug ? d.slug : ""}`}>
        <img src={`${CDN_HOST}/clicker/penny.png`} alt="penny" width="20" height="20">
        <span class="rowCoins" bind:this={objValues[1][i]}>
          {animateValue(objValues[1][i], d.coins, 2e3)}
        </span>
      </a>
      <hr class="hr">
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
    
    > .hr
      background-color: #ffffff1a
      height: 1px
      grid-column: span 2/span 2
      grid-column-start: 2
      border: none
      width: 100%

    > .rowIndex
      display: flex
      align-items: center
      justify-content: center
      padding-left: 1rem

      > .text-medal
        font-size: 28px

    > .rowTitle
      display: flex
      align-items: center
      gap: .75rem

      > .avatar
        width: 40px
        min-width: 40px
        height: 40px
        border-radius: 50%

      > .rowName
        font-weight: 500
        width: 100%
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
        max-width: 120px
    
    > .rowValue
      padding-right: 1.5rem
      display: flex
      align-items: center
      justify-content: flex-end
      gap: 6px
      font-weight: 500

      > .rowCoins
        font-variant-numeric: lining-nums tabular-nums

</style>
