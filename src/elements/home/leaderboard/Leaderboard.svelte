<script lang="ts">
    import { onMount } from "svelte";

    let Desktop: any, Mobile: any;

    let isDesktop: boolean = false;

    const checkScreenWidth = async () => {
        isDesktop = window.innerWidth >= 890;

        if (isDesktop && !Desktop) {
            Desktop = (await import("./Desktop.svelte")).default; // Dynamically import Desktop component
            return;
        }
        if (!Mobile) Mobile = (await import("./Mobile.svelte")).default;
    };

    window.addEventListener('resize', checkScreenWidth);

    onMount(async () => {
        checkScreenWidth();
    });
</script>

<div class="flex gap-4 mt-2 w-full md:mt-0">
    {#if isDesktop}
        <svelte:component this={Desktop} />
    {:else}
        <svelte:component this={Mobile} />
    {/if}
</div>
