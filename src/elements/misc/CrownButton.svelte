<script>
    export let onClick;
  
    function handleClick() {
      onClick();
    }
</script>

<button class="crownButton buttonFlush" on:click={handleClick}>
    <div class="crown"></div>
</button>

<style lang="sass">
    .crownButton
      width: 100%
      height: 100%
      transform: rotate(12deg)
      cursor: pointer
      perspective: 300px

    .crown
      background-image: url(/images/crown.webp)
      background-size: cover
      width: 100%
      height: 100%
      position: relative
      will-change: transform
      transform-style: preserve-3d
    
    @media (min-width: 768px)
      .crown:hover
        animation: shakeAnimation .5s ease 3 alternate
    
    @keyframes shakeAnimation
      0%
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)

      25%
        transform: rotateX(8deg) rotateY(8deg) rotateZ(8deg)

      50%
        transform: rotateX(-8deg) rotateY(-8deg) rotateZ(-8deg)

      75%
        transform: rotateX(8deg) rotateY(8deg) rotateZ(8deg)

      100%
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)
    
</style>
