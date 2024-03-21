<script lang="ts">
    import { handleImageError, getAvatar } from "../../../../utils";

    export let d: object | any;
</script>

<div class="bg-transparent w-[48px] h-[48px] shrink-0 mr-[12px] rounded-[48px]">
    <img class="min-w-[48px] w-[48px] h-[48px] rounded-[48px]" src={getAvatar(d)} draggable="false" loading="lazy" alt="Avatar" on:error={handleImageError} />
</div>
