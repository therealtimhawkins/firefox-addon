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

function getItemField(item, field) {
  const itemField = item.getElementsByClassName(field)[0]
  if (itemField) {
    return DOMtoString(itemField)
  }
  return ""
}

function formatItems(items, data) {
  const formattedItems = []
  for (let itemCount = 0; itemCount < items.length; itemCount++) {
    const name = getItemField(items[itemCount], data.name)
    const description = getItemField(items[itemCount], data.description)
    const price = getItemField(items[itemCount], data.price)
    const size = getItemField(items[itemCount], data.size)
    formattedItems.push({ name, description, price, size })
  }
  console.log(formattedItems)
  return formattedItems
}

const myPort = browser.runtime.connect({ name: "port-from-cs" })
myPort.onMessage.addListener(function(message) {
  console.log("messageData: ", message.data)
  setTimeout(() => {
    console.log("end timer")
    browser.runtime.sendMessage({
      action: "setItems",
      items: formatItems(
        document.getElementsByClassName(message.data.bag),
        message.data
      )
    })
  }, 2000)
})
