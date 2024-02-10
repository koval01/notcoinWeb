<script>
</script>

<div>
    <div class="container">
        <div class="thNumber">#</div>
        <h4 class="thTitle">top miners</h4>
        <hr class="hr">
    </div>
    <div class="container">
        <div class="thNumber">#</div>
        <h4 class="thTitle">top teams</h4>
        <hr class="hr">
    </div>
</div>

<style lang="sass">
    .container
      background-color: #ebebf520
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
      
      > .hr
        background-color: #ffffff1a
        height: 1px
        grid-column: span 2/span 2
        grid-column-start: 2
        border: none
        width: 100%

</style>
