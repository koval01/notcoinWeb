<script lang="ts">
    import NotButton from "../../misc/NotButton.svelte";
    import Members from "./Members.svelte";

    import { squadData } from "../../../store";

    let squadId: number = 0;

    const joinSquad = (): void => {
        window.open(`https://t.me/notcoin_bot?start=r_${squadId}_1`, "_self");
    };

    $: {
        squadId = $squadData.id;
    }
</script>

<div class="mb-12 mt-12 md:mt-20 md:mb-20 items-center justify-center">
    <div class="flex justify-center items-center">
        <NotButton onClick={joinSquad}>Join squad</NotButton>
    </div>
    <Members />
</div>
