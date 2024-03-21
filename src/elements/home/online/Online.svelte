<script lang="ts">
    import Avatars from "./Avatars.svelte";
    import Value from "./Value.svelte";
    import Label from "./Label.svelte";

    import { stat, allStatUsers } from "../../../store";
    import { getRandomElements } from "../../../utils";

    let usersTotal: { avatar: string }[] = [];
    let usersOnlineToday: { avatar: string }[] = [];
    let usersOnlineNow: { avatar: string }[] = [];

    let objValues: any[] = [];
    let preloadImgState: boolean | undefined;

    // Throttle function to update random users
    let throttledUpdateRandomUsers: NodeJS.Timeout | null = null;

    const updateRandomUsers = async (): Promise<void> => {
        const usersWithAvatar = $allStatUsers.leaderboard.filter((user: any) => user.avatar);

        usersTotal = getRandomElements(usersWithAvatar, 3).map((user: any) => ({ avatar: user.avatar }));
        usersOnlineToday = getRandomElements(usersWithAvatar, 3).map((user: any) => ({ avatar: user.avatar }));
        usersOnlineNow = getRandomElements(usersWithAvatar, 3).map((user: any) => ({ avatar: user.avatar }));

        preloadImgState = false;
    };

    // To prevent avatars from being updated twice
    const throttleUpdateRandomUsers = (): void => {
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

<div class="flex gap-2 items-center mb-6 justify-center md:gap-3 md:mb-8">
    <div class="text-base md:text-lg">
        {#each [usersTotal, usersOnlineToday, usersOnlineNow] as users, i}
            <div class="flex items-center mb-[12px]">
                <Avatars preloadImgState={preloadImgState} users={users} />
                <Value index={i} objValues={objValues} stat={$stat} />
                <Label index={i} />
            </div>
        {/each}
    </div>
</div>
