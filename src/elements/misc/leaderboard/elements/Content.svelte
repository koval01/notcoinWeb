<script lang="ts">
    import { animateValue, getName } from "../../../../utils";

    export let objValue: any, d: object | any;
</script>

<div class="overflow-hidden grow">
    <div>
        <div class="color-white text-base font-normal truncate pr-3 mb-1">{getName(d)}</div>
        <div class="coins relative pl-5 text-sm font-normal text-[#ffffffbf] before:content-[''] before:absolute before:top-[1.5px] before:left-0 before:w-4 before:h-4" bind:this={objValue}>
            {animateValue(objValue, d.coins ? d.coins : d.totalCoins)}
        </div>
    </div>
</div>

<style lang="sass">
  .coins
    &:before
      background: url(/images/penny.webp) center (center / contain)  

</style>
