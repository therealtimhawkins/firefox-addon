var script = document.createElement("script")
script.onload = function() {
  const container = document.createElement("div")
  container.setAttribute(
    "style",
    "position: absolute;right:16px;top:16px; width: 300px; height: 100px; background-color: white; z-index: 1000; -webkit-box-shadow: 0px 0px 11px 0px rgba(50, 50, 50, 0.75); -moz-box-shadow: 0px 0px 11px 0px rgba(50, 50, 50, 0.75); box-shadow: 0px 0px 11px 0px rgba(50, 50, 50, 0.75); padding: 16px 16px 16px 16px"
  )
  container.innerHTML = '<div id="greenpay"></div>'

  const title = document.createElement("div")
  title.setAttribute(
    "style",
    'font-family:"Playfair Display",serif,italic;font-weight: 900;'
  )
  title.innerHTML = "<h2>G.</h2>"

  // const message = document.createElement("div")
  // message.setAttribute("style", "position: absolute;left:50px;bottom:30px")
  // message.innerHTML = "<div>Footprint found!</div>"

  const button = document.createElement("div")
  button.setAttribute(
    "style",
    "position: absolute;right:8px;bottom:8px;background-color: white;border: 2px solid black;color: #363636;cursor: pointer;justify-content: center;padding-bottom: calc(0.5em - 3px);padding-left: 1em;padding-right: 1em;padding-top: calc(0.5em - 1px);text-align: center;white-space: nowrap;"
  )
  button.innerHTML = "<div>Get footprint</div>"

  container.appendChild(title)
  // container.appendChild(message)
  container.appendChild(button)

  document.body.appendChild(container)
}
script.src =
  "https://fonts.googleapis.com/css?family=Playfair+Display:900:italic&display=swap"
document.getElementsByTagName("head")[0].appendChild(script)
