const formatScript = contact => {
  let tweet = `@${contact.twitter} - My carbon footprint for these items was £4.07! 😲 Don&#39;t leave it up to me to stamp it out 🥾 @GreenPay`
  let email =
    "My carbon footprint for these items was £4.07! 😲 Don&#39;t leave it up to me to stamp it out 🥾 @GreenPay"

  const html = `<div class="gp-container" id="gp-container">
      <div class="gp-message">Footprint found!</div>
      <a class="gp-close-button" id="gp-close-button">
        <i class="fa fa-times"></i>
      </a>
      <hr class="gp-hr"/>
      <div class="gp-row">
        <div class="gp-col-4">
          <div class="gp-info-box">
            <i class="fa fa-pound-sign"></i
            ><span class="gp-info-data">4.90</span>
          </div>
        </div>
        <div class="gp-col-3">
          <div class="gp-info-box">
            <i class="fa fa-tree"></i><span class="gp-info-data">1.7</span>
          </div>
        </div>
        <div class="gp-col-3">
          <div class="gp-info-box">
            <i class="fa fa-gas-pump"></i><span class="gp-info-data">84</span>
          </div>
        </div>
      </div>
      <div>
        <a
          href="mailto:${contact.email}?subject=Your Carbon Footprint&body=${email}"
          class="gp-social-button gp-mail"
          data-show-count="false"
          target="_blank"
        >
          <i class="fas fa-envelope-square"></i>
        </a>
        <a
          href="https://twitter.com/intent/tweet?button_hashtag=ClimateCrisis&ref_src=twsrc%5Etfw&text=${tweet}"
          class="gp-social-button gp-twitter"
          data-show-count="false"
          target="_blank"
        >
          <i class="fab fa-twitter-square"></i>
        </a>
        <a
          class="gp-social-button gp-facebook"
          href="https://www.facebook.com/sharer/sharer.php?u=example.org"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
        </a>
      </div>
    </div>

        <style>
      @import url("https://fonts.googleapis.com/css?family=Playfair+Display:900:italic&display=swap");
      @import url("https://fonts.googleapis.com/css?family=Arvo&display=swap");
      @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:900&display=swap");

      .gp-container {
        font-family: "Nunito Sans", serif;
        width: 380px;
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

      .gp-message {
        font-family: "Nunito Sans", serif;
        font-weight: 900;
        font-size: 26px;
        padding: 0 0 10px 0;
      }
      
      .gp-hr {
        margin: 0 0 0 0;
        border: 1px solid black;

      }

      .gp-info-box {
        font-size: 28px;
      }

      .gp-info-data {
        margin-left: 8px;
      }

      .gp-social-button {
        font-size: 36px;
        color: black;
      }

      .gp-social-button:hover {
        color: gray;
      }

      .gp-close-button {
        font-size: 24px;
        color: black;
        position: absolute;
        right: 16px;
        top: 18px;
      }

      .gp-close-button:hover {
        color: gray;
      }

      .gp-mail {
        position: absolute;
        right: 112px;
        bottom: 12px;
      }

      .gp-twitter {
        position: absolute;
        right: 64px;
        bottom: 12px;
      }

      .gp-facebook {
        position: absolute;
        right: 16px;
        bottom: 12px;
      }

      .gp-logo {
        font-family: "Playfair Display", serif, italic;
        font-weight: 900;
        font-size: 32px;
      }

      .gp-row {
        position: relative;
        padding-top: 20px;
      }

      .gp-row::after {
        content: "";
        display: block;
        clear: both;
      }

      .gp-col-3 {
        width: 30%;
        float: left;
        text-align: center;
      }

      .gp-col-4 {
        width: 40%;
        float: left;
        text-align: center;
      }
    </style>`

  return html
}

const getData = async () => {
  const faLink = document.createElement("script")
  faLink.setAttribute("src", "https://kit.fontawesome.com/7868dd5cb6.js")
  document.head.appendChild(faLink)

  const store = await browser.storage.local.get()
  contact = store.contact

  const container = document.createElement("div")
  container.innerHTML = formatScript(contact)

  document.body.appendChild(container)
  document.getElementById("gp-close-button").onclick = () => {
    document.getElementById("gp-container").outerHTML = ""
    browser.runtime.sendMessage({ action: "openAdmin" })
  }
}

getData()
