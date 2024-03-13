<script>
    import NotButton from "../misc/NotButton.svelte";

    const handleTap = () => {
        window.open("https://t.me/notcoin_bot/click", "_blank");
        document.activeElement.blur();
    };
</script>

<div class="headButton">
  <NotButton onClick={handleTap}>Tap-to-earn</NotButton>
</div>

<style lang="sass">
  .headButton
    margin-bottom: 3.5rem
    display: flex
    justify-content: center
    align-items: center
    gap: 5rem
  
  @media (min-width: 768px)
    .headButton
      margin-bottom: 8rem
      gap: 8rem

</style>
