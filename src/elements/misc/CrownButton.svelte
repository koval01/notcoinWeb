<script>
    export let onClick;
  
    function handleClick() {
      onClick();
    }
</script>

<div class="crownButton" on:click={handleClick}>
    <div class="crown"></div>
</div>

<style lang="sass">
    .crownButton
      transform: rotate(12deg)
      cursor: pointer
      perspective: 300px

    .crown
      background-image: url(/images/crown.webp)
      background-size: cover
      width: 140px
      height: 140px
      position: relative
      will-change: transform
      transform-style: preserve-3d
    
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
