<script>
    const handleClick = () => {
        window.open("https://t.me/notcoin_bot/click", "_blank");
    };
</script>

<div class="tapToEarn">
    <button class="button" on:click={handleClick}>Tap-to-earn</button>
</div>

<style lang="sass">
  div.tapToEarn
    margin-bottom: 3.5rem
    display: flex
    justify-content: center
    align-items: center
    perspective: 200px
  
    > .button
      border-radius: 1rem
      background: rgba(0, 0, 0, 0)
      border: 2px solid #f90
      backdrop-filter: blur(5px)
      font-weight: 600
      padding: .75rem 1.5rem
      font-size: 1rem
      display: flex
      color: #fff
      filter: none
      transform: none
      transition: transform .6s, filter .9s
  
  @media (min-width: 768px)
    div.tapToEarn
      margin-bottom: 8rem
  
      > .button
        font-size: 1.25rem

        &:hover
          filter: drop-shadow(0 20px 10px #f90)
          transform: rotate3d(1, 0, 0, 36deg) scale(1.6) translateY(14px) translateZ(22px)

        &:focus
          filter: drop-shadow(0 16px 7px #f90)
          transform: rotate3d(1, 0, 0, 33deg) scale(1.5) translateY(14px) translateZ(20px)
  
</style>
