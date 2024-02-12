<script>
  import { squadData} from "../../../store";
  import { animateValue } from "../../../utils.js";

  let objValue;
</script>

<div class="minedSection">
    <h3 class="minedTitle">total mined</h3>
    <div class="container">
        <img class="coin" src="/images/coin.webp" draggable="false" alt="Coin">
        <div class="value" bind:this={objValue}>
          {#if $squadData.loading}
              <div class="skeleton" style="opacity: 1;">
                  <div class="thickLine"></div>
              </div>
          {:else}
              {animateValue(objValue, $squadData.coins, 2e3)}
          {/if}
        </div>
    </div>
</div>

<style lang="sass">
  .minedSection
    display: flex
    flex-direction: column
    gap: .5rem
    align-items: center
    margin-bottom: 1.5rem

  .minedTitle
    color: #ffffff80
    letter-spacing: .25rem
    font-size: .75rem
    text-transform: uppercase

  .container
    display: flex
    gap: .5rem
    align-items: center

    >
      .coin
        width: 2.5rem
        height: 2.5rem

      .value
        font-size: 2rem
        font-weight: 800
        font-variant-numeric: lining-nums tabular-nums

    @media (min-width: 768px)
      .minedTitle
        font-size: 1rem

      .container
        gap: 1rem

        >
          .coin
            width: 4.5rem
            height: 4.5rem

          .value
            font-size: 3.75rem

</style>
