<script lang="js">
    export let onClick;
  
    function handleClick() {
      onClick();
    }
</script>

<div>
  <button class="rounded-2xl bg-transparent backdrop-blur-sm font-semibold py-3 px-6 text-base flex color-white filter-none transform-none" on:click={handleClick}>
    <slot></slot>
  </button>
</div>

<style lang="sass">
    div
      perspective: 200px
  
    button
      border: 2px solid #f90
      transition: transform .6s cubic-bezier(0, 0, .2, 1), filter .9s
  
    @media (min-width: 768px)
      button:hover
        filter: drop-shadow(0 20px 10px #f90)
        transform: rotate3d(1, 0, 0, 36deg) scale(1.6) translateY(14px) translateZ(22px)
    
      button:focus
        filter: drop-shadow(0 16px 7px #f90)
        transform: rotate3d(1, 0, 0, 33deg) scale(1.5) translateY(14px) translateZ(20px)

</style>
