let playerPosition = vec3( 0, 0, 0 )
let playerVelocity = vec3( 0, 0, 0 )
let playerRotation = vec3( 0, 0, 0 )

let movementSpeed = 450
let jumpPower = 4
let speedIncrease = 1

let onGround = true
let approximateGround = 4
let hasJumped = false

let collisionCheck = ( mapObj ) => {

    //  onGround = false;
    
      for(let i=0; i<mapObj.length; i++){
        //let's get the coordinates of the player in the system of coordinates of each rectangle
        let x0 = (playerPosition.x - mapObj[i][0]);
        let y0 = (playerPosition.y - mapObj[i][1]);
        let z0 = (playerPosition.z - mapObj[i][2]);
    
        if((x0**2 + y0**2 + z0**2 + playerVelocity.x**2 + playerVelocity.y**2 + playerVelocity.z**2) < (mapObj[i][6]**2 + mapObj[i][7]**2)){
          //adding displacement
          let x1 = x0 + playerVelocity.x;
          let y1 = y0 + playerVelocity.y;
          let z1 = z0 + playerVelocity.z;
    
          //making new coordinates of the point
          let point0 = coorTransform(x0,y0,z0,mapObj[i][3],mapObj[i][4],mapObj[i][5]);
          let point1 = coorTransform(x1,y1,z1,mapObj[i][3],mapObj[i][4],mapObj[i][5]);
          let normal = coorReTransform(0,0,1,mapObj[i][3],mapObj[i][4],mapObj[i][5]);
          // let point2 = new Array();
    
          if(Math.abs(point1[0])<(mapObj[i][6]+70)/2 && Math.abs(point1[1])<(mapObj[i][7]+70)/2 && Math.abs(point1[2])<50){
            point1[2] = Math.sign(point0[2])*50;
            let point2 = coorReTransform(point1[0],point1[1],point1[2],mapObj[i][3],mapObj[i][4],mapObj[i][5]);
            let point3 = coorReTransform(point1[0],point1[1],0,mapObj[i][3],mapObj[i][4],mapObj[i][5]);
            playerVelocity.x = point2[0] - x0;
            playerVelocity.y = point2[1] - y0;
            playerVelocity.z = point2[2] - z0;
    
            if(Math.abs(normal[1]) > 0.8){
              if(point3[1] > point2[1]){
                onGround = true;
              }
            } 
            /*else {
                playerVelocity.y = y1 - y0;
            }*/
          }
        }
      };
    }


updatePlayer = ( dt ) => {
    if (keymap.Space && !hasJumped) {
        playerVelocity.y = jumpPower
    } else if (playerPosition.y <= worldGroundLevel) {
        playerPosition.y = worldGroundLevel
    } else {
        playerVelocity.y -= worldGravity*dt
    }

    if (playerPosition.y > worldGroundLevel + approximateGround) {
        hasJumped = true
        speedIncrease = 1.2
    } else if (playerPosition.y < worldGroundLevel + approximateGround) {
        hasJumped = false
        speedIncrease = 1
    }

    let dirForward = keymap.KeyW - keymap.KeyS
    let dirSideways = keymap.KeyA - keymap.KeyD

    let angle = playerRotation.y * deg
    let cos = Math.cos( angle )
    let sin = Math.sin( angle )

    playerVelocity.x = (cos * dirSideways - sin * dirForward) * movementSpeed * speedIncrease * dt
    playerVelocity.z = (sin * dirSideways - -cos * dirForward) * movementSpeed * speedIncrease * dt

    // playerVelocity = checkForCollision( testMap, playerPosition, playerVelocity )
    collisionCheck( currentLevelGeo )

    playerPosition = addVec3( playerPosition, playerVelocity )

    playerPosition.y += (keymap.KeyE - keymap.KeyQ) * movementSpeed * dt

    playerRotation.y += dt * deltaMouseX * movementSpeed / 3
    playerRotation.x -= dt * deltaMouseY * movementSpeed / 3

    playerRotation.x = clamp( -70, 70, playerRotation.x )

    deltaMouseX = 0
    deltaMouseY = 0

    fixRotationVector( playerRotation )
    world.style.transform = "translateZ( 600px )" + getTransform( playerPosition, playerRotation )
}