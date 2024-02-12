<script>
    import { FlatButtonContainer, FlatButton } from '../../misc/flatbutton';

    import Index from './mobile/Index.svelte';
    import Avatar from './mobile/Avatar.svelte';
    import Chevron from './mobile/Chevron.svelte';
    import CoinsContainer from './mobile/CoinsContainer.svelte';

    import { allStatUsers, allStatTeams } from "../../../store.js";

    let teamsDisplay = false;
    let objValues = [[],[]];
    let usersList = [];
    let teamsList = [];

    const updateDisplays = (state) => {
        teamsDisplay = state;
    }

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
            <Index index={i} />
            <Avatar teamsDisplay={teamsDisplay} d={d} />
            <CoinsContainer index={i} teamsDisplay={teamsDisplay} objValues={objValues} d={d} />
            <Chevron teamsDisplay={teamsDisplay} d={d} />
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

</style>
