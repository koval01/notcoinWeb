<script lang="js">
    export let onClick;
  
    function handleClick() {
        onClick();
    }
</script>

<button 
  type="button" 
  class="rounded-2xl bg-[#f90] font-semibold py-3 px-6 text-base text-[#fff] flex md:text-xl" 
  aria-haspopup="dialog" 
  aria-expanded="false"
  aria-controls="radix-:r0:" 
  data-state="closed" 
  on:click={handleClick}>
    <slot></slot>
</button>
