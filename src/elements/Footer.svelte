<footer>
  <div class="footnote typeface-footnote margin">
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

  .footnote
    position: relative
    text-align: center
    z-index: 5

  span:first-child::before
    content: ""

  .typeface-footnote
    font-size: 13px
    font-weight: 400
    line-height: 18px

  .margin
    margin: 20px 0
    margin-top: 32px

  @media (max-width: 768px)
    span
      display: block
      margin-top: 5px
    
    span::before
      content: ""

</style>
