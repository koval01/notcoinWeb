<script lang="js">
    export let onClick;
  
    function handleClick() {
      onClick();
    }
</script>

<button class="relative flex items-center py-2 px-4 my-0 mx-4 bg-transparent text-[#fff] cursor-pointer" on:click={handleClick}>
    <slot></slot>
</button>

<style lang="sass">
  button  
    transition: opacity .3s, transform .3s

    &:hover
      opacity: .6
      transform: scale(1.1)

  button
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
