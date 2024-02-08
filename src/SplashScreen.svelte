<script>
    export let show = false;
</script>

{#if show}
    <div class="splash-screen">
        <div>
            <div>
                <div class="logo"></div>
            </div>
            <span>Notcoin</span>
        </div>
    </div>
{/if}

<style lang="sass">
  div.splash-screen
    position: fixed
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    background-color: #000
    display: flex
    justify-content: center
    align-items: center
    z-index: 9999
  
    > div
      display: flex
      flex-direction: column
      align-items: center
  
      >
        div
          perspective: 400px
  
          > div.logo
            width: 300px
            height: 300px
            border-radius: 50%
            background-image: url(/images/coin.webp)
            background-size: cover
            transform-origin: center
            will-change: transform
            transition: transform .1s ease-out
            animation: tapAnimation .6s ease infinite
            cursor: pointer
  
        span
          font-size: 3rem
          font-weight: 800
          padding-top: 2rem
  
  @keyframes tapAnimation
    0%
      transform: translateZ(0) rotateX(0) rotateY()
  
    10%
      transform: translateZ(-5px) rotateX(-0.91deg) rotateY(13.41deg)
  
    60%
      transform: translateZ(0) rotateX(0) rotateY()
  
    70%
      transform: translateZ(-5px) rotateX(-0.68deg) rotateY(-12.13deg)
  
    100%
      transform: translateZ(0) rotateX(0) rotateY()
  
  @media (min-width: 768px)
    div.splash-screen > div > span
      font-size: 5rem
  
</style>
