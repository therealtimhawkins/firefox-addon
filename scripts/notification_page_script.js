const container = document.createElement("div")
container.setAttribute(
  "style",
  "position: absolute;right:16px;top:16px; width: 300px; height: 100px; background-color: white; z-index: 1000; -webkit-box-shadow: 0px 0px 11px 0px rgba(50, 50, 50, 0.75); -moz-box-shadow: 0px 0px 11px 0px rgba(50, 50, 50, 0.75); box-shadow: 0px 0px 11px 0px rgba(50, 50, 50, 0.75); padding: 16px 16px 16px 16px"
)
container.innerHTML =
  "<div>G.</div><div>Footprint found!</div><div><button>Get footprint...</button></div>"
document.body.appendChild(container)
