<script>
    import { onMount } from "svelte";

    let Header, Main, Footer;

    onMount(async () => {
        const [HeaderModule, MainModule, FooterModule] = await Promise.all([
            import("../elements/Header.svelte"),
            import("../elements/home/Main.svelte"),
            import("../elements/Footer.svelte")
        ]);

        Header = HeaderModule.default;
        Main = MainModule.default;
        Footer = FooterModule.default;
    });
</script>

<!-- Home -->
    <svelte:component this={Header} />
    <svelte:component this={Main} />
    <svelte:component this={Footer} />
<!-- Home end -->
