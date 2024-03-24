<script lang="ts">
    export let isActive: boolean;
    export let onClick: any;
</script>
  
<button 
    class="tabButton flatTabButton {isActive ? 'isActive' : ''}" 
    type="button"
    on:click={onClick}>
    <slot></slot>
</button>

<style lang="sass">
  .tabButton
    font-weight: 590
    line-height: 22px
    color: #fff

  .flatTabButton
    user-select: none
    outline: 0px
    margin: 0
    -moz-appearance: none
    appearance: none
    cursor: pointer
    overflow: hidden
    display: flex
    align-items: center
    justify-content: center
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
  