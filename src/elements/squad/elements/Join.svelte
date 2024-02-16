<script>
    import NotButton from "../../misc/NotButton.svelte";

    import { squadData} from "../../../store";

    let squadId = 0;
    const joinSquad = () => {
        window.open(`https://t.me/notcoin_bot?start=r_${squadId}_1`, "_self");
    };

    $: {
      squadId = $squadData.id;
    }
</script>

<div class="joinSection">
    <svelte:component this={NotButton} onClick={joinSquad}>Join squad</svelte:component>
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
