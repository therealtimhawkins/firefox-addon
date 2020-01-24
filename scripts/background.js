let items

function connected(page_script) {
  browser.tabs.query({ currentWindow: true, active: true }).then(async tabs => {
    const url = urlParser(tabs[0].url)
    console.log("url: ", url)
    const data = await require("../urlConfigs/" + url + "/config.json")
    console.log("data: ", data)
    if (data) {
      page_script.postMessage({
        data
      })
    }
  })
}

browser.runtime.onConnect.addListener(connected)
browser.runtime.onMessage.addListener(router)

function urlParser(url) {
  const pathArray = url.split("/")
  const host = pathArray[2].split(".")
  return host[1]
}

async function router(message) {
  switch (message.action) {
    case "scrapeItems":
      function onExecuted(result) {
        console.log(`Got html!`)
      }

      function onError(error) {
        console.log(`Error: ${error}`)
      }

      const executingPage = browser.tabs.executeScript({
        file: "/scripts/page_script.js",
        allFrames: true
      })

      executingPage.then(onExecuted, onError)
      break
    case "setItems":
      items = message.items
      break
    case "getItems":
      browser.runtime.sendMessage({ action: "returnItems", items })
    default:
      break
  }
}
