<script lang="ts">
    import Avatar from "./Avatar.svelte";

    export let users: any, preloadImgState: any;
</script>

<div class="flex pr-3 min-w-[72px] md:min-w-[96px]">
    {#if preloadImgState === void 0}
        {#each Array(3) as _}
            <Avatar avatarSrc={void 0} onError={void 0} />
        {/each}
    {:else}
        {#each users as { avatar }}
            <Avatar avatarSrc={avatar} />
        {/each}
    {/if}
</div>
