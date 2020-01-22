browser.runtime.onMessage.addListener(router)

async function router(message) {
  console.log("hit")
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
      console.log("<<<<<<<<<<<<<<<<<<<<<<HTML>>>>>>>>>>>>>>>>>>>>>>")
      const items = message.source.items
      console.log("no of items: ", items.length)
      break
    default:
      break
  }
}
