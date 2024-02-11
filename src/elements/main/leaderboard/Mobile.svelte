<script>
    import { FlatButtonContainer, FlatButton } from '../../misc/flatbutton';

    import { allStatUsers, allStatTeams } from "../../../store.js";
    import { getAvatarByName, getAvatarThumb, animateValue } from "../../../utils.js";

    let teamsDisplay = false;
    let objValues = [[],[]];
    let usersList = [];
    let teamsList = [];

    const updateDisplays = (state) => {
        teamsDisplay = state;
    }

    const handleImageError = (event) => {
        event.target.src = getAvatarThumb();
    };

    $: {
        usersList = $allStatUsers.leaderboard;
        teamsList = $allStatTeams.leaderboard;
    }
</script>

<div class="mobileContainer">
    <FlatButtonContainer bind:activeTab={teamsDisplay}>
        <FlatButton isActive={!teamsDisplay} onClick={() => updateDisplays(false)}>Miners</FlatButton>
        <FlatButton isActive={teamsDisplay} onClick={() => updateDisplays(true)}>Teams</FlatButton>
    </FlatButtonContainer>

    <div class="container">
        {#each teamsDisplay ? teamsList : usersList as d, i}
            <div class="index">
                {#if i < 3}
                    <span class="text-medal">{['🥇','🥈','🥉'][i]}</span>
                {:else}
                    <span>{i+1}</span>
                {/if}
            </div>
            <img 
                src={teamsDisplay ? d.logo ? d.logo : getAvatarByName(d.name) : d.avatar ? d.avatar : getAvatarByName(d.user?.firstName)} 
                alt="avatar" width="40" height="40" class="avatar" draggable="false" on:error={handleImageError}
            >
            <a href={"/"+d.slug ? d.slug : ""}>
                <div class="title">{teamsDisplay ? d.name : d.user?.firstName}</div>
                {#if teamsDisplay}
                    <div class="coins">
                        <img 
                            src="/images/penny.webp"
                            alt="penny" width="20" height="20" draggable="false"
                        >
                        <span class="rowCoins" bind:this={objValues[0][i]}>{animateValue(objValues[0][i], d.coins, 2e3)}</span>
                    </div>
                {:else}
                    <div class="coins">
                        <img 
                            src="/images/penny.webp"
                            alt="penny" width="20" height="20" draggable="false"
                        >
                        <span class="rowCoins" bind:this={objValues[1][i]}>{animateValue(objValues[1][i], d.totalCoins, 2e3)}</span>
                    </div>
                {/if}
            </a>
            {#if teamsDisplay}
                <img 
                    src="/images/chevron.svg" 
                    alt="chevron" class="chevron"
                    draggable="false"
                >
            {:else}
                <div></div>
            {/if}
        {/each}
    </div>
</div>

<style lang="sass">
  .mobileContainer
    width: 100%

  .container
    background-color: #ebebf520
    border-radius: .75rem
    width: 100%
    display: grid
    grid-template-columns: auto auto 1fr auto
    gap: 1rem
    padding: 1rem
    margin-top: .5rem
    align-items: center
    z-index: 20
    -webkit-backdrop-filter: blur(5px)
    backdrop-filter: blur(5px)

    > .index
        justify-self: center

        > .text-medal
          font-size: 28px

    > .chevron
        transform: rotate(180deg)
        height: 18px
        opacity: .3
    
    > .avatar
      width: 48px
      height: 48px
      min-width: 48px
      border-radius: 50%

    > a
      > .title
        overflow: hidden
        text-wrap: nowrap
        text-overflow: ellipsis
        max-width: 200px
    
      > .coins
        display: flex
        flex-direction: row
        align-items: center
        gap: .25rem

        > .rowCoins
          color: #ffffffbf

</style>