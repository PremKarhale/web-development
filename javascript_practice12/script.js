document.body.firstElementChild

document.body.firstElementChild.childNodes
document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
// document.body.firstElementChild.children[1]

document.body.firstElementChild.children[1]
//div.box
document.body.firstElementChild.children[1].previousElementSibling
document.body.firstElementChild.children[1].nextElementSibling     // properties to get the next element and the previous element siblings of the child.
document.body.firstElementChild.children[1].style.backgroundColor="green"
'green'