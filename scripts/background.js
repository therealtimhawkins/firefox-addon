let items = []
let name

function connected(page_script) {
  browser.tabs.query({ currentWindow: true, active: true }).then(async tabs => {
    const url = urlParser(tabs[0].url)
    name = url
    const data = await require("../urlConfigs/" + url + "/config.json")
    browser.storage.local.set({ contact: data.contact })

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
      const executingPage = browser.tabs.executeScript({
        file: "/scripts/page_script.js",
        allFrames: true
      })

      executingPage.then(onExecuted, onError)
      break
    case "setItems":
      const store = await browser.storage.local.get()
      const history = store.history || []
      const time = new Date().getTime()

      items = message.items
      // SET FOOTPRINT

      history.push({ name, items, time })
      browser.storage.local.set({ history })

      browser.tabs.executeScript({
        file: "/scripts/notification_page_script.js",
        allFrames: true
      })
      break
    case "getItems":
      if (items.length) {
        browser.runtime.sendMessage({ action: "returnItems", items, name })
      }
      items = null
    case "openAdmin":
      browser.tabs.create({ url: "app.html" })
      break
    default:
      break
  }
}
