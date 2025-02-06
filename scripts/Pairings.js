import { getChildren } from "./database.js"
import { getCelebrities } from "./database.js"

const kids = getChildren
const celebrities = getCelebrities

const findCelebrityMatch = (kid) => {
    

    for (const celebrity of celebrities) {
        
        if(celebrity.id === kid.celebrityId) {
          return celebrity.name
        }


    }

    
}
const findCelebrityMatchSport = (kid) => {
    

    for (const celebrity of celebrities) {
        
        if(celebrity.id === kid.celebrityId) {
          return celebrity.sport
        }


    }
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const celebrityStar = findCelebrityMatchSport(kid)
        const kidsStar = findCelebrityMatch(kid)
        html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar}, a ${celebrityStar} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

