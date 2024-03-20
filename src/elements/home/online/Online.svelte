<script>
    import Avatars from "./Avatars.svelte";
    import Value from "./Value.svelte";
    import Label from "./Label.svelte";

    import { stat, allStatUsers } from "../../../store";
    import { getRandomElements } from "../../../utils";

    let usersTotal = [];
    let usersOnlineToday = [];
    let usersOnlineNow = [];

    let objValues = [];
    let preloadImgState;

    // Throttle function to update random users
    let throttledUpdateRandomUsers = null;

    const updateRandomUsers = async () => {
        const usersWithAvatar = $allStatUsers.leaderboard.filter(user => user.avatar);

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
                <Avatars preloadImgState={preloadImgState} users={users} />
                <Value index={i} objValues={objValues} stat={$stat} />
                <Label index={i} />
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
  
  .online
    font-size: 1rem
  
  .onlineRow
    display: flex
    align-items: center
    margin-bottom: 12px
  
  @media (min-width: 768px)
    .onlineSection
      gap: .75rem
      margin-bottom: 2rem
  
    .online
      font-size: 1.25rem

</style>
