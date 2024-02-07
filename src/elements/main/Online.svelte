<script>
    import { stat, allStatUsers } from "../../store.js";
    import {
        getRandomElements,
        getRandomRange,
        preloadImage,
    } from "../../utils.js";

    let usersTotal = [];
    let usersOnlineToday = [];
    let usersOnlineNow = [];

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

    const getAvatarThumb = () => {
        return `https://api.dicebear.com/7.x/thumbs/svg?seed=${getRandomRange(
            1,
            1e3,
        )}`;
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
            }, 3e3);
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
                                />
                            </div>
                        {/each}
                    {/if}
                </div>
                <span class="value">
                    {#if $stat.loading}
                        <div class="skeleton" style="opacity: 1;">
                            <div class="thickLine"></div>
                        </div>
                    {:else if i === 0}
                        {$stat.users.toLocaleString()}
                    {:else if i === 1}
                        {$stat.onlineToday.toLocaleString()}
                    {:else}
                        {$stat.online.toLocaleString()}
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

<style>
    .onlineSection {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        margin-bottom: 1.5rem;
        justify-content: center;
    }
    .onlineSection > div.online {
        font-size: 1rem;
    }
    div.onlineRow {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        height: 36.98px;
    }
    div.onlineRow > div.avatars {
        display: flex;
        padding-right: 0.75rem;
        min-width: 72px;
    }
    div.onlineRow > div.avatars > div.avatar {
        padding: 0.25rem;
        border-radius: 50%;
        background-color: #000;
        margin-right: -0.75rem;
    }

    div.onlineRow > div.avatars > div.avatar > img.avatarImg {
        border-radius: 50%;
        height: 1.5rem;
    }

    div.onlineRow > span.value {
        font-variant-numeric: lining-nums tabular-nums;
        margin-left: 12px;
    }
    div.onlineRow > span.label {
        margin-left: 6px;
        color: #ebebf599;
    }

    .skeleton {
        height: 18px;
        width: 80px;
    }

    @media (min-width: 768px) {
        .onlineSection {
            gap: 0.75rem;
            margin-bottom: 2rem;
        }
        .onlineSection > div.online {
            font-size: 1.25rem;
        }
        div.onlineRow {
            height: 31.98px;
        }
        div.onlineRow > div.avatars {
            min-width: 96px;
        }

        div.onlineRow > div.avatars > div.avatar > img.avatarImg {
            height: 2rem;
        }

        .skeleton {
            height: 32px;
            width: 140px;
        }
    }
</style>
