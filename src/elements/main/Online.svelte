<script>
    import { stat, allStatUsers } from '../../store.js';
    import { getRandomElements } from '../../utils.js';

    let usersTotal = [];
    let usersOnlineToday = [];
    let usersOnlineNow = [];

    const getRandomUsers = (count, users) => {
        const randomUsers = [];
        if (users && users.length > 0) {
            for (let i = 0; i < count; i++) {
                const randomUser = users[Math.floor(Math.random() * users.length)];
                randomUsers.push({ avatar: randomUser.avatar });
            }
        }
        return randomUsers;
    };

    const updateRandomUsers = () => {
        usersTotal = getRandomUsers(3, $allStatUsers.leaderboard);
        usersOnlineToday = getRandomUsers(3, $allStatUsers.leaderboard);
        usersOnlineNow = getRandomUsers(3, $allStatUsers.leaderboard);
    };

    $: {
        if ($stat && !$stat.loading) {
            updateRandomUsers();
        }
    }
</script>

<div class="onlineSection">
    <div class="online">
        {#each [usersTotal, usersOnlineToday, usersOnlineNow] as users, i}
            <div class="onlineRow">
                <div class="avatars">
                    {#each users as { avatar }, j}
                        <div class="avatar" key={i + '-' + j}>
                            <img class="avatarImg" src={avatar} draggable="false" alt="Avatar">
                        </div>
                    {/each}
                </div>
                <span class="value">
                    {#if $stat.loading}
                        <div class="skeleton" style="opacity: 1;">
                            <div class="thickLine"></div>
                        </div>
                    {:else}
                        {#if i === 0}
                            {$stat.users.toLocaleString()}
                        {:else if i === 1}
                            {$stat.onlineToday.toLocaleString()}
                        {:else}
                            {$stat.online.toLocaleString()}
                        {/if}
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
        gap: .5rem;
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
    }
    div.onlineRow > div.avatars {
        display: flex;
        padding-right: .75rem;
        min-width: 72px;
    }
    div.onlineRow > div.avatars > div.avatar {
        padding: .25rem;
        border-radius: 50%;
        background-color: #000;
        margin-right: -.75rem;
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
            gap: .75rem;
            margin-bottom: 2rem;
        }
        .onlineSection > div.online {
            font-size: 1.25rem;
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