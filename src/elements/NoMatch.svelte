<script lang="js">
    import Stars from "./misc/Stars.svelte";
    import AppleButton from "../elements/misc/AppleButton.svelte";
    import Footer from "./Footer.svelte";

    import { goHome, goBack } from "../utils";
</script>

<div class="relative top-0 left-0 w-full h-full flex justify-center items-center">
    <div class="mt-[20vh] flex flex-col items-center">
        <Stars count={4} />
        <div class="logo-container pb-8">
            <div class="w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] bg-cover rounded-full cursor-pointer will-change-transform origin-center logo"></div>
        </div>
        <p>It seems... <span>{window.location.pathname}</span> does not exist</p>
        <div class="flex mt-4">
          <AppleButton onClick={goHome}>Home</AppleButton>
          <AppleButton onClick={goBack}>Back</AppleButton>
        </div>
    </div>
</div>
<div class="fixed w-full bottom-2">
    <Footer />
</div>

<style lang="sass">
  p, span
    font-size: 1rem
    font-weight: 300

  p
    padding: 0 24px
    
  span
    color: #ffc632

  .logo-container
    perspective: 400px

  .logo
    background-image: url(/images/coin.webp)
    transition: transform .1s ease-out
    animation: tapCoin 1.6s ease infinite

  @media (min-width: 768px)
    p span
      font-size: 1.2rem

  @keyframes tapCoin
    0%
      transform: rotateX(0deg) rotateY(0deg)

    50%
      transform: rotateX(0deg) rotateY(0deg)

    65%
      transform: rotateX(-18deg) rotateY(-16deg)

    70%
      transform: rotateX(0deg) rotateY(0deg)

    85%
      transform: rotateX(-18deg) rotateY(16deg)

    100%
      transform: rotateX(0deg) rotateY(0deg)
  
</style>
