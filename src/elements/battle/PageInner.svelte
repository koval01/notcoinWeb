<script>
    import { battleRoyaleStat } from "../../store.js";

    import { goHome } from "../../utils";
    import { onMount } from "svelte";
    
    let AppleButton, Stars, Leaderboard, Crown, Hero, Footer;

    onMount(async () => {
        const [AppleButtonModule, StarsModule, LeaderboardModule, CrownModule, HeroModule, FooterModule] = await Promise.all([
            import("../misc/AppleButton.svelte"),
            import("../misc/Stars.svelte"),
            import("../misc/leaderboard"),
            import("./elements/Crown.svelte"),
            import("./elements/Hero.svelte"),
            import("../Footer.svelte")
        ]);

        AppleButton = AppleButtonModule.default;
        Stars = StarsModule.default;
        Leaderboard = LeaderboardModule.Leaderboard;
        Crown = CrownModule.default;
        Hero = HeroModule.default;
        Footer = FooterModule.default;
    });
</script>

<div class="pageInner">
    <svelte:component this={Stars} count={18} />
    <div class="intro align-center direction-column">
        <svelte:component this={Crown} />
        <svelte:component this={Hero} />
        <svelte:component this={AppleButton} onClick={goHome}>Home</svelte:component>

        <div class="padding-16-0 direction-column w-100 w-limit">
            <svelte:component this={Leaderboard} StoreObject={$battleRoyaleStat.list} teamsDisplay={true} />
        </div>

        <svelte:component this={Footer} />
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
