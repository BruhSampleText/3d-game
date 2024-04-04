let showTime = document.getElementById('time')
let showPoints = document.getElementById('points')
let showFPS = document.getElementById('fps')
let showKeys = document.getElementById('keyCount')

let dateThen = Math.round(new Date()/1000)
let date
let seconds = 0

let gamePoints = 0

let gameKeys = 0

let gameFPS = 0

let resetSeconds = false

function updateWindows() {
    // For reseting the time count
    if (resetSeconds) {
        dateThen = Math.round(new Date()/1000)
        resetSeconds = false
    }

    date = Math.round(new Date()/1000)
    seconds = date-dateThen


    showTime.innerHTML = `${seconds}`
    showPoints.innerHTML = `Points<br>${gamePoints}`
    showFPS.innerHTML = `${gameFPS}`
    showKeys.innerHTML = `Keys<br>${gameKeys}`
}