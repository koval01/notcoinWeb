<script lang="js">
    import { X, Telegram } from "./icons";

    export let headTitle = undefined;
</script>

<header class="fixed p-4 top-0 left-0 w-full h-[3.75rem] z-50 bg-black border-[#fff3] border-b-[1px] border-solid">
    <div class="h-full max-w-[1040px] my-0 mx-auto grid grid-cols-3 items-center content-center">
        <a
            class="font-semibold justify-self-start"
            href="https://cdn.joincommunity.xyz/notcoin/Notcoin_Whitepaper.pdf"
            >Whitepaper</a
        >
        {#if headTitle}
            <a class="font-bold text-2xl justify-self-center" href="/">{headTitle}</a>
        {:else}
            <div></div>
        {/if}
        <div class="justify-self-end flex items-center gap-4">
            <a href="https://twitter.com/thenotcoin">
                <X class="w-4 h-4" />
            </a>
            <a href="https://t.me/notcoin">
                <Telegram class="w-5 h-5" />
            </a>
        </div>
    </div>
</header>
