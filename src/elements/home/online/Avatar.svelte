<script lang="js">
    import { getAvatarThumb, handleImageError } from "../../../utils";

    export let avatarSrc = undefined, onError = handleImageError;
</script>

<div class="p-1 rounded-full bg-black -mr-3">
    <img
        class="rounded-full h-6 w-6 md:h-8 md:w-8"
        src={avatarSrc ? avatarSrc : getAvatarThumb()}
        draggable="false"
        alt="Avatar"
        height="32px"
        width="32px"
        on:error={onError}
    />
</div>
