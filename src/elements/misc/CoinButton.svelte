<script lang="js">
    export let onClick;
  
    function handleClick() {
      onClick();
    }
</script>

<button class="buttonFlush w-full h-full cursor-pointer" on:click={handleClick}>
    <div class="coin w-full h-full relative will-change-transform"></div>
</button>

<style lang="sass">
    button
      perspective: 300px

    .coin
      background-image: url(/images/coin-mobile.webp)
      background-size: cover
      transform-style: preserve-3d
    
    @media (min-width: 768px)
      .coin
        background-image: url(/images/coin.webp)

        &:hover
          animation: tapCoin .8s ease 3 alternate

    @keyframes tapCoin
      0%
        transform: rotateX(0deg) rotateY(0deg)

      25%
        transform: rotateX(-18deg) rotateY(-16deg)

      50%
        transform: rotateX(0deg) rotateY(0deg)

      75%
        transform: rotateX(-18deg) rotateY(16deg)

      100%
        transform: rotateX(0deg) rotateY(0deg)
 
</style>
