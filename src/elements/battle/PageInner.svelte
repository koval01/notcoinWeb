<script>
    import AppleButton from "../misc/AppleButton.svelte";

    import Crown from "./elements/Crown.svelte";
    import Hero from "./elements/Hero.svelte";

    import Leaderboard from "./leaderboard/Main.svelte";

    const goHome = () => {
        window.open("/", "_self");
    };
</script>

<div class="pageInner">
    <div class="intro align-center direction-column">
        <Crown />
        <Hero />
        <AppleButton onClick={goHome}>Home</AppleButton>

        <Leaderboard />
    </div>
</div>

<style lang="sass">
  .pageInner
    position: relative
    z-index: 100

  .intro
    margin-top: 88px
    height: 241px
    padding: 0

  .align-center
    align-items: center

  .direction-column
    display: flex
    flex-direction: column

</style>
