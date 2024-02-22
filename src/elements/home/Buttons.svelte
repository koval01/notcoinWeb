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
  <div class="box">
    <CoinButton onClick={handleTap} />
  </div>
  <div class="box">
    <CrownButton onClick={goBattle} />
    <div class="battle-text"></div>
  </div>
</div>

<style lang="sass">
  .battle-text
    display: none

  .headButtons
    margin-bottom: 3.5rem
    display: flex
    justify-content: center
    align-items: center
    gap: 5rem

  .box
    width: 80px
    height: 80px
  
  @media (min-width: 768px)
    .battle-text
      display: block
      background-image: url(/images/battle-text.webp)
      background-size: cover
      position: relative
      left: 4rem
      bottom: 2rem
      width: 8rem
      height: 3rem
      transform: rotate(355deg)

    .headButtons
      margin-bottom: 8rem
      gap: 8rem

    .box
      width: 140px
      height: 140px

</style>
