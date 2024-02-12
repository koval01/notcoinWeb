<script>
    import NotButton from "../../misc/NotButton.svelte";

    const joinSquad = () => {
        window.open("/", "_self");
    };
</script>

<div class="joinSection">
    <NotButton onClick={joinSquad}>Join squad</NotButton>
</div>

<style lang="sass">
  .joinSection
    margin-bottom: 3rem
    display: flex
    justify-content: center
    align-items: center

  @media (min-width: 768px)
    .joinSection
        margin-bottom: 5rem

</style>
