<script>
    import Chevron from "./elements/Chevron.svelte";
    import Prefix from "./elements/Prefix.svelte";
    import Avatar from "./elements/Avatar.svelte";
    import Content from "./elements/Content.svelte";
    import Skeleton from "./elements/Skeleton.svelte";

    import { goTeam } from "../../../utils";

    let List = [];
    let objValue = [];

    export let StoreObject, teamsDisplay;

    $: {
        List = StoreObject;
    }
</script>

{#if List.length > 0}
  {#each List as d, i}
      <button class="innerWrapper padding-0 direction-row buttonFlush {teamsDisplay ? '' : 'disabled'}" on:click={goTeam(d.slug)}>
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
  .padding-0
    padding: 0
  
  .direction-row
    display: flex
    flex-direction: row
  
  .innerWrapper
    padding: 8px 8px 8px 4px
    min-height: 64px
    user-select: none
    display: flex
    align-items: center
    border-radius: 10px
    transition: background-color .2s

  .innerWrapper:hover
    background-color: #ffffff55

  .innerWrapper.disabled
    cursor: default
  
  .innerWrapper.disabled:hover
    background-color: transparent

</style>
