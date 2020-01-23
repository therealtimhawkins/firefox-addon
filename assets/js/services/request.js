export const request = url => {
  return new Promise((resolve, reject) => {
    const xmlHttp = new XMLHttpRequest()

    xmlHttp.onreadystatechange = function(event) {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          resolve(this.response)
        } else {
          reject("Request failed")
        }
      }
    }
    xmlHttp.open("GET", url, true)
    xmlHttp.send(null)
  })
}
