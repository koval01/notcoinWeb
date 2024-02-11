<script>
    import List from "./List.svelte";
</script>

<div class="padding-16-0 direction-column w-100">
  <div class="leaderboard">
      <div class="listInner">
          <div class="padding-0 direction-column willChange">
              <List />
          </div>
      </div>
  </div>
</div>

<style lang="sass">
  .w-100
    width: 100%

  .padding-16-0
    padding: 16px 0

  .padding-0
    padding: 0

  .direction-column
    display: flex
    flex-direction: column

  .leaderboard
    border-radius: 20px
    background: rgba(255, 255, 255, 0.12)
    backdrop-filter: blur(24px)
    -webkit-backdrop-filter: blur(24px)

    > .listInner
      padding: 12px 12px 16px

  .willChange
    will-change: opacity

</style>
