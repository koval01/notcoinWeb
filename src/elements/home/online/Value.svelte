<script lang="ts">
    import { animateValue } from "../../../utils";

    export let index: number, objValues: any, stat: object | any;
</script>

<span class="ml-3 lining-nums tabular-nums" bind:this={objValues[index]}>
    {#if stat.loading}
        <div class="skeleton h-5 md:h-8 {index === 0 ? 'w-32 md:w-40' : index === 1 ? 'w-28 md:w-36' : 'w-24 md:w-28'}">
            <div class="thickLine"></div>
        </div>
    {:else}
        {animateValue(objValues[index], [stat.users, stat.onlineToday, stat.online][index])}
    {/if}
</span>
