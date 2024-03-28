
function unloadWorld() {
  world.innerHTML = ''
}

let loadNewWorld = function( worldArray ) {
  for ( let index = 0; index < worldArray.length; index++ ) {
      let entry = worldArray[ index ]

      let element = document.createElement( "div" )
      
      element.className = 'square'
      element.id = "div_"+index

      element.style.width = entry[ 6 ] + "px"
      element.style.height = entry[ 7 ] + "px"

      element.style.transform = 
          "translate3d(" +
          (600 -entry[6] / 2 + entry[0]) +
          "px," +
          (400 - entry[7] / 2 + entry[1]) +
          "px," +
          entry[2] +
          "px)" +
          "rotateX(" +
          entry[3] +
          "deg)" +
          "rotateY(" +
          entry[4] +
          "deg)" +
          "rotateZ(" +
          entry[5] +
          "deg)";

      if (entry[8].indexOf(".") == -1) {
          element.style.backgroundColor = entry[8]
      } else {
          element.style.backgroundImage = "url(\"img/" + entry[8] + "\")"
      }

      if (entry[9]) {
          element.style.backgroundSize = "contain"
      }

      world.appendChild( element )
  }
}