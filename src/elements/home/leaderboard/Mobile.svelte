<script>
    import { FlatButtonContainer, FlatButton } from "../../misc/flatbutton";
    import { Leaderboard } from "../../misc/leaderboard";

    import { allStatUsers, allStatTeams } from "../../../store.js";

    let teamsDisplay = false;

    const updateDisplays = (state) => {
        teamsDisplay = state;
    }

</script>

<div class="mobileContainer">
    <svelte:component this={FlatButtonContainer} bind:activeTab={teamsDisplay}>
        <svelte:component this={FlatButton} isActive={!teamsDisplay} onClick={() => updateDisplays(false)}>Miners</svelte:component>
        <svelte:component this={FlatButton} isActive={teamsDisplay} onClick={() => updateDisplays(true)}>Teams</svelte:component>
    </svelte:component>

    <div class="container">
        {#if teamsDisplay}
            <svelte:component this={Leaderboard} StoreObject={$allStatTeams.leaderboard} teamsDisplay={teamsDisplay}/>
        {:else}
            <svelte:component this={Leaderboard} StoreObject={$allStatUsers.leaderboard} teamsDisplay={teamsDisplay}/>
        {/if}
    </div>
</div>

<style lang="sass">
  .mobileContainer
    width: 100%

  .container
    margin-top: .5rem

</style>
