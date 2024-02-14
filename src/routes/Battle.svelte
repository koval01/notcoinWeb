<script>
    import { onMount } from "svelte";

    let Battle;

    onMount(async () => {
        const [BattleModule] = await Promise.all([
            import("../elements/battle/Main.svelte")
        ]);

        Battle = BattleModule.default;
    });
</script>

<!-- Battle -->
    <svelte:component this={Battle} />
<!-- Battle end -->
