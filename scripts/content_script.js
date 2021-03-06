const getHtml = url => {
  return new Promise((resolve, reject) => {
    const xmlHttp = new XMLHttpRequest()

    xmlHttp.onreadystatechange = function(event) {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          resolve(this.response)
        } else {
          reject("Answer status: %d (%s)", this.status, this.statusText)
        }
      }
    }
    xmlHttp.open("GET", url, true)
    xmlHttp.send(null)
  })
}

browser.runtime.sendMessage({ action: "scrapeItems" })
