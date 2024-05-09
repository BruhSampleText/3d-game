let last = performance.now()
let gameLoopActive = false
let gamePaused = false

function game() {
    let current = performance.now()
    let dt = (current - last) / 1e3
    last = current

    if (dt > 2) {
        dt = 1
    }

    publish( "RenderStep", dt )

    if ( !gamePaused )
        publish( "HeartBeat", dt )

    // updatePlayer( dt )
    // updateWindows( dt )
    
    if (gameLoopActive)
        requestAnimationFrame( game )
}

subscribe( "startgame", () => {
    gameLoopActive = true
    gamePaused = false

    loadLevel( "peat" )

    publish( "spawn player", vec3( 0, 0, 0 ) )

    game()
} )

window.onload = () => {
    publish( "startgame" )
}