let last = performance.now()

function game() {
    let current = performance.now()
    let dt = (current - last) / 1e3
    last = current

    if (dt > 2) {
        dt = 1
    }

    updatePlayer( dt )
    updateWindows( dt )
    request = requestAnimationFrame( game )
}

window.onload = () => {
    // loadNewWorld( devLevel.geometry )
    loadLevel( "peat" )
  
    game()
}