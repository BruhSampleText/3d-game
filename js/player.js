let playerPosition = vec3( 0, 0, 0 )
let playerVelocity = vec3( 0, 0, 0 )
let playerRotation = vec3( 0, 0, 0 )

let movementSpeed = 700
let jumpPower = 13

let grounded = 0

updatePlayer = ( dt ) => {

    let dirForward = keymap.KeyW - keymap.KeyS
    let dirSideways = keymap.KeyA - keymap.KeyD

    let angle = playerRotation.y * deg
    let cos = Math.cos( angle )
    let sin = Math.sin( angle )

    playerVelocity.x = (cos * dirSideways - sin * dirForward) * movementSpeed * dt
    playerVelocity.z = (sin * dirSideways - -cos * dirForward) * movementSpeed * dt

    playerVelocity = checkForCollision( testMap, playerPosition, playerVelocity )

    playerPosition = addVec3( playerPosition, playerVelocity )

    playerPosition.y += (keymap.KeyE - keymap.KeyQ) * movementSpeed * dt

    playerRotation.y += dt * deltaMouseX * movementSpeed / 3
    playerRotation.x -= dt * deltaMouseY * movementSpeed / 3

    deltaMouseX = 0
    deltaMouseY = 0

    fixRotationVector( playerRotation )
    world.style.transform = "translateZ( 600px )" + getTransform( playerPosition, playerRotation )
}