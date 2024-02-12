<script>
    import { animateValue } from "../../../../utils.js";

    export let objValue, coins;
</script>

<div class="coins">
    <img 
        src="/images/penny.webp"
        alt="penny" width="20" height="20" draggable="false"
    >
    <span class="rowCoins" bind:this={objValue}>{animateValue(objValue, coins, 2e3)}</span>
</div>

<style lang="sass">
    .coins
      display: flex
      flex-direction: row
      align-items: center
      gap: .25rem

      > .rowCoins
        color: #ffffffbf

</style>
