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
  
    > .button
      border-radius: 1rem
      background-color: #f90
      font-weight: 600
      padding: .75rem 1.5rem
      font-size: 1rem
      display: flex
      color: #fff
  
  @media (min-width: 768px)
    div.tapToEarn
      margin-bottom: 8rem
  
      > .button
        font-size: 1.25rem
  
</style>
