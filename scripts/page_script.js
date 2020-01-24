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

function formatItems(items, data) {
  const formattedItems = []
  for (let itemCount = 0; itemCount < items.length; itemCount++) {
    const name = DOMtoString(
      items[itemCount].getElementsByClassName(data.name)[0]
    )
    const description = DOMtoString(
      items[itemCount].getElementsByClassName(data.description)[0]
    )
    const price = DOMtoString(
      items[itemCount].getElementsByClassName(data.price)[0]
    )
    const size = DOMtoString(
      items[itemCount].getElementsByClassName(data.size)[0]
    )
    formattedItems.push({ name, description, price, size })
  }
  return formattedItems
}

const myPort = browser.runtime.connect({ name: "port-from-cs" })
myPort.onMessage.addListener(function(message) {
  browser.runtime.sendMessage({
    action: "setItems",
    items: formatItems(
      document.getElementsByClassName(message.data.bag),
      message.data
    )
  })
})
