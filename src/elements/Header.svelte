<script>
    export let headTitle = undefined;
</script>

<header>
    <div>
        <a
            class="headLink"
            href="https://cdn.joincommunity.xyz/notcoin/Notcoin_Whitepaper.pdf"
            >Whitepaper</a
        >
        {#if headTitle}
            <a class="homeLink" href="/">{headTitle}</a>
        {:else}
            <div></div>
        {/if}
        <div class="headSocials">
            <a href="https://twitter.com/thenotcoin">
                <img
                    src="/logos/x-logo.svg"
                    alt="X logo"
                    width="16"
                    height="16"
                />
            </a>
            <a href="https://t.me/notcoin">
                <img
                    src="/logos/tg-logo.svg"
                    alt="Telegram logo"
                    width="20"
                    height="20"
                />
            </a>
        </div>
    </div>
</header>

<style lang="sass">
  header
    padding: 1rem
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 3.75rem
    background-color: #000
    z-index: 1001
    border-color: #fff3
    border-bottom-width: 1px
    border-bottom-style: solid
  
    > div
      height: 100%
      margin: 0 auto
      max-width: 1040px
      display: grid
      grid-template-columns: 1fr 1fr 1fr
      align-items: center
      align-content: center
  
  .headLink
    font-weight: 600
    justify-self: start
  
  .headSocials
    justify-self: end
    display: flex
    align-items: center
    gap: 1rem

  .homeLink
    font-weight: 700
    font-size: 1.5rem
    justify-self: center
  
</style>
