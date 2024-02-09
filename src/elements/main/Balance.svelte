<script>
    import { stat } from "../../store.js";
    import { animateValue } from "../../utils.js";

    let objValue;
</script>

<div class="balanceSection">
    <h3 class="balanceTitle">total balance</h3>
    <div class="container">
        <img class="coin" draggable="false" alt="Coin" />
        <div class="value" bind:this={objValue}>
            {#if $stat.loading}
                <div class="skeleton" style="opacity: 1;">
                    <div class="thickLine"></div>
                </div>
            {:else}
                {animateValue(objValue, $stat.balanceCoins, 2e3)}
            {/if}
        </div>
    </div>
</div>

<style lang="sass">
  .balanceSection
    display: flex
    flex-direction: column
    gap: .5rem
    align-items: center
    margin-bottom: .5rem
  
  .balanceTitle
    color: #ffffff80
    letter-spacing: .25rem
    font-size: .6rem
    text-transform: uppercase
  
  .balanceSection > div.container
    display: flex
    gap: .5rem
    align-items: center
  
    >
      img.coin
        content: url(/images/coin-mobile.webp)
        width: 2.5rem
        height: 2.5rem
  
      div.value
        font-size: 1.3rem
        font-weight: 800
        font-variant-numeric: lining-nums tabular-nums

        > .skeleton
          width: 180px
          height: 1.4rem
  
  @media (min-width: 420px)
    .balanceSection > div.container > div.value
      font-size: 1.6rem

      > .skeleton
        width: 200px
        height: 1.6rem
  
  @media (min-width: 480px)
    .balanceTitle
      font-size: .75rem
  
    .balanceSection > div.container > div.value
      font-size: 2rem

      > .skeleton
        width: 220px
        height: 2rem

  @media (min-width: 580px)
    .balanceSection > div.container > div.value
      font-size: 2.5rem

      > .skeleton
        width: 250px
        height: 2.6rem
  
  @media (min-width: 768px)
    .balanceSection
      margin-bottom: 1.5rem
  
    .balanceTitle
      font-size: 1rem
  
    .balanceSection > div.container
      gap: 1rem
  
      >
        img.coin
          content: url(/images/coin.webp)
          width: 4.5rem
          height: 4.5rem
  
        div.value
          font-size: 3rem

          > .skeleton
            width: 300px
            height: 3rem
  
  @media (min-width: 920px)
    .balanceSection > div.container > div.value
      font-size: 3.75rem

      > .skeleton
        width: 400px
        height: 3.8rem
  
</style>
