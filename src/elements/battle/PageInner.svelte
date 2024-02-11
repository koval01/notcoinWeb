<script>
    import Crown from "./elements/Crown.svelte";
    import Hero from "./elements/Hero.svelte";

    import Leaderboard from "./leaderboard/Main.svelte";
</script>

<div class="pageInner">
    <div class="intro align-center direction-column">
        <Crown />
        <Hero />

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
