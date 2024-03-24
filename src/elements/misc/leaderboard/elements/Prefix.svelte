<script lang="ts">
    export let index: number;
</script>

<div class="prefix min-w-[32px] h-[32px] mr-[10px] flex items-center justify-center self-center text-[15px] shrink-0">
    {#if index < 3}
        <span class="text-[24px]">{index >= 0 ? ['🥇','🥈','🥉'][index] : '👑'}</span>
    {:else}
        <span>{index + 1}</span>
    {/if}
</div>
