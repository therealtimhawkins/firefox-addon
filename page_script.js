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
    console.log(
      "item",
      DOMtoString(items[itemCount].getElementsByClassName("text")[0])
    )
  }
  return formatedItems
}

browser.runtime.sendMessage({
  action: "getSource",
  source: {
    items: formatItems(document.getElementsByClassName("text"))
  }
})
