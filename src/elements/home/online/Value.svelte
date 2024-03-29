<script lang="ts">
    import { animateValue } from "../../../utils";

    import Skeleton from "../../misc/Skeleton.svelte";

    export let index: number, objValues: any, stat: object | any;
</script>

<span class="ml-3 lining-nums tabular-nums" bind:this={objValues[index]}>
    {#if stat.loading}
        <Skeleton className="h-5 md:h-8 {index === 0 ? 'w-32 md:w-40' : index === 1 ? 'w-28 md:w-36' : 'w-24 md:w-28'}" />
    {:else}
        {@const variable = [stat.users, stat.onlineToday, stat.online][index]}
        { variable ? animateValue(objValues[index], variable) : 0 }
    {/if}
</span>
