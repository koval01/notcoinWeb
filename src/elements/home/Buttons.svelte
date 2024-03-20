<script>
    import NotButton from "../misc/NotButton.svelte";

    const handleTap = () => {
        window.open("https://t.me/notcoin_bot/click", "_blank");

        // @ts-ignore
        document.activeElement.blur();
    };
</script>

<div class="headButton flex justify-center mb-14 items-center gap-20 md:mb-32 md:gap-32">
  <NotButton onClick={handleTap}>Tap-to-earn</NotButton>
</div>
