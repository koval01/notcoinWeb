<script>
    import Avatar from "./Avatar.svelte";

    import { getAvatarThumb } from "../../../utils.js";

    export let users, preloadImgState;
</script>

<div class="avatars">
    {#if preloadImgState === void 0}
        {#each Array(3) as _}
            <Avatar avatarSrc={getAvatarThumb()} onError={void 0} />
        {/each}
    {:else}
        {#each users as { avatar }}
            <Avatar avatarSrc={avatar} />
        {/each}
    {/if}
</div>

<style lang="sass">
    .avatars
      display: flex
      padding-right: .75rem
      min-width: 72px

    @media (min-width: 768px)
      .avatars
        min-width: 96px

</style>
