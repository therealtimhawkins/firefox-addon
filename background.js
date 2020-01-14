browser.runtime.onMessage.addListener(router)

async function router(message) {
  switch (message.action) {
    case "getHtml":
      function onExecuted(result) {
        console.log(`Got html!`)
      }

      function onError(error) {
        console.log(`Error: ${error}`)
      }

      const executingPage = browser.tabs.executeScript({
        file: "/page_script.js",
        allFrames: true
      })

      executingPage.then(onExecuted, onError)
      break
    case "getSource":
      const productDetails = message.source
      const aboutMe = productDetails.getElementsByClassName("about-me")
      console.log("about me: ", JSON.stringify(aboutMe))
      break
    default:
      break
  }
}
