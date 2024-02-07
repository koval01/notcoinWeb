<script>
    import { stat } from '../../store.js';
</script>

<div class="balanceSection">
    <h3 class="balanceTitle">total balance</h3>
    <div class="container">
        <img class="coin" src="/images/coin.png" draggable="false" alt="Coin">
        <div class="value">
            {#if $stat.loading}
                <div class="skeleton" style="opacity: 1;">
                    <div class="thickLine"></div>
                </div>
            {:else}
                {$stat.balanceCoins.toLocaleString()}
            {/if}
        </div>
    </div>
</div>

<style>
    .balanceSection {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        align-items: center;
        margin-bottom: .5rem;
    }
    .balanceTitle {
        color: #ffffff80;
        letter-spacing: .25rem;
        font-size: .6rem;
        text-transform: uppercase;
    }
    .balanceSection > div.container {
        display: flex;
        gap: .5rem;
        align-items: center;
    }
    .balanceSection > div.container > img.coin {
        width: 2.5rem;
        height: 2.5rem;
    }
    .balanceSection > div.container > div.value {
        font-size: 1.3rem;
        font-weight: 800;
        font-variant-numeric: lining-nums tabular-nums;
    }

    @media (min-width: 420px) {
        .balanceSection > div.container > div.value {
            font-size: 1.6rem;
        }
    }

    @media (min-width: 520px) {
        .balanceTitle {
            font-size: .75rem;
        }
        .balanceSection > div.container > div.value {
            font-size: 2rem;
        }
    }

    @media (min-width: 768px) {
        .balanceSection {
            margin-bottom: 1.5rem;
        }
        .balanceTitle {
            font-size: 1rem;
        }
        .balanceSection > div.container {
            gap: 1rem;
        }
        .balanceSection > div.container > img.coin {
            width: 4.5rem;
            height: 4.5rem;
        }
        .balanceSection > div.container > div.value {
            font-size: 3rem;
        }
    }

    @media (min-width: 920px) {
        .balanceSection > div.container > div.value {
            font-size: 3.75rem;
        }
    }
</style>
