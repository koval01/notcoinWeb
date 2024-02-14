<script>
    import { stat, allStatUsers } from "../../store.js";
    import { getRandomElements, preloadImage } from "../../utils.js";
    import { onMount } from "svelte";
    
    let Avatars, Value, Label;

    onMount(async () => {
        const [AvatarsModule, ValueModule, LabelModule] = await Promise.all([
            import("./online/Avatars.svelte"),
            import("./online/Value.svelte"),
            import("./online/Label.svelte")
        ]);

        Avatars = AvatarsModule.default;
        Value = ValueModule.default;
        Label = LabelModule.default;
    });

    let usersTotal = [];
    let usersOnlineToday = [];
    let usersOnlineNow = [];

    let objValues = [];
    let preloadImgState;

    // Throttle function to update random users
    let throttledUpdateRandomUsers = null;

    const updateRandomUsers = async () => {
        const usersWithAvatar = $allStatUsers.leaderboard.filter(user => user.avatar);

        // Preload avatars and update users
        await Promise.all(usersWithAvatar.map(user => preloadImage(user.avatar)));
        usersTotal = getRandomElements(usersWithAvatar, 3).map(user => ({ avatar: user.avatar }));
        usersOnlineToday = getRandomElements(usersWithAvatar, 3).map(user => ({ avatar: user.avatar }));
        usersOnlineNow = getRandomElements(usersWithAvatar, 3).map(user => ({ avatar: user.avatar }));

        preloadImgState = false;
    };

    // To prevent avatars from being updated twice
    const throttleUpdateRandomUsers = () => {
        if (!throttledUpdateRandomUsers) {
            throttledUpdateRandomUsers = setTimeout(() => {
                updateRandomUsers();
                throttledUpdateRandomUsers = null;
            }, 200);
        }
    };

    // Watch for changes in stat and allStatUsers, and trigger throttle update
    $: {
        if ($stat?.loading === false && $allStatUsers?.loading === false) {
            throttleUpdateRandomUsers();
        }
    }
</script>

<div class="onlineSection">
    <div class="online">
        {#each [usersTotal, usersOnlineToday, usersOnlineNow] as users, i}
            <div class="onlineRow">
                <svelte:component this={Avatars} preloadImgState={preloadImgState} users={users} />
                <svelte:component this={Value} index={i} objValues={objValues} stat={$stat} />
                <svelte:component this={Label} index={i} />
            </div>
        {/each}
    </div>
</div>

<style lang="sass">
  .onlineSection
    display: flex
    gap: .5rem
    align-items: center
    margin-bottom: 1.5rem
    justify-content: center
  
    > div.online
      font-size: 1rem
  
  div.onlineRow
    display: flex
    align-items: center
    margin-bottom: 12px
  
  @media (min-width: 768px)
    .onlineSection
      gap: .75rem
      margin-bottom: 2rem
  
      > div.online
        font-size: 1.25rem

</style>
