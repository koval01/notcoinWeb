<div class="minedSection">
    <h3 class="minedTitle">total mined</h3>
    <div class="container">
        <img class="coin" src="/images/coin.webp" draggable="false" alt="Coin">
        <div class="value">
            <div class="skeleton" style="opacity: 1;">
                <div class="thickLine"></div>
            </div>
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
