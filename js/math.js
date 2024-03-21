
function vec3( x = 0, y = 0, z = 0 ) {
    return { x : x, y : y, z : z }
}

function addVec3( vec1 = { x : 0, y : 0, z : 0 }, vec2 = { x : 0, y : 0, z : 0 } ) {
    return {
        x : vec1.x + vec2.x,
        y : vec1.y + vec2.y,
        z : vec1.z + vec2.z,
    }
}

function scaleVec3 ( vec1 = { x : 0, y : 0, z : 0 }, f = 1 ) {
    return {
        x : vec1.x * f,
        y : vec1.y * f,
        z : vec1.z * f,
    }
}
function multVec3 ( vec1 = { x : 0, y : 0, z : 0 }, vec2 = { x : 0, y : 0, z : 0 } ) {
    return {
        x : vec1.x * vec2.x,
        y : vec1.y * vec2.y,
        z : vec1.z * vec2.z,
    }
}

function getVec3Magnitude( vec1 = { x : 0, y : 0, z : 0 } ) {
    return Math.sqrt( vec1.x ** 2 + vec1.y ** 2 + vec1.z ** 2 )
}

function fixRotationVector( vec = { x : 0, y : 0, z : 0 } ) {
    if ( vec.x > 360 ) { vec.x -= 360 }
    if ( vec.x < -360 ) { vec.x += 360 }

    if ( vec.y > 360 ) { vec.y -= 360 }
    if ( vec.y < -360 ) { vec.y += 360 }

    if ( vec.z > 360 ) { vec.z -= 360 }
    if ( vec.z < -360 ) { vec.z += 360 }
}

function getTransform( position = { x : 0, y : 0, z : 0 }, rotation = { x : 0, y : 0, z : 0 } ) { //translateZ( 600px )
	return `rotateX( ${ rotation.x }deg ) rotateY( ${ rotation.y }deg ) translate3d(${ position.x }px, ${ position.y }px, ${ position.z }px)`
}

function clamp( min, max, val ) {
	if ( min > val ) {
		return min
	} else if ( max < val ) {
		return max
	} else return val
}

function check1DCollition( start, end, current ) {
    return ( start <= current ) && ( end >= current )
}

function check3DCollition( p0, p1, current ) {
    return check1DCollition( p0.x, p1.x, current.x ) && 
        check1DCollition( p0.y, p1.y, current.y ) &&
        check1DCollition( p0.z, p1.z, current.z )
}


function coreMatrixTransform( x, y, z, rx, ry, rz ) {
    let x1 = x;
    let y1 = y * Math.cos(rx*deg) + z * Math.sin(rx*deg);
    let z1 = -y * Math.sin(rx*deg) + z * Math.cos(rx*deg);

    let x2 = x1 * Math.cos(ry*deg) - z1 * Math.sin(ry*deg);
    let y2 = y1;
    let z2 = x1 * Math.sin(ry*deg) + z1 * Math.cos(ry*deg);

    let x3 = x2 * Math.cos(rz*deg) + y2 * Math.sin(rz*deg);
    let y3 = -x2 * Math.sin(rz*deg) + y2 * Math.cos(rz*deg);
    let z3 = z2;
    
    return vec3( x3, y3, z3 );
}
function reCoreMatrixTransform(x3, y3, z3, rxc, ryc, rzc){
    let x2 = x3 * Math.cos(rzc*deg) - y3 * Math.sin(rzc*deg);
    let y2 = x3 * Math.sin(rzc*deg) + y3 * Math.cos(rzc*deg);
    let z2 = z3;
  
    let x1 = x2 * Math.cos(ryc*deg) + z2 * Math.sin(ryc*deg);
    let y1 = y2;
    let z1 = -x2 * Math.sin(ryc*deg) + z2 * Math.cos(ryc*deg);
  
    let x0 = x1;
    let y0 = y1 * Math.cos(rxc*deg) - z1 * Math.sin(rxc*deg);
    let z0 = y1 * Math.sin(rxc*deg) + z1 * Math.cos(rxc*deg);
  
    return vec3( x0, y0, z0 );
}

