<script lang="js">
    import Stars from "./misc/Stars.svelte";
    import AppleButton from "../elements/misc/AppleButton.svelte";
    import Footer from "./Footer.svelte";

    import { goHome, goBack } from "../utils";
</script>

<div class="relative top-0 left-0 w-full h-full flex justify-center items-center">
    <div class="mt-[20vh] flex flex-col items-center">
        <Stars count={4} />
        <div class="pb-8">
            <div class="logo w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] object-cover relative"></div>
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

  .logo
    mask-image: url(/images/notlogo.webp)
    mask-size: cover
    background: linear-gradient(-32deg, #fff 25%, #ffc632 50%, #fff 60%)
    background-size: 400%
    background-position-x: -50%
    animation: shine 6s cubic-bezier(.3, 1, 1, 1) infinite

  @media (min-width: 768px)
    p span
      font-size: 1.2rem

  @keyframes shine
    0%
        background-position-x: -50%
    50%
        background-position-x: 120%
    100%
        background-position-x: -50%
  
</style>
