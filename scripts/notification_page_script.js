const html = `<div class="gp-container">
      <div class="gp-logo">G.</div>
      <br />
      <div>Footprint found!</div>
      <br />
      <div class="gp-row">
        <div class="gp-col-3">£4.90</div>
        <div class="gp-col-3">37 miles</div>
        <div class="gp-col-3">1.2 trees</div>
      </div>
      <div>
        <a
          href="https://twitter.com/intent/tweet?button_hashtag=button&ref_src=twsrc%5Etfw"
          class="gp-social-button gp-twitter"
          data-show-count="false"
          target="_blank"
        >
          <div class="gp-social-icon">
            <i class="fa fa-twitter"></i>
          </div>
        </a>
        <a
          class="gp-social-button gp-facebook"
          href="https://www.facebook.com/sharer/sharer.php?u=example.org"
          target="_blank"
        >
          <div class="gp-social-icon">
            <i class="fa fa-facebook"></i>
          </div>
        </a>
      </div>
    </div>

    <style>
      @import url("https://fonts.googleapis.com/css?family=Playfair+Display:900:italic&display=swap");
      @import url("https://fonts.googleapis.com/css?family=Arvo&display=swap");

      .gp-container {
        font-family: "Arvo", serif;
        width: 300px;
        height: 200px;
        position: absolute;
        right: 16px;
        top: 16px;
        background-color: white;
        z-index: 1000;
        -webkit-box-shadow: 0px 0px 3px 0px rgba(50, 50, 50, 0.64);
        -moz-box-shadow: 0px 0px 3px 0px rgba(50, 50, 50, 0.64);
        box-shadow: 0px 0px 3px 0px rgba(50, 50, 50, 0.64);
        padding: 16px 16px 16px 16px;
      }

      .gp-social-button {
        width: 32px;
        height: 32px;
        color: black;
        border: 2px solid black;
        border-radius: 4px;
        padding: 0 0 0 0;
      }

      .gp-social-button:hover {
        background-color: black;
        color: white;
      }

      .gp-twitter {
        position: absolute;
        right: 64px;
        bottom: 16px;
      }

      .gp-social-icon {
        margin: 7px 0px 0 8px;
      }

      .gp-facebook {
        position: absolute;
        right: 16px;
        bottom: 16px;
      }

      .gp-logo {
        font-family: "Playfair Display", serif, italic;
        font-weight: 900;
        font-size: x-large;
      }

      .gp-row {
        position: relative;
      }

      .gp-row::after {
        content: "";
        display: block;
        clear: both;
      }

      .gp-col-3 {
        width: 30%;
        float: left;
      }
    </style>`

const getData = async () => {
  var faLink = document.createElement("link")
  faLink.setAttribute(
    "href",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  )
  faLink.setAttribute("rel", "stylesheet")
  document.head.appendChild(faLink)

  const store = await browser.storage.local.get()
  const data = JSON.stringify(store.history[0])

  const container = document.createElement("div")
  container.innerHTML = html

  document.body.appendChild(container)
}

getData()
