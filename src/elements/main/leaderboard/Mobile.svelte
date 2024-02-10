<script>
    import { FlatButtonContainer, FlatButton } from '../../misc/flatbutton';

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
</div>

<style lang="sass">
  .mobileContainer
    width: 100%

</style>