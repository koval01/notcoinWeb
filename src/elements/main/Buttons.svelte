<script>
    import CoinButton from "../misc/CoinButton.svelte";
    import CrownButton from "../misc/CrownButton.svelte";

    const handleTap = () => {
        window.open("https://t.me/notcoin_bot/click", "_blank");
        document.activeElement.blur();
    };
    const goBattle = () => {
        window.open("/battle", "_self");
    };
</script>

<div class="headButtons">
  <div>
    <CoinButton onClick={handleTap} />
  </div>
  <div>
    <CrownButton onClick={goBattle} />
  </div>
</div>

<style lang="sass">
  div.headButtons
    margin-bottom: 3.5rem
    display: flex
    justify-content: center
    align-items: center
    gap: 5rem

    > div
      width: 80px
      height: 80px
  
  @media (min-width: 768px)
    div.tapToEarn
      margin-bottom: 8rem

    div.headButtons
      gap: 8rem

      > div
        width: 140px
        height: 140px

</style>
