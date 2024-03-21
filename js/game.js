


let last = performance.now()
function game() {
    let current = performance.now()
    let dt = current - last
    last = current

    dt /= 1e3
    if (dt > 2) {
        dt = 1
    }

    updatePlayer( dt )

    request = requestAnimationFrame( game )
}

window.onload = () => {

    loadNewWorld( testMap )

    game()
}
