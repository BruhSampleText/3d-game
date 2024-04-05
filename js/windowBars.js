let tellV = document.getElementById('vClipP')

let showTime = document.getElementById('time')
let showPoints = document.getElementById('points')
let showFPS = document.getElementById('fps')
let showKeys = document.getElementById('keyCount')

let dateThen = Math.round(new Date()/1000)
let date
let secondsThen = 0
let seconds = 0

let gamePoints = 0
let gamePointsThen = 0
let truePoints = 0

let gameKeys = 0
let gameKeysThen = 0
let trueKeys = 0

let gameFPS = 0
let timePassed = 0

let opacityTop = 0
let opacityChangeSpeed = 1
let opacityFadeInTime = 60
let opacityV = 0

let resetSeconds = false
let hasChanged = false

updateWindows = (dt) => {

    date = Math.round(new Date()/1000)
    seconds = date-dateThen

    if (Math.floor(timePassed) > 1) {
        gameFPS = Math.round(1/dt)
        timePassed = 0
    } else {
        timePassed += dt
    }

    if (gamePointsThen === truePoints) {}
    else {
        hasChanged = true
        gamePointsThen = truePoints
    }
    if (gameKeysThen === trueKeys) {}
    else {
        hasChanged = true
        gameKeysThen = trueKeys
    }


    if (playerFlags.noclip) {
        tellV.innerHTML = 'Noclip enabled'
    } else {
        tellV.innerHTML = ''
    }

    // For reseting the time count
    if (resetSeconds) {
        dateThen = Math.round(new Date()/1000)
        resetSeconds = false
    }

    // For making the points and keys appear
    if (hasChanged) {
        if (opacityTop === opacityFadeInTime + 100) {
            hasChanged = false
            gamePointsThen = gamePoints
            gameKeysThen = gameKeys
        } else {
            opacityTop += opacityChangeSpeed
        }
    } else {
        if (opacityTop === 0) {}
        else {
            opacityTop -= opacityChangeSpeed
        }
    }
    if (gamePoints === truePoints) {}
    else if (opacityTop > (opacityFadeInTime+100)*0.8) {
        gamePoints = truePoints
        gameKeys = trueKeys
    }
    

    showTime.innerHTML = `${seconds}`
    showPoints.innerHTML = `Points<br>${gamePoints}`
    showFPS.innerHTML = `${gameFPS}`
    showKeys.innerHTML = `Keys<br>${gameKeys}`

    showPoints.style.opacity = `${opacityTop}%`
    showKeys.style.opacity = `${opacityTop}%`
}