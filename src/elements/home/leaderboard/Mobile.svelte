<script lang="ts">
    import { FlatButtonContainer, FlatButton } from "../../misc/flatbutton";
    import { Leaderboard } from "../../misc/leaderboard";
    import { allStatUsers, allStatTeams } from "../../../store";

    let teamsDisplay: boolean = false;

    const updateDisplays = (state: boolean): void => {
        teamsDisplay = state;
    };
</script>

<div class="w-full">
    <FlatButtonContainer bind:activeTab={teamsDisplay}>
        <FlatButton isActive={!teamsDisplay} onClick={() => updateDisplays(false)}>Miners</FlatButton>
        <FlatButton isActive={teamsDisplay} onClick={() => updateDisplays(true)}>Teams</FlatButton>
    </FlatButtonContainer>

    <div class="mt-2">
        {#if teamsDisplay}
            <Leaderboard StoreObject={$allStatTeams.leaderboard} teamsDisplay={teamsDisplay}/>
        {:else}
            <Leaderboard StoreObject={$allStatUsers.leaderboard} teamsDisplay={teamsDisplay}/>
        {/if}
    </div>
</div>
