<script lang="ts">
    export let isActive: boolean;
    export let onClick: any;
</script>
  
<button 
    class="transition-all duration-200 flex relative z-10 leading-5 overflow-hidden items-center justify-center grow border-none h-7 w-full bg-transparent select-none outline-0 m-0 p-0 appearance-none cursor-pointer font-semibold text-white {isActive ? '!text-black' : ''}" 
    type="button"
    on:click={onClick}>
    <slot></slot>
</button>
  