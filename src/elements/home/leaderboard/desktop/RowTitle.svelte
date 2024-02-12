<script>
    import { handleImageError, getAvatarByName } from "../../../../utils.js";

    export let rowName, avatar, href;
</script>

<a class="rowTitle" href={href}>
    <img 
      src={avatar ? avatar : getAvatarByName(rowName)} 
      alt="avatar" width="40" height="40" 
      class="avatar" draggable="false" 
      on:error={handleImageError}
    >
    <div class="rowName">{rowName}</div>
</a>

<style lang="sass">
    .rowTitle
      display: flex
      align-items: center
      gap: .75rem

      > .avatar
        width: 40px
        min-width: 40px
        height: 40px
        border-radius: 50%

      > .rowName
        font-weight: 500
        width: 100%
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
        max-width: 120px

</style>
