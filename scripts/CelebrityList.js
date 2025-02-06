import { getCelebrities } from "./database.js"

const celebrities = getCelebrities

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "celebrity") {

            const celebrityId = itemClicked.dataset.id
            

            for (const celebrity of celebrities) {
                if( celebrity.id === parseInt(celebrityId)){
              

                    window.alert(` ${celebrity.name} is a ${celebrity.sport} star`)
                    
                }
            }
        }
    }
)