<script>
    import { battleRoyaleStat } from "../../store.js";

    import AppleButton from "../misc/AppleButton.svelte";

    import { Leaderboard } from "../misc/leaderboard";
    
    import Crown from "./elements/Crown.svelte";
    import Hero from "./elements/Hero.svelte";
    import Footer from "../Footer.svelte";

    import { goHome } from "../../utils";
</script>

<div class="pageInner">
    <div class="intro align-center direction-column">
        <Crown />
        <Hero />
        <AppleButton onClick={goHome}>Home</AppleButton>

        <div class="padding-16-0 direction-column w-100 w-limit">
            <Leaderboard StoreObject={$battleRoyaleStat.list} teamsDisplay={true} />
        </div>

        <Footer />
    </div>
</div>

<style lang="sass">
  .w-100
    width: 100%

  .padding-16-0
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

  .align-center
    align-items: center

  .direction-column
    display: flex
    flex-direction: column

  @media (min-width: 768px)
    .w-limit
      max-width: 640px

</style>
