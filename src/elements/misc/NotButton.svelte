<script lang="js">
    export let onClick;
  
    function handleClick() {
        onClick();
    }
</script>

<button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r0:" data-state="closed" on:click={handleClick}>
    <slot></slot>
</button>

<style lang="sass">
    button
      border-radius: 1rem
      background-color: #f90
      font-weight: 600
      padding: .75rem 1.5rem
      font-size: 1rem
      display: flex
      color: #fff

    @media (min-width: 768px)
      button
        font-size: 1.25rem

</style>
