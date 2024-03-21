<script lang="ts">
  import { squadData} from "../../../store";
  import { animateValue } from "../../../utils";

  let objValue: any;
</script>

<div class="minedSection">
    <h3 class="minedTitle">total mined</h3>
    <div class="mined-container">
        <img class="coin" draggable="false" alt="Coin">
        <div class="value" bind:this={objValue}>
          {#if $squadData.loading}
              <div class="skeleton" style="opacity: 1;">
                  <div class="thickLine"></div>
              </div>
          {:else}
              {animateValue(objValue, $squadData.coins)}
          {/if}
        </div>
    </div>
</div>

<style lang="sass">
  .minedSection
    display: flex
    flex-direction: column
    gap: 0.5rem
    align-items: center
    margin-bottom: 1.5rem

  .minedTitle
    color: #ffffff80
    letter-spacing: 0.25rem
    font-size: 0.75rem
    text-transform: uppercase

  .mined-container
    display: flex
    gap: 0.5rem
    align-items: center
    justify-content: center

  .coin
    content: url(/images/coin-mobile.webp)
    width: 2.5rem
    height: 2.5rem

  .value
    font-size: 2rem
    font-weight: 800
    font-variant-numeric: lining-nums tabular-nums

  .skeleton
    width: 12rem

  @media (min-width: 768px)
    .minedTitle
      font-size: 1rem

    .mined-container
      gap: 1rem

    .coin
      content: url(/images/coin.webp)
      width: 4.5rem
      height: 4.5rem

    .value
      font-size: 3.6rem

    .skeleton
      width: 20rem

</style>
