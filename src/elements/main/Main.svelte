<script>
    import Hero from './Hero.svelte';
    import Balance from './Balance.svelte';
    import Online from './Online.svelte';

    import { onMount, onDestroy } from 'svelte';
    import { fetchData } from '../../api.js';
    import { stat } from '../../store.js';

    let intervalId;

    onMount(async () => {
        const fetchStatData = async () => {
            stat.update(prev => ({ ...prev }));

            try {
                const data = await fetchData('/clicker/core/stat', { _convertStringToNumber: true });
                stat.set({ ...data, loading: false });
            } catch (error) {
                setTimeout(fetchStatData, 1e3);
            }
        };

        fetchStatData();

        intervalId = setInterval(fetchStatData, 1e4);
    });

    onDestroy(() => {
        clearInterval(intervalId);
    });
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