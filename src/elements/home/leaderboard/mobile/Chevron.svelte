<script>
    import { teamLink } from "../../../../utils.js";

    export let teamsDisplay, d;
</script>

{#if teamsDisplay}
    <a href={teamLink(d.slug)}>
        <img 
            src="/images/chevron.svg" 
            alt="chevron" class="chevron"
            draggable="false"
        >
    </a>
{:else}
    <div></div>
{/if}

<style lang="sass">
    a 
      > .chevron
        transform: rotate(180deg)
        height: 18px
        opacity: .3

</style>
