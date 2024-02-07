<script>
    import { stat } from "../../store.js";
</script>

<div class="totalSection">
    <div class="container">
        <div class="iconHolder">
            <img
                class="penny1"
                src="/images/penny.png"
                draggable="false"
                alt="burned icon"
            />
            <img
                class="penny2"
                src="/images/penny.png"
                draggable="false"
                alt="burned icon"
            />
            <img
                class="penny3"
                src="/images/penny.png"
                draggable="false"
                alt="burned icon"
            />
        </div>
        <div class="meme">
            <img
                class="memeImg issued"
                src="/images/memes/doge.png"
                draggable="false"
                alt="doge meme"
            />
        </div>
        <div class="valueContainer">
            <span class="value valueIssued">
                {#if $stat.loading}
                    <div class="skeleton" style="opacity: 1;">
                        <div class="thickLine"></div>
                    </div>
                {:else}
                    {$stat.minedCoins.toLocaleString()}
                {/if}
            </span>
            <span class="title">total issued</span>
        </div>
    </div>
    <div class="container">
        <div class="iconHolder">
            <img
                class="flame1"
                src="/images/flame.png"
                draggable="false"
                alt="burned icon"
            />
            <img
                class="flame2"
                src="/images/flame.png"
                draggable="false"
                alt="burned icon"
            />
            <img
                class="flame3"
                src="/images/flame.png"
                draggable="false"
                alt="burned icon"
            />
            <img
                class="flame4"
                src="/images/flame.png"
                draggable="false"
                alt="burned icon"
            />
            <img
                class="flame5"
                src="/images/flame.png"
                draggable="false"
                alt="burned icon"
            />
            <img
                class="flame6"
                src="/images/flame.png"
                draggable="false"
                alt="burned icon"
            />
        </div>
        <div class="meme burned">
            <img
                class="memeImg burned"
                src="/images/memes/fine.png"
                draggable="false"
                alt="this is fine meme"
            />
        </div>
        <div class="valueContainer">
            <span class="value valueBurned">
                {#if $stat.loading}
                    <div class="skeleton" style="opacity: 1;">
                        <div class="thickLine"></div>
                    </div>
                {:else}
                    {$stat.burnedCoins.toLocaleString()}
                {/if}
            </span>
            <span class="title">total burned</span>
        </div>
    </div>
</div>

<style>
    div.totalSection {
        display: grid;
        grid-template-rows: repeat(2, minmax(0, 1fr));
        grid-template-columns: none;
        gap: 1rem;
        margin-bottom: 1rem;
    }
    div.totalSection > div.container {
        position: relative;
        display: flex;
        padding: 1rem;
        align-items: center;
        gap: 1.5rem;
        border-width: 2px;
        border-color: #ffffff1a;
        border-radius: 1rem;
        border-style: solid;
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        z-index: 20;
    }

    div.totalSection > div.container > div.iconHolder {
        position: absolute;
        height: 100%;
        width: 100%;
        display: none;
    }

    div.totalSection > div.container > div.iconHolder * {
        position: absolute;
    }

    img.penny1 {
        width: 44px;
        height: 44px;
        top: -1.5rem;
        left: 25rem;
    }
    img.penny2 {
        width: 22px;
        height: 22px;
        top: 4rem;
        left: 27rem;
    }
    img.penny3 {
        width: 27px;
        height: 27px;
        top: 6rem;
        left: 24rem;
    }

    img.flame1 {
        width: 20px;
        height: 20px;
        top: -2.2rem;
        left: 1.5rem;
    }
    img.flame2 {
        width: 40px;
        height: 40px;
        top: -1.5rem;
        left: -2rem;
    }
    img.flame3 {
        width: 26px;
        height: 26px;
        top: -2.3rem;
        left: 20rem;
    }
    img.flame4 {
        width: 38px;
        height: 38px;
        top: -1.5rem;
        left: 23rem;
    }
    img.flame5 {
        width: 42px;
        height: 42px;
        top: 5rem;
        left: 22rem;
    }
    img.flame6 {
        width: 32px;
        height: 32px;
        top: 3rem;
        left: 26rem;
    }

    div.meme > img.memeImg {
        width: auto;
        max-width: 57px;
    }
    div.meme > img.memeImg.issued {
        transform: scaleX(-1);
    }
    div.meme > img.memeImg.burned {
        border-radius: 5px;
    }

    div.meme.burned {
        background-color: #fff;
        padding: 3px;
        border-radius: 7px;
    }

    div.valueContainer {
        gap: .25rem;
        display: flex;
        flex-direction: column;
    }
    div.valueContainer > span.value {
        font-size: 1.375rem;
        font-weight: 800;
        font-variant-numeric: lining-nums tabular-nums;
    }
    div.valueContainer > span.valueIssued {
        color: #ffc224;
    }
    div.valueContainer > span.valueBurned {
        color: #ff6b2d;
    }

    div.valueContainer > span.title {
        color: #ffffff80;
        letter-spacing: .25rem;
        font-size: .75rem;
        text-transform: uppercase;
    }

    @media (min-width: 768px) {
        div.totalSection {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-template-rows: none;
        }
        div.totalSection > div.container {
            padding: 1rem 2rem;
            gap: 20px;
        }

        div.meme.burned {
            padding: 4px;
            border-radius: 10px;
        }
        div.meme > img.memeImg.burned {
            border-radius: 8px;
        }

        div.meme > img.memeImg {
            max-width: 100px;
        }

        div.valueContainer > span.value {
            font-size: 27px;
        }
    }

    @media (min-width: 1000px) {
        div.totalSection > div.container > div.iconHolder {
            display: initial;
        }
    }

    @media (max-width: 1092px) {
        div.valueContainer > span.value {
            font-size: 23px;
        }
    }
    @media (max-width: 960px) {
        div.valueContainer > span.value {
            font-size: 21px;
        }
        div.meme > img.memeImg {
            width: auto;
            max-width: 80px;
        }
    }
    @media (max-width: 878px) {
        div.valueContainer > span.value {
            font-size: 18px;
        }
    }
</style>
