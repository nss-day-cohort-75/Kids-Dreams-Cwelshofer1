import { getChildren } from "./database.js"

const children = getChildren

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-name="${child.name}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "child") {

            const childId = itemClicked.dataset.id
            const childName = itemClicked.dataset.name

            for (const child of children) {
                if( child.id === parseInt(childId)){
              

                    window.alert(` ${childName}'s wish is ${child.wish} `)
                    
                }
            }
        }
    }
)
