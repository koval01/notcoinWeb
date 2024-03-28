<script lang="ts">
    import { squadData} from "../../../store";
    import { animateValue } from "../../../utils";

    let objValue: any;
</script>

<div class="flex flex-col gap-2 items-center mb-3 mt-8 md:mt-14">
    <h3 class="text-[#ffffff80] text-xs md:text-base uppercase">total mined</h3>
    <div class="flex gap-2 md:gap-4 items-center justify-center">
        <img class="w-10 h-10 md:w-16 md:h-16 content-[url(/images/coin-mobile.webp)] md:content-[url(/images/coin.webp)]" draggable="false" alt="Coin">
        <div class="lining-nums tabular-nums font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl" bind:this={objValue}>
          {#if $squadData.loading}
              <div class="skeleton !w-48 md:!w-96">
                  <div class="thickLine"></div>
              </div>
          {:else}
              {animateValue(objValue, $squadData.coins)}
          {/if}
        </div>
    </div>
</div>
