<div class="item" style="opacity:1">
    <div class="prefix"></div>
    <div class="media"></div>
    <div class="wrap">
        <div class="title"></div>
        <div class="content"></div>
    </div>
</div>

<style lang="sass">
  .item
    display: flex
    align-items: center
    user-select: none
    min-height: 64px
    padding: 8px 8px 8px 4px
    --color-skeleton-bg:#ffffff1f

  .prefix
    width: 24px
    min-width: 24px
    height: 8px
    margin-left: 4px
    margin-right: 14px
    background-color: var(--color-skeleton-bg)
    border-radius: 16px

  .media
    width: 48px
    height: 48px
    border-radius: 48px
    margin-right: 12px
    flex-shrink: 0
    background-color: var(--color-skeleton-bg)

  .wrap
    width: 100%

  .title
    width: 40%
    height: 8px
    background-color: var(--color-skeleton-bg)
    margin-bottom: 16px
    border-radius: 16px

  .content
    width: 70%
    height: 8px
    background-color: var(--color-skeleton-bg)
    border-radius: 16px

</style>
