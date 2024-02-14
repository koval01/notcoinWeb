<script>
    import { battleRoyaleStat } from "../../store.js";

    import { goHome } from "../../utils";
    import { onMount } from "svelte";
    
    let AppleButton, Stars, Leaderboard, Crown, Hero, Footer;

    onMount(async () => {
        AppleButton = (await import("../misc/AppleButton.svelte")).default;

        Stars = (await import("../misc/Stars.svelte")).default;

        import("../misc/leaderboard").then(module => {
            Leaderboard = module.Leaderboard;
        });

        Crown = (await import("./elements/Crown.svelte")).default;
        Hero = (await import("./elements/Hero.svelte")).default;
        Footer = (await import("../Footer.svelte")).default;
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
