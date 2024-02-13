<script>
    import Avatars from "./online/Avatars.svelte";
    import Value from "./online/Value.svelte";
    import Label from "./online/Label.svelte";

    import { stat, allStatUsers } from "../../store.js";
    import { getRandomElements, preloadImage } from "../../utils.js";

    let usersTotal = [];
    let usersOnlineToday = [];
    let usersOnlineNow = [];

    let objValues = [];
    let preloadImgState = null;

    const updateRandomUsers = async () => {
        const usersWithAvatar = $allStatUsers.leaderboard.filter(
            (user) => user.avatar,
        );

        // Preload avatars
        await Promise.all(
            usersWithAvatar.map((user) => preloadImage(user.avatar)),
        );

        usersTotal = getRandomElements(usersWithAvatar, 3).map((user) => ({
            avatar: user.avatar,
        }));
        usersOnlineToday = getRandomElements(usersWithAvatar, 3).map(
            (user) => ({ avatar: user.avatar }),
        );
        usersOnlineNow = getRandomElements(usersWithAvatar, 3).map((user) => ({
            avatar: user.avatar,
        }));

        // Set preloadImgState to true after preloading is done
        preloadImgState = true;
    };

    let throttledUpdateRandomUsers = null;

    const throttleUpdateRandomUsers = () => {
        if (!throttledUpdateRandomUsers) {
            throttledUpdateRandomUsers = setTimeout(() => {
                updateRandomUsers();
                throttledUpdateRandomUsers = null;
            }, 2e2);
        }
    };

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
