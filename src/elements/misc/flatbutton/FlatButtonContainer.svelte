<script>
    export let activeTab;
</script>
  
<div class="solidRoot">
  <slot></slot>
  <div class="activeBar" style="transform:translateX({activeTab ? '100%' : '0'})"></div>
</div>

<style lang="sass">
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

  .solidRoot .activeBar
    position: absolute
    pointer-events: none
    width: calc(50% - 4px)
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
  