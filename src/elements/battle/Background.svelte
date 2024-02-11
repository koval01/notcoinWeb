<div class="background">
    <div class="layer theme-battle"></div>
    <div class="layer shadow"></div>
</div>

<style lang="sass">
  .background
    position: absolute
    z-index: 1
    height: 100%
    left: -10px
    right: -10px
    top: -10px
    padding: 0
    will-change: opacity
    display: flex
    flex-direction: row

  .layer
    position: absolute
    z-index: 1
    width: 100%
    height: 100%
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-size: 100%
    background-position: center top
    background-repeat: no-repeat
    transition: opacity .35s ease
    filter: blur(5px)
    -webkit-filter: blur(5px)

  .shadow
    opacity: 0
    transition: none
    will-change: opacity

  .theme-battle
    background-image: url(/images/bg-battle.webp)

</style>