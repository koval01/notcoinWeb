<script>
    import Chevron from "./elements/Chevron.svelte";

    import { battleRoyaleStat } from "../../../store.js";
    import { 
      getAvatarByName, 
      animateValue, 
      goTeam, 
      handleImageError 
    } from "../../../utils.js";

    let objValue = [];
    let teamsList = [];

    $: {
        teamsList = $battleRoyaleStat.list;
    }
</script>

{#each teamsList as d, i}
    <div class="innerWrapper padding-0 direction-row" on:click={goTeam(d.slug)}>
        <div class="prefix">
            {#if i < 3}
                <span class="medal">{['🥇','🥈','🥉'][i]}</span>
            {:else}
                <span>{i+1}</span>
            {/if}
        </div>
        <div class="imageContainer">
            <img src={d.logo ? d.logo : getAvatarByName(d.name)} draggable="false" alt="Avatar" on:error={handleImageError} />
        </div>
        <div class="innerContent">
            <div>
                <div class="title">{d.name}</div>
                <div class="coins" bind:this={objValue[i]}>
                    {animateValue(objValue[i], d.coins, 2e3)}
                </div>
            </div>
        </div>
        <Chevron />
    </div>
{/each}

<style lang="sass">
  .medal
    font-size: 28px

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
  
  .prefix
    min-width: 32px
    height: 32px
    margin-right: 10px
    display: flex
    align-items: center
    justify-content: center
    align-self: center
    font-size: 15px
    flex-shrink: 0
  
  .imageContainer
    background: #fff
    width: 48px
    height: 48px
    flex-shrink: 0
    margin-right: 12px
    border-radius: 48px
  
    > img
      min-width: 48px
      width: 48px
      height: 48px
      border-radius: 48px
  
  .innerContent
    overflow: hidden
    flex-grow: 1

    > div
      > .title
        color: #fff
        font-size: 17px
        line-height: 22px
        font-weight: 400
        white-space: nowrap
        text-overflow: ellipsis
        padding-right: 12px
        overflow: hidden
        margin-bottom: 2px
      
      > .coins
        position: relative
        padding-left: 20px
        font-size: 14px
        font-weight: 400
        line-height: 18px
        color: #ffffffbf
      
        &:before
          content: ""
          position: absolute
          top: 1.5px
          left: 0
          width: 16px
          height: 16px
          background: url(/images/penny.webp) center (center / contain)  

</style>
