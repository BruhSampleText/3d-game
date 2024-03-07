let playerPosition = vec3( 0, 0, 0 )
let playerVelocity = vec3( 0, 0, 0 )
let playerRotation = vec3( 0, 0, 0 )

let terminalVelocity = 20
let movementSpeed = 15
let jumpPower = 13

let grounded = 0

updatePlayer = () => {

    if (AABBCollition()) {
        console.log('Has collided')
    }

    let dirForward = keymap.KeyW - keymap.KeyS
    let dirSideways = keymap.KeyA - keymap.KeyD

    let angle = playerRotation.y * deg
    let cos = Math.cos( angle )
    let sin = Math.sin( angle )

    playerVelocity.x = (cos * dirSideways - sin * dirForward) * movementSpeed
    playerVelocity.z = (sin * dirSideways - -cos * dirForward) * movementSpeed

    playerPosition = addVec3( playerPosition, playerVelocity )
    
    fixRotationVector( playerRotation )
    world.style.transform = "translateZ( 600px )" + getTransform( playerPosition, playerRotation )
}