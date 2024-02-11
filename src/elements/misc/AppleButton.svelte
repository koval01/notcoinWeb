<script>
    export let onClick;
  
    function handleClick() {
      onClick();
    }
</script>

<button on:click={handleClick}>
    <slot></slot>
</button>

<style lang="sass">
  button  
    display: flex
    align-items: center
    padding: 0.5rem 1rem
    background: none
    color: #fff
    cursor: pointer
    transition: opacity .3s

    &:hover
      opacity: .6

  button
    margin: 0 1rem
    position: relative

    &:before
      content: ""
      background-image: url(/images/chevron.svg)
      background-size: cover
      width: 2rem
      height: 2rem
      position: absolute
      left: -.7rem
      top: 50%
      transform: translateY(-50%)

</style>
