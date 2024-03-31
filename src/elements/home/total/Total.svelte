<script lang="ts">
    import Flame from "./Flame.svelte";
    import Penny from "./Penny.svelte";

    import Skeleton from "../../misc/Skeleton.svelte";

    import { stat } from "../../../store";
    import { animateValue } from "../../../utils";

    const skeletonCls = "h-5 w-44 md:h-7 md:w-56 lg:w-72"

    let objIssued: any, objBurned: any;
</script>

<div class="grid grid-rows-2 grid-cols-none md:grid-cols-2 md:grid-rows-none gap-4 mb-4">
  {#each Array(2) as _, i}
    <div class="relative flex p-4 items-center gap-6 backdrop-blur-sm z-5 border-2 border-opacity-10 border-white rounded-xl border-solid md:py-4 md:px-8 md:gap-5">
      {#if i}
        <Flame />
      {:else}
        <Penny />
      {/if}
        <div class="meme {i ? "burned": ""}">
            <img
                class="memeImg w-auto max-w-14 {i ? "burned": "issued"}"
                draggable="false"
                alt={i ? "this is fine meme" : "doge meme"}
                width="64"
                height="64"
            />
        </div>
        <div class="valueContainer gap-1 flex flex-col">
            {#if i}
              <span class="value valueBurned" bind:this={objBurned}>
                  {#if $stat.loading}
                      <Skeleton className={skeletonCls} />
                  {:else}
                      {animateValue(objBurned, $stat.burnedCoins)}
                  {/if}
              </span>
            {:else}
              <span class="value valueIssued" bind:this={objIssued}>
                  {#if $stat.loading}
                      <Skeleton className={skeletonCls} />
                  {:else}
                      {animateValue(objIssued, $stat.balanceCoins + $stat.burnedCoins)}
                  {/if}
              </span>
            {/if}
            <span class="title">total {i ? "burned": "issued"}</span>
        </div>
    </div>
  {/each}
</div>

<style lang="sass">
  div
    &.meme
      > .memeImg
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
      > span
        &.value
          font-size: 1.375rem
          font-weight: 800
          font-variant-numeric: lining-nums tabular-nums
  
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
  
  @media (max-width: 1092px)
    div.valueContainer > span.value
      font-size: 23px
  
  @media (max-width: 960px)
    div
      &.valueContainer > span.value
        font-size: 21px
  
      &.meme > .memeImg
        width: auto
        max-width: 64px
  
  @media (max-width: 878px)
    div.valueContainer > span.value
      font-size: 18px
  
</style>
