<script>
    import Flame from "./Flame.svelte";
    import Penny from "./Penny.svelte";

    import { stat } from "../../../store.js";
    import { animateValue } from "../../../utils.js";

    let objIssued, objBurned;
</script>

<div class="totalSection">
    <div class="container">
        <svelte:component this={Penny} />
        <div class="meme">
            <img
                class="memeImg issued"
                draggable="false"
                alt="doge meme"
            />
        </div>
        <div class="valueContainer">
            <span class="value valueIssued" bind:this={objIssued}>
                {#if $stat.loading}
                    <div class="skeleton" style="opacity: 1;">
                        <div class="thickLine"></div>
                    </div>
                {:else}
                    {animateValue(objIssued, $stat.balanceCoins + $stat.burnedCoins, 2e3)}
                {/if}
            </span>
            <span class="title">total issued</span>
        </div>
    </div>
    <div class="container">
        <svelte:component this={Flame} />
        <div class="meme burned">
            <img
                class="memeImg burned"
                draggable="false"
                alt="this is fine meme"
            />
        </div>
        <div class="valueContainer">
            <span class="value valueBurned" bind:this={objBurned}>
                {#if $stat.loading}
                    <div class="skeleton" style="opacity: 1;">
                        <div class="thickLine"></div>
                    </div>
                {:else}
                    {animateValue(objBurned, $stat.burnedCoins, 2e3)}
                {/if}
            </span>
            <span class="title">total burned</span>
        </div>
    </div>
</div>

<style lang="sass">
  .totalSection
    display: grid
    grid-template-rows: repeat(2, minmax(0, 1fr))
    grid-template-columns: none
    gap: 1rem
    margin-bottom: 1rem
  
  .container
    position: relative
    display: flex
    padding: 1rem
    align-items: center
    gap: 1.5rem
    border-width: 2px
    border-color: #ffffff1a
    border-radius: 1rem
    border-style: solid
    -webkit-backdrop-filter: blur(3px)
    backdrop-filter: blur(3px)
    z-index: 2
  
  div
    &.meme
      > .memeImg
        width: auto
        max-width: 57px
  
        &.issued
          content: url(/images/memes/doge-mobile.webp)
          transform: scaleX(-1)
  
        &.burned
          content: url(/images/memes/fine-mobile.webp)
          border-radius: 5px
  
      &.burned
        background-color: #fff
        padding: 3px
        border-radius: 7px
  
    &.valueContainer
      gap: .25rem
      display: flex
      flex-direction: column
  
      > span
        &.value
          font-size: 1.375rem
          font-weight: 800
          font-variant-numeric: lining-nums tabular-nums

          > .skeleton
            height: 1.4rem
            width: 360px
  
        &.valueIssued
          color: #ffc224
  
        &.valueBurned
          color: #ff6b2d
  
        &.title
          color: #ffffff80
          letter-spacing: .25rem
          font-size: .75rem
          text-transform: uppercase
  
  @media (min-width: 768px)
    div
      &.totalSection
        grid-template-columns: repeat(2, minmax(0, 1fr))
        grid-template-rows: none
  
        > div.container
          padding: 1rem 2rem
          gap: 20px
  
      &.meme
        &.burned
          padding: 4px
          border-radius: 10px
  
        > .memeImg
          &.issued
            content: url(/images/memes/doge.webp)

          &.burned
            content: url(/images/memes/fine.webp)
            border-radius: 8px
  
          max-width: 100px
  
      &.valueContainer > span.value
        font-size: 27px

        > .skeleton
            height: 29px
            width: 300px
  
  @media (max-width: 1092px)
    div.valueContainer > span.value
      font-size: 23px

      > .skeleton
            height: 25px
            width: 260px
  
  @media (max-width: 960px)
    div
      &.valueContainer > span.value
        font-size: 21px

        > .skeleton
            height: 23px
            width: 200px
  
      &.meme > .memeImg
        width: auto
        max-width: 64px
  
  @media (max-width: 878px)
    div.valueContainer > span.value
      font-size: 18px

      > .skeleton
            height: 20px
            width: 160px
  
</style>
