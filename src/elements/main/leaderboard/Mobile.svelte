<script>
    let teamsDisplay = false;

    const updateDisplays = (state) => {
        teamsDisplay = state;
    }
</script>

<div class="mobileContainer">
    <div class="solidRoot">
        <button class="tabButton flatTabButton {teamsDisplay ? '' : 'isActive'}" type="button" role="tab" aria-selected={!teamsDisplay} tabindex={!teamsDisplay ? 0 : -1} on:click={() => updateDisplays(false)}>Miners</button>
        <button class="tabButton flatTabButton {teamsDisplay ? 'isActive' : ''}" type="button" role="tab" aria-selected={teamsDisplay} tabindex={teamsDisplay ? 0 : -1} on:click={() => updateDisplays(true)}>Teams</button>
        <div class="activeBar" style="transform: translateX({teamsDisplay ? '100%' : '0'}); width: calc(50% - 4px);"></div>
    </div>
</div>

<style lang="sass">
.mobileContainer
  width: 100%

.solidRoot
  position: relative
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  overflow: hidden
  padding: 4px
  min-height: 48px
  border-radius: 14px
  background: #ffffff1f
  z-index: 30
  -webkit-backdrop-filter: blur(5px)
  backdrop-filter: blur(5px)

.tabButton
  font-weight: 590
  line-height: 22px
  color: #fff

.flatTabButton
  -webkit-user-select: none
  user-select: none
  outline: 0px
  margin: 0
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none
  cursor: pointer
  overflow: hidden
  display: flex
  align-items: center
  justify-content: center
  -webkit-tap-highlight-color: transparent
  flex-grow: 1
  border: none
  height: 28px
  background-color: transparent
  position: relative
  z-index: 10
  padding: 0
  width: 100%
  font-weight: 600
  line-height: 22px
  transition: color .2s ease

  &.isActive
    color: #000

.solidRoot .activeBar
  position: absolute
  pointer-events: none
  left: 4px
  right: 4px
  top: 4px
  bottom: 4px
  transition: transform .3s ease
  border-radius: 10px
  background: #fff
  box-shadow: 0 2px 10px #00001c0f,0 0 1px #00001c14
  border: 0.5px solid rgba(0, 0, 0, 0.04)

</style>