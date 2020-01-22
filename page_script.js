function DOMtoString(document_root) {
  var html = "",
    node = document_root.firstChild
  while (node) {
    switch (node.nodeType) {
      case Node.ELEMENT_NODE:
        html += node.outerHTML
        break
      case Node.TEXT_NODE:
        html += node.nodeValue
        break
    }
    node = node.nextSibling
  }
  return html
}

function formatItems(items) {
  const formatedItems = []
  for (let itemCount = 0; itemCount < items.length; itemCount++) {
    const name = DOMtoString(
      items[itemCount].getElementsByClassName("heading--sub")[0]
    )
    const description = DOMtoString(
      items[itemCount].getElementsByClassName("text")[0]
    )
    const price = DOMtoString(
      items[itemCount].getElementsByClassName("heading--sub mb-0")[0]
    )
    const size = DOMtoString(
      items[itemCount].getElementsByClassName("text mb-0")[0]
    )
    formatedItems.push({ name, description, price, size })
  }
  return formatedItems
}

browser.runtime.sendMessage({
  action: "getSource",
  items: formatItems(document.getElementsByClassName("row-item"))
})
