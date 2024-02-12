<script>
    export let onClick;
  
    function handleClick() {
      onClick();
    }
</script>

<div class="coinButton" on:click={handleClick}>
    <div class="coin"></div>
</div>

<style lang="sass">
    .coinButton
      width: 100%
      height: 100%
      cursor: pointer
      perspective: 300px

    .coin
      background-image: url(/images/coin.webp)
      background-size: cover
      width: 100%
      height: 100%
      position: relative
      will-change: transform
      transform-style: preserve-3d
    
    @media (min-width: 768px)
      .coin:hover
        animation: tapCoin .5s ease 3 alternate
    
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
