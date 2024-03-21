<script lang="ts">
    import NotButton from "../../misc/NotButton.svelte";
    import { squadData } from "../../../store";

    let squadId: number = 0;

    const joinSquad = (): void => {
        window.open(`https://t.me/notcoin_bot?start=r_${squadId}_1`, "_self");
    };

    $: {
        squadId = $squadData.id;
    }
</script>

<div class="mb-12 flex justify-center items-center md:mb-20">
    <NotButton onClick={joinSquad}>Join squad</NotButton>
</div>
