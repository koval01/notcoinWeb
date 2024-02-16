<script>
    import Stars from "./misc/Stars.svelte";
    import AppleButton from "../elements/misc/AppleButton.svelte";
    import Footer from "./Footer.svelte";

    import { goHome, goBack } from "../utils";
</script>

<div class="content">
    <div>
        <svelte:component this={Stars} count={6} />
        <div>
            <div class="logo"></div>
        </div>
        <p>It seems... <span>{window.location.pathname}</span> does not exist</p>
        <div class="buttonsContainer">
          <svelte:component this={AppleButton} onClick={goHome}>Home</svelte:component>
          <svelte:component this={AppleButton} onClick={goBack}>Back</svelte:component>
        </div>
    </div>
</div>
<div class="footer">
    <svelte:component this={Footer} />
</div>

<style lang="sass">
.buttonsContainer
  display: flex
  margin-top: 24px

p, span
  font-size: 1rem
  font-weight: 300

p
  padding: 0 24px
  
span
  color: #ffc632

.footer
  position: fixed
  width: 100%
  bottom: 12px

.content
  position: relative
  top: 0
  left: 0
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center

  > div
    margin-top: 20vh
    display: flex
    flex-direction: column
    align-items: center

    > div
      perspective: 400px
      padding-bottom: 3rem

      .logo
        width: 240px
        height: 240px
        border-radius: 50%
        background-image: url(/images/coin.webp)
        background-size: cover
        transform-origin: center
        will-change: transform
        transition: transform .1s ease-out
        animation: tapAnimation .6s ease infinite
        cursor: pointer

@media (min-width: 768px)
  .content > div 
    > p span
      font-size: 1.2rem
    
    > div
      .logo
        width: 300px
        height: 300px

@media (max-height: 640px)
  .content > div
    > div
      .logo
        width: 200px
        height: 200px
  
</style>
