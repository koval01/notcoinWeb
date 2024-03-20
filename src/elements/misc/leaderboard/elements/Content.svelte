<script>
    import { animateValue, getName } from "../../../../utils";

    export let objValue, d;
</script>

<div class="innerContent">
    <div>
        <div class="title">{getName(d)}</div>
        <div class="coins" bind:this={objValue}>
            {animateValue(objValue, d.coins ? d.coins : d.totalCoins)}
        </div>
    </div>
</div>

<style lang="sass">
  .innerContent
    overflow: hidden
    flex-grow: 1

  .title
    color: #fff
    font-size: 17px
    line-height: 22px
    font-weight: 400
    white-space: nowrap
    text-overflow: ellipsis
    padding-right: 12px
    overflow: hidden
    margin-bottom: 2px
      
  .coins
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
