<script>
    import { getAvatarThumb, handleImageError } from "../../../utils.js";

    export let avatarSrc = undefined, onError = handleImageError;
</script>

<div class="avatar">
    <img
        class="avatarImg"
        src={avatarSrc ? avatarSrc : getAvatarThumb()}
        draggable="false"
        alt="Avatar"
        height="32px"
        width="32px"
        on:error={onError}
    />
</div>

<style lang="sass">
    .avatar
      padding: .25rem
      border-radius: 50%
      background-color: #000
      margin-right: -.75rem
  
    .avatarImg
      border-radius: 50%
      height: 1.5rem
      width: 1.5rem

    @media (min-width: 768px)
      .avatarImg
        height: 2rem
        width: 2rem

</style>
