<script lang="ts">
    import Chevron from "./elements/Chevron.svelte";
    import Prefix from "./elements/Prefix.svelte";
    import Avatar from "./elements/Avatar.svelte";
    import Content from "./elements/Content.svelte";
    import Skeleton from "./elements/Skeleton.svelte";

    import { goTeam } from "../../../utils";

    let List: any[] = [];
    let objValue: any[] = [];

    export let StoreObject: any;
    export let teamsDisplay: boolean;

    $: {
        List = StoreObject;
    }
</script>

{#if List.length > 0}
  {#each List as d, i}
      <button class="innerWrapper flex flex-row items-center rounded-[10px] min-h-[64px] select-none buttonFlush p-0 !pr-4 hover:bg-[#ffffff55] {teamsDisplay ? '' : 'disabled'}" on:click={goTeam(d.slug)}>
          <Prefix index={d.user?.lastName ? -1 : i} />
          <Avatar d={d} />
          <Content objValue={objValue[i]} d={d} />
          <Chevron teamsDisplay={teamsDisplay} />
      </button>
  {/each}
{:else}
  {#each Array(5) as _}
      <Skeleton />
  {/each}
{/if}

<style lang="sass">
  .innerWrapper
    transition: background-color .15s

  .innerWrapper.disabled
    cursor: default
  
  .innerWrapper.disabled:hover
    background-color: transparent

</style>
