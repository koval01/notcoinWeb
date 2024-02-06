<script>
    import Hero from './Hero.svelte';
    import Balance from './Balance.svelte';
    import Online from './Online.svelte';
</script>

<div class="wrapper">
    <div class="container">
        <div>
            <Hero />
            <Balance />
            <Online />
        </div>
    </div>
</div>

<style>
    div.wrapper {
        position: relative;
        background-color: #000;
        min-height: 100vh;
    }
    div.wrapper > div.container {
        margin: 0 auto;
        max-width: 1040px;
        padding: 0 1rem;
    }
    div.wrapper > div.container > div {
        padding-bottom: 4rem;
        width: 100%;
    }
</style>