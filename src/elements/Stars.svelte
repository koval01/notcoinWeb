<script>
    import { onMount } from "svelte";
    import { readable } from "svelte/store";
    import { generateStars } from "../utils";

    let stars = readable(generateStars());

    onMount(() => {
        stars = readable(generateStars());
    });
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
  
</style>
