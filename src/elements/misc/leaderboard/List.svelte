<script>
    import { goTeam } from "../../../utils.js";
    import { onMount } from "svelte";

    let Chevron, Prefix, Avatar, Content, Skeleton;

    onMount(async () => {
        const [
            ChevronModule,
            PrefixModule,
            AvatarModule,
            ContentModule,
            SkeletonModule
        ] = await Promise.all([
            import("./elements/Chevron.svelte"),
            import("./elements/Prefix.svelte"),
            import("./elements/Avatar.svelte"),
            import("./elements/Content.svelte"),
            import("./elements/Skeleton.svelte")
        ]);

        Chevron = ChevronModule.default;
        Prefix = PrefixModule.default;
        Avatar = AvatarModule.default;
        Content = ContentModule.default;
        Skeleton = SkeletonModule.default;
    });

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
          <svelte:component this={Prefix} index={i} />
          <svelte:component this={Avatar} d={d} />
          <svelte:component this={Content} objValue={objValue[i]} d={d} />
          <svelte:component this={Chevron} teamsDisplay={teamsDisplay} />
      </button>
  {/each}
{:else}
  {#each Array(5) as _}
      <svelte:component this={Skeleton} />
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
