<script>
    import { handleImageError, getAvatarThumb } from "../../../utils.js";

    export let users, preloadImgState;
</script>

<div class="avatars">
    {#if preloadImgState === void 0}
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

<style lang="sass">
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

    @media (min-width: 768px)
      div.avatars
        min-width: 96px

        > div.avatar > img.avatarImg
          height: 2rem
          width: 2rem

</style>
