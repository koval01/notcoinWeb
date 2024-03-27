<script lang="ts">
    export let activeTab: boolean;
</script>
  
<div class="relative flex justify-center items-center w-full overflow-hidden p-1 min-h-12 rounded-xl bg-[#ffffff1f] z-30 backdrop-blur-sm">
  <slot></slot>
  <div class="absolute pointer-events-none w-[calc(50%-4px)] left-1 right-1 top-1 bottom-1 transition-transform duration-150 ease-in border border-solid border-opacity-25 rounded-lg bg-white shadow-lg" style="transform:translateX({activeTab ? '100%' : '0'})"></div>
</div>
