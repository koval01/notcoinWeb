<footer class="relative">
  <div class="text-xs font-normal my-[20px] mt-[32px] relative text-center z-5">
      <span>Built with 😆 by <a href="https://openbuilders.xyz" target="_blank">Open Builders</a></span>
      <span>Reassembled by <a href="https://git.koval.page" target="_blank">Yaroslav Koval</a></span>
  </div>
</footer>

<style lang="sass">
  a
    color: #ffce4e
    font-weight: 500
    text-decoration: none

  span
    transition: opacity .5s
    opacity: .65

  span:hover
    opacity: 1

  span::before
    content: "/ "

  span:first-child::before
    content: ""

  @media (max-width: 768px)
    span
      display: block
      margin-top: 5px
    
    span::before
      content: ""

</style>
