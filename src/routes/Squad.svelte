<script>
    import { onMount } from "svelte";

    let Header, Squad, Footer;

    onMount(async () => {
        const [HeaderModule, SquadModule, FooterModule] = await Promise.all([
            import("../elements/Header.svelte"),
            import("../elements/squad/Main.svelte"),
            import("../elements/Footer.svelte")
        ]);

        Header = HeaderModule.default;
        Squad = SquadModule.default;
        Footer = FooterModule.default;
    });

    export let slug;
</script>

<!-- Squad -->
    <svelte:component this={Header} headTitle="Notcoin" />
    <svelte:component this={Squad} slug={slug} />

    <svelte:component this={Footer}/>
<!-- Squad end -->
