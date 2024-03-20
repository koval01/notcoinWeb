<script>
    import { handleImageError, getAvatar } from "../../../../utils";

    export let d;
</script>

<div class="imageContainer">
    <img src={getAvatar(d)} draggable="false" loading="lazy" alt="Avatar" on:error={handleImageError} />
</div>

<style lang="sass">
  .imageContainer
    background: transparent
    width: 48px
    height: 48px
    flex-shrink: 0
    margin-right: 12px
    border-radius: 48px
  
  img
    min-width: 48px
    width: 48px
    height: 48px
    border-radius: 48px
      
</style>
