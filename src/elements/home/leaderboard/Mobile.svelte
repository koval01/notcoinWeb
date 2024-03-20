<script>
    import { FlatButtonContainer, FlatButton } from "../../misc/flatbutton";
    import { Leaderboard } from "../../misc/leaderboard";

    import { allStatUsers, allStatTeams } from "../../../store";

    let teamsDisplay = false;

    const updateDisplays = (state) => {
        teamsDisplay = state;
    }

</script>

<div class="mobileContainer">
    <FlatButtonContainer bind:activeTab={teamsDisplay}>
        <FlatButton isActive={!teamsDisplay} onClick={() => updateDisplays(false)}>Miners</FlatButton>
        <FlatButton isActive={teamsDisplay} onClick={() => updateDisplays(true)}>Teams</FlatButton>
    </FlatButtonContainer>

    <div class="container">
        {#if teamsDisplay}
            <Leaderboard StoreObject={$allStatTeams.leaderboard} teamsDisplay={teamsDisplay}/>
        {:else}
            <Leaderboard StoreObject={$allStatUsers.leaderboard} teamsDisplay={teamsDisplay}/>
        {/if}
    </div>
</div>

<style lang="sass">
  .mobileContainer
    width: 100%

  .container
    margin-top: .5rem

</style>