/**function collision(mapObj) {

//  onGround = false;

  for(let i=0; i<mapObj.length; i++){
    //let's get the coordinates of the player in the system of coordinates of each rectangle
    let x0 = (pawn.x - mapObj[i][0]);
    let y0 = (pawn.y - mapObj[i][1]);
    let z0 = (pawn.z - mapObj[i][2]);

    if((x0**2 + y0**2 + z0**2 + dx**2 + dy**2 + dz**2) < (mapObj[i][6]**2 + mapObj[i][7]**2)){
      //adding displacement
      let x1 = x0 + dx;
      let y1 = y0 + dy;
      let z1 = z0 + dz;

      //making new coordinates of the point
      let point0 = coorTransform(x0,y0,z0,mapObj[i][3],mapObj[i][4],mapObj[i][5]);
      let point1 = coorTransform(x1,y1,z1,mapObj[i][3],mapObj[i][4],mapObj[i][5]);
      let normal = coorReTransform(0,0,1,mapObj[i][3],mapObj[i][4],mapObj[i][5]);
      // let point2 = new Array();

      if(Math.abs(point1[0])<(mapObj[i][6]+70)/2 && Math.abs(point1[1])<(mapObj[i][7]+70)/2 && Math.abs(point1[2])<50){
        point1[2] = Math.sign(point0[2])*50;
        let point2 = coorReTransform(point1[0],point1[1],point1[2],mapObj[i][3],mapObj[i][4],mapObj[i][5]);
        let point3 = coorReTransform(point1[0],point1[1],0,mapObj[i][3],mapObj[i][4],mapObj[i][5]);
        dx = point2[0] - x0;
        dy = point2[1] - y0;
        dz = point2[2] - z0;

        if(Math.abs(normal[1]) > 0.8){
          if(point3[1] > point2[1]){
            onGround = true;
          }
        } else {
          dy = y1 - y0;
        }
      }
    }
  };
}
 */

function checkForCollision( geoList, myPos, myLookDir ) {
    for ( let index = 0; index < geoList.length; index++ ) {
        let current = geoList[ index ]

        let x0 = ( myPos.x - current[ 0 ] )        
        let y0 = ( myPos.y - current[ 1 ] )
        let z0 = ( myPos.z - current[ 2 ] )

        if ( (x0**2 + y0**2 + z0**2 + myLookDir.x**2 + myLookDir.z**2) < ( current[ 6 ] ** 2 + current[ 7 ] ** 2 ) ) {
            let x1 = x0 + myLookDir.x
            let y1 = y0 + myLookDir.y
            let z1 = z0 + myLookDir.z

            let point0 = coreMatrixTransform( x0, y0, z0, current[ 3 ], current[ 4 ], current[ 5 ] )
            let point1 = coreMatrixTransform( x1, y1, z1, current[ 3 ], current[ 4 ], current[ 5 ] )
            let normal = coreMatrixTransform( 0, 0, 1, current[ 3 ], current[ 4 ], current[ 5 ] )

            if ( Math.abs(point1.x) < ( current[ 6 ] + 70 )/2 && Math.abs(point1.y) < ( current[ 7 ] + 70 )/2 && Math.abs( point1.z ) < 50 ) {
                point1.z = Math.sign( point0.z ) * 50

                let point2 = reCoreMatrixTransform( point1.x, point1.y, point1.z, current[ 3 ], current[ 4 ], current[ 5 ] )
                // let point3 = reCoreMatrixTransform( point1.x, point1.y, 0, current[ 3 ], current[ 4 ], current[ 5 ] )

                myLookDir = vec3(
                    point2.x - x0,
                    point2.y - y0,
                    point2.z - z0,
                )
            }

        }

    
    }
    return myLookDir
}