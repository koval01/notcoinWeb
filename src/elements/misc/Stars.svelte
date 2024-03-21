<script lang="ts">
    import { readable, type Readable } from "svelte/store";
    import { generateStars } from "../../utils";

    export let count: number = 4;
    let stars: Readable<{starsLeft: any[], starsRight: any[]}> = readable(generateStars(count));
</script>

<div>
    <div class="starsLeft">
        {#each $stars.starsLeft as { size, top, left }}
            <img
                src="/images/small-star.svg"
                alt="small star"
                draggable="false"
                class="star {size}"
                style="top: {top}; left: {left};"
            />
        {/each}
    </div>
    <div class="starsRight">
        {#each $stars.starsRight as { size, top, right }}
            <img
                src="/images/small-star.svg"
                alt="small star"
                draggable="false"
                class="star {size}"
                style="top: {top}; right: {right};"
            />
        {/each}
    </div>
</div>

<style lang="sass">
  div
    &.starsLeft
      top: 50vh
      left: 0
      position: fixed
      transform: translateY(-50%)
  
    &.starsRight
      top: 50vh
      right: 0
      position: fixed
      transform: translateY(-50%)
    
    *
      z-index: 0
      filter: none
      transition: filter 3s
      animation: star 8s cubic-bezier(.88, 1.25, 0, 1.2) infinite
  
  .star
    position: relative
  
    &.small
      width: .5rem
      height: .5rem
  
    &.medium
      width: .75rem
      height: .75rem
  
    &.large
      width: 1rem
      height: 1rem
  
    &.xlarge
      width: 1.15rem
      height: 1.15rem

  @keyframes star
    0%
      opacity: .8
      filter: drop-shadow(0 0 13px rgba(255, 255, 255, 1))

    50%
      opacity: .5
      filter: drop-shadow(0 0 18px rgba(255, 255, 255, .4))

    100%
      opacity: .8
      filter: drop-shadow(0 0 13px rgba(255, 255, 255, 1))
  
</style>
