<script lang="js">
    import { getAvatarThumb, handleImageError } from "../../../utils";

    import Skeleton from "../../misc/Skeleton.svelte";

    export let avatarSrc = undefined, onError = handleImageError;
</script>

<div class="p-1 rounded-full bg-black -mr-3">
    <div class="h-6 w-6 md:h-8 md:w-8">
        {#if avatarSrc}
            <img
                class="rounded-full"
                src={avatarSrc ? avatarSrc : getAvatarThumb()}
                draggable="false"
                alt="Avatar"
                height="32px"
                width="32px"
                on:error={onError}
            />
        {:else}
            <Skeleton className="h-6 w-6 md:h-8 md:w-8 rounded-full m-0" isSkeleton={!avatarSrc} />
        {/if}
    </div>
</div>
