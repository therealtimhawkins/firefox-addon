let items

function connected(page_script) {
  browser.tabs.query({ currentWindow: true, active: true }).then(tabs => {
    const url = tabs[0].url
    urlParser(url)
    page_script.postMessage({ url })
  })
}

browser.runtime.onConnect.addListener(connected)
browser.runtime.onMessage.addListener(router)

function urlParser(url) {
  const pathArray = url.split("/")
  const host = pathArray[2].replace("www.", "")
  console.log(host)
}

async function router(message) {
  console.log("message action: ", message.action)
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
