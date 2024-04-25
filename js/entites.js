let id = 0
let getId = () => { id++; return id }

let allEnities = {}

let loadLevelsEntites = () => {

}
let dropLevelsEntites = () => {
    allEnities.forEach(element => {
        element.deconstructor()
    });
}
