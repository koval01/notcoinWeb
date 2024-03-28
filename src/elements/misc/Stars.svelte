<script lang="ts">
    import { readable, type Readable } from "svelte/store";
    import { generateStars } from "../../utils";

    export let count: number = 4;
    let stars: Readable<{starsLeft: any[], starsRight: any[]}> = readable(generateStars(count));
</script>

<div>
  {#each Array(2) as _, i}
    <div class="starsLeft top-1/2 fixed -translate-y-1/2 z-0 filter-none { i ? "left-0" : "right-0" }">
        {#each (i ? $stars.starsLeft : $stars.starsRight) as { size, top, offset }}
            <img
                src="/images/small-star.svg"
                alt="small star"
                draggable="false"
                class="relative {size}"
                style="top: {top}; {i ? "left" : "right"}: {offset};"
            />
        {/each}
    </div>
  {/each}
</div>

<style lang="sass">
  div    
    *
      transition: filter 3s
      animation: star 8s cubic-bezier(.88, 1.25, 0, 1.2) infinite
  
  .small
    width: .5rem
    height: .5rem

  .medium
    width: .75rem
    height: .75rem

  .large
    width: 1rem
    height: 1rem

  .xlarge
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
