<script>
    import AnimatedButton from "../misc/AnimatedButton.svelte";

    const handleClick = () => {
        window.open("https://t.me/notcoin_bot/click", "_blank");
        document.activeElement.blur();
    };
</script>

<div class="tapToEarn">
  <AnimatedButton onClick={handleClick}>Tap-to-earn</AnimatedButton>
</div>

<style lang="sass">
  div.tapToEarn
    margin-bottom: 3.5rem
    display: flex
    justify-content: center
    align-items: center
  
  @media (min-width: 768px)
    div.tapToEarn
      margin-bottom: 8rem

</style>
