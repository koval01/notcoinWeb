<div class="heroSection">
    <div class="avatar"><img draggable="false" alt=""></div>
    <div class="heroTitle">
        <div class="skeleton" style="opacity: 1;">
            <div class="thickLine"></div>
        </div>
    </div>
</div>

<style lang="sass">
  .heroSection
    margin-top: 9rem
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    margin-bottom: 2rem
    gap: .75rem

  .heroTitle
    font-weight: 800
    font-size: 2rem
    overflow: hidden
    text-overflow: ellipsis
    max-width: 100%
    text-wrap: nowrap

  .avatar
    background-color: #fff
    padding: .5rem
    border-radius: 1.25rem

    > img
      border-radius: 1rem
      height: 7.5rem
      width: 7.5rem

    @media (min-width: 768px)
      .heroSection
        gap: 1.5rem
        margin-bottom: 3rem

      .heroTitle
        font-size: 3.75rem

      .avatar > img
        height: 11rem
        width: 11rem

</style>
