<script>
    import { getAvatarByName, handleImageError } from "../../../../utils.js";

    export let teamsDisplay, d;
</script>

<img 
    src={teamsDisplay ? d.logo ? d.logo : getAvatarByName(d.name) : d.avatar ? d.avatar : getAvatarByName(d.user?.firstName)} 
    alt="avatar" width="40" height="40" class="avatar" draggable="false" on:error={handleImageError}
/>

<style lang="sass">
    img.avatar
      width: 48px
      height: 48px
      min-width: 48px
      border-radius: 50%

</style>
