<script lang="ts">
    import { squadData } from "../../../store";
    import { animateValue } from "../../../utils";

    let objValue: any;
</script>

<div class="flex font-semibold text-lg md:text-xl items-center justify-center mt-5 md:mt-8">
    <div class="flex font-normal items-center">
        Tap with
        {#if $squadData.loading}
            <div class="inline-flex skeleton w-32 md:w-40 h-8 md:h-10 m-0 mx-2 items-center">
                <div class="thickLine"></div>
            </div>
        {:else}
            <span bind:this={objValue} class="font-semibold text-2xl md:text-3xl backdrop-blur-md p-2 mx-2 rounded-2xl bg-[#ffffff1f]">
                { animateValue(objValue, $squadData.members) }
            </span>
        {/if}
        players
    </div>
</div>
