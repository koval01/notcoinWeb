<script>
    import { animateValue } from "../../../../utils.js";

    export let objValue, coins, href;
</script>

<a class="rowValue" href={href}>
    <img 
      src="/images/penny.webp" 
      alt="penny" draggable="false" 
      width="20" height="20"
    >
    <span class="rowCoins" bind:this={objValue}>
      {animateValue(objValue, coins, 2e3)}
    </span>
</a>

<style lang="sass">
    .rowValue
      padding-right: 1.5rem
      display: flex
      align-items: center
      justify-content: flex-end
      gap: 6px
      font-weight: 500

      > .rowCoins
        font-variant-numeric: lining-nums tabular-nums

</style>
