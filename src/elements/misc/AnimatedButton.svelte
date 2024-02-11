<script>
    export let onClick;
  
    function handleClick() {
      onClick();
    }
</script>

<div class="buttonContainer">
  <button class="button" on:click={handleClick}>
    <slot></slot>
  </button>
</div>

<style lang="sass">
    .buttonContainer
      perspective: 200px
  
    .button
      border-radius: 1rem
      background: rgba(0, 0, 0, 0)
      border: 2px solid #f90
      backdrop-filter: blur(5px)
      font-weight: 600
      padding: .75rem 1.5rem
      font-size: 1rem
      display: flex
      color: #fff
      filter: none
      transform: none
      transition: transform .6s cubic-bezier(0, 0, .2, 1), filter .9s
  
    .button:hover
      filter: drop-shadow(0 20px 10px #f90)
      transform: rotate3d(1, 0, 0, 36deg) scale(1.6) translateY(14px) translateZ(22px)
  
    .button:focus
      filter: drop-shadow(0 16px 7px #f90)
      transform: rotate3d(1, 0, 0, 33deg) scale(1.5) translateY(14px) translateZ(20px)

</style>
