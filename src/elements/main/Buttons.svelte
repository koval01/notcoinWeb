<script>
    import AnimatedButton from "../misc/AnimatedButton.svelte";
    import CrownButton from "../misc/CrownButton.svelte";

    const handleTap = () => {
        window.open("https://t.me/notcoin_bot/click", "_blank");
        document.activeElement.blur();
    };
    const goBattle = () => {
        window.open("/battle", "_self");
    };
</script>

<div class="tapToEarn">
  <AnimatedButton onClick={handleTap}>Tap-to-earn</AnimatedButton>
  <div class="crowButtonContainer">
    <CrownButton onClick={goBattle} />
  </div>
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

    .crowButtonContainer
      margin-left: 5rem

</style>
