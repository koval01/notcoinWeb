<script lang="js">
    export let onClick;
  
    function handleClick() {
        onClick();
    }
</script>

<button 
  type="button" 
  class="rounded-2xl bg-white font-semibold py-3 px-6 text-base text-black flex md:text-xl" 
  aria-haspopup="dialog" 
  aria-expanded="false"
  aria-controls="radix-:r0:" 
  data-state="closed" 
  on:click={handleClick}>
    <slot></slot>
</button>
