const html = `<div class="gp-container">
  <div class="logo">G.</div>
  <div>Footprint found!</div>
  <div>
    <div>£4.90</div>
    <div>37 miles</div>
    <div>1.2 trees</div>
  </div>
  <div>
    <a
      href="https://twitter.com/intent/tweet?button_hashtag=button&ref_src=twsrc%5Etfw"
      class="twitter-hashtag-button"
      data-show-count="false"
      target="_blank"
      >Tweet</a
    >
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    ></script>
    <a href="https://www.facebook.com/sharer/sharer.php?u=example.org" target="_blank">
      Share
    </a>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css?family=Playfair+Display:900:italic&display=swap");

  .gp-container {
    width: 300px;
    height: 200px;
    position: absolute;
    right: 16px;
    top: 16px;
    background-color: white;
    z-index: 1000;
    -webkit-box-shadow: 0px 0px 3px 0px rgba(50, 50, 50, 0.64);
    -moz-box-shadow:    0px 0px 3px 0px rgba(50, 50, 50, 0.64);
    box-shadow:         0px 0px 3px 0px rgba(50, 50, 50, 0.64);
    padding: 16px 16px 16px 16px;
  }

  .logo {
    font-family: "Playfair Display", serif, italic;
    font-weight: 900;
    font-size: x-large;
  }
</style>`

const getData = async () => {
  const store = await browser.storage.local.get()
  const data = JSON.stringify(store.history[0])

  const container = document.createElement("div")
  container.innerHTML = html

  document.body.appendChild(container)
}

getData()
