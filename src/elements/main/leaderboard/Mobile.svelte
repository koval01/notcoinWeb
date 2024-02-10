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

    <div class="container">
        <div class="index"><span class="text-medal">🥇</span></div>
        <img src="https://ui-avatars.com/api/?name=Dyorist&amp;background=NaN&amp;color=fff" alt="avatar" width="40" height="40" class="avatar">
        <a href="/">
            <div class="title">Dyorist</div>
            <div class="coins">
                <img src="https://cdn.joincommunity.xyz/clicker/penny.png" alt="penny" width="20" height="20">
                <span class="rowCoins">34,895,807</span>
            </div>
        </a>
        <div></div>
        <div class="index"><span class="text-medal">🥈</span></div>
        <img src="https://ui-avatars.com/api/?name=https%3A%2F%2Ft.me%2FDyoristN&amp;background=NaN&amp;color=fff" alt="avatar" width="40" height="40" class="avatar">
        <a href="/">
            <div class="title">https://t.me/DyoristN</div>
            <div class="coins">
                <img src="https://cdn.joincommunity.xyz/clicker/penny.png" alt="penny" width="20" height="20">
                <span class="rowCoins">31,969,810</span>
            </div>
        </a>
        <div></div>
        <div class="index"><span class="text-medal">🥉</span></div>
        <img src="https://ui-avatars.com/api/?name=mbstr&amp;background=NaN&amp;color=fff" alt="avatar" width="40" height="40" class="avatar">
        <a href="/">
            <div class="title">mbstr</div>
            <div class="coins">
                <img src="https://cdn.joincommunity.xyz/clicker/penny.png" alt="penny" width="20" height="20">
                <span class="rowCoins">28,438,567</span>
            </div>
        </a>
        <div></div>
        <div class="index"><span>4</span></div>
        <img src="https://ui-avatars.com/api/?name=Savva&amp;background=NaN&amp;color=fff" alt="avatar" width="40" height="40" class="avatar">
        <a href="/">
            <div class="title">Savva</div>
            <div class="coins">
                <img src="https://cdn.joincommunity.xyz/clicker/penny.png" alt="penny" width="20" height="20">
                <span class="rowCoins">28,417,905</span>
            </div>
        </a>
        <div></div>
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