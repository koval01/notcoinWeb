<script>
    import AppleButton from "../misc/AppleButton.svelte";
    import Stars from "../misc/Stars.svelte";
    import Crown from "./elements/Crown.svelte";
    import Hero from "./elements/Hero.svelte";
    import Footer from "../Footer.svelte";

    import { battleRoyaleStat } from "../../store.js";

    import { goHome } from "../../utils";
    import { onMount } from "svelte";
    
    let Leaderboard;

    onMount(async () => {
        const [LeaderboardModule] = await Promise.all([
            import("../misc/leaderboard")
        ]);
        
        Leaderboard = LeaderboardModule.Leaderboard;
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
