<script>
    import AppleButton from "../misc/AppleButton.svelte";
    import Stars from "../misc/Stars.svelte";
    import Crown from "./elements/Crown.svelte";
    import Hero from "./elements/Hero.svelte";
    import Footer from "../Footer.svelte";

    import { Leaderboard } from "../misc/leaderboard";

    import { battleRoyaleStat } from "../../store.js";

    import { goHome } from "../../utils";
</script>

<div class="pageInner">
    <Stars count={4} />
    <div class="intro align-center direction-column">
        <Crown />
        <Hero />
        <AppleButton onClick={goHome}>Home</AppleButton>

        <div class="lead direction-column">
            <Leaderboard StoreObject={$battleRoyaleStat.list} teamsDisplay={true} />
        </div>

        <Footer />
    </div>
</div>

<style lang="sass">
  .lead
    width: 100%
    padding: 16px 0

  .direction-column
    display: flex
    flex-direction: column

  .pageInner
    position: relative
    z-index: 100

  .intro
    margin-top: 88px
    height: 241px
    padding: 0
    align-items: center

  @media (min-width: 768px)
    .lead
      max-width: 640px

</style>
