<script lang="ts">
    import Desktop from "./Desktop.svelte";
    import Mobile from "./Mobile.svelte";

    let innerWidth: number = 0;
    let isDesktop: boolean = innerWidth > 768;
    let Component: typeof Desktop | typeof Mobile = isDesktop ? Desktop : Mobile;

    $: {
        isDesktop = innerWidth > 768;
        Component = isDesktop ? Desktop : Mobile;
    };
</script>

<svelte:window bind:innerWidth={innerWidth} />

<div class="flex gap-4 mt-2 w-full md:mt-0">
    <svelte:component this={Component} />
</div>
