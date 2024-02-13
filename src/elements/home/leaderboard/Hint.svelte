<div class="hint">
    <div class="thNumber">#</div>
    <h4 class="thTitle">
        <slot></slot>
    </h4>
</div>

<style lang="sass">
  .hint
    background-color: rgba(255, 255, 255, .12)
    border-radius: .75rem
    width: 100%
    display: grid
    grid-template-columns: auto 1fr auto
    row-gap: .2rem
    column-gap: 1rem
    align-content: start
    z-index: 20
    -webkit-backdrop-filter: blur(5px)
    backdrop-filter: blur(5px)
    line-height: normal
    padding-bottom: 12px
    margin-bottom: .8rem

    > .thNumber
      display: flex
      align-items: center
      justify-content: center
      margin-top: 16px
      margin-bottom: 3px
      padding-left: 1rem
      color: #ebebf599
      font-weight: 600
    
    > .thTitle
      color: #ebebf599
      font-weight: 600
      letter-spacing: 4px
      font-size: 12px
      display: flex
      margin-top: 16px
      margin-bottom: 3px
      align-items: center
      text-transform: uppercase
      
</style>
