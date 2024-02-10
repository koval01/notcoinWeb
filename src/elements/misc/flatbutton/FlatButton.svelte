<script>
    export let isActive;
    export let onClick;
</script>
  
<button 
    class="tabButton flatTabButton {isActive ? 'isActive' : ''}" 
    type="button" 
    role="tab" 
    aria-selected="false"
    tabindex="-1" 
    on:click={onClick}>
    <slot></slot>
</button>

<style lang="sass">
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
    
</style>
  