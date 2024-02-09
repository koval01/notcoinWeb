<script>
    import { stat, allStatUsers } from "../../store.js";
    import {
        getRandomElements,
        getAvatarThumb,
        preloadImage,
        animateValue
    } from "../../utils.js";

    let usersTotal = [];
    let usersOnlineToday = [];
    let usersOnlineNow = [];

    let objValues = [null, null, null];
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

    const handleImageError = (event) => {
        event.target.src = getAvatarThumb();
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
                <div class="avatars">
                    {#if preloadImgState === null}
                        {#each Array(3) as _, i}
                            <div class="avatar" key={i}>
                                <img
                                    class="avatarImg"
                                    src={getAvatarThumb()}
                                    draggable="false"
                                    alt="Avatar"
                                    height="32px"
                                    width="32px"
                                />
                            </div>
                        {/each}
                    {:else}
                        {#each users as { avatar }}
                            <div class="avatar">
                                <img
                                    class="avatarImg"
                                    src={avatar}
                                    draggable="false"
                                    on:error={handleImageError}
                                    alt="Avatar"
                                    height="32px"
                                    width="32px"
                                />
                            </div>
                        {/each}
                    {/if}
                </div>
                <span class="value {i === 0 ? 'totalPlayers' : i === 1 ? 'onlineToday' : 'onlineNow'}" bind:this={objValues[i]}>
                    {#if $stat.loading}
                        <div class="skeleton" style="opacity: 1;">
                            <div class="thickLine"></div>
                        </div>
                    {:else if i === 0}
                        {animateValue(objValues[i], $stat.users, 2e3)}
                    {:else if i === 1}
                        {animateValue(objValues[i], $stat.onlineToday, 2e3)}
                    {:else}
                        {animateValue(objValues[i], $stat.online, 2e3)}
                    {/if}
                </span>
                <span class="label">
                    {#if i === 0}
                        total players
                    {:else if i === 1}
                        online today
                    {:else}
                        online
                    {/if}
                </span>
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
    height: 36.98px
  
    >
      div.avatars
        display: flex
        padding-right: .75rem
        min-width: 72px
  
        > div.avatar
          padding: .25rem
          border-radius: 50%
          background-color: #000
          margin-right: -.75rem
  
          > img.avatarImg
            border-radius: 50%
            height: 1.5rem
            width: 1.5rem
  
      span
        &.value
          font-variant-numeric: lining-nums tabular-nums
          margin-left: 12px

        &.value > .skeleton
          height: 1.3rem

        &.value.totalPlayers > .skeleton
          width: 130px

        &.value.onlineToday > .skeleton
          width: 110px

        &.value.onlineNow > .skeleton
          width: 90px
  
        &.label
          margin-left: 6px
          color: #ebebf599
  
  @media (min-width: 768px)
    .onlineSection
      gap: .75rem
      margin-bottom: 2rem
  
      > div.online
        font-size: 1.25rem
  
    div.onlineRow
      height: 31.98px
  
      > div.avatars
        min-width: 96px
  
        > div.avatar > img.avatarImg
          height: 2rem
          width: 2rem
  
    div.onlineRow > span
      &.value > .skeleton
        height: 2rem

      &.value.totalPlayers > .skeleton
        width: 160px

      &.value.onlineToday > .skeleton
        width: 140px

      &.value.onlineNow > .skeleton
        width: 110px

</style>
