<script lang="js">
    export let onClick;
  
    function handleClick() {
      onClick();
    }
</script>

<button class="relative flex items-center py-2 px-4 my-0 mx-4 bg-transparent text-[#fff] cursor-pointer before:content-[''] before:-left-3 before:top-1/2 before:absolute before:w-8 before:h-8 before:bg-cover before:bg-[url(/images/chevron.svg)] before:-translate-y-2/4 transition duration-500 hover:opacity-70 hover:scale-105" on:click={handleClick}>
    <slot></slot>
</button>
