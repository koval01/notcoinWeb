<div class="iconHolder">
  <img
      class="penny1"
      src="/images/penny.webp"
      draggable="false"
      alt="burned icon"
  />
  <img
      class="penny2"
      src="/images/penny.webp"
      draggable="false"
      alt="burned icon"
  />
  <img
      class="penny3"
      src="/images/penny.webp"
      draggable="false"
      alt="burned icon"
  />
</div>

<style lang="sass">
  div.iconHolder
    position: absolute
    height: 100%
    width: 100%
    display: none

    *
      position: absolute

  img
    &.penny1
      width: 44px
      top: -1.5rem
      left: 25rem
  
    &.penny2
      width: 22px
      top: 4rem
      left: 27rem
  
    &.penny3
      width: 27px
      top: 6rem
      left: 24rem

  @media (min-width: 1000px)
    div.iconHolder
      display: initial

</style>
