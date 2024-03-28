
let loadNewWorld = function( worldArray ) {
    for ( let index = 0; index < worldArray.length; index++ ) {
        let entry = worldArray[ index ]

        let element = document.createElement( "div" )
        
        element.className = 'square'
        element.id = "div_"+index

        element.style.backgroundColor = entry[ 9 ]
        element.style.backgroundImage =  "url('img/wall.jpg')" //entry[ 8 ]

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

        world.appendChild( element )
    }
}

function CreateNewWorld(myMap) {
    for (let i = 0; i < myMap.length; i++) {
      let newElement = document.createElement("div");
      newElement.className = "square";
      newElement.id = "square" + i;
      newElement.style.width = myMap[i][6] + "px";
      newElement.style.height = myMap[i][7] + "px";
  
      if (myMap[i][8] == null) {
        newElement.style.background = myMap[i][9];
      } else {
        newElement.style.backgroundImage = myMap[i][8];
      }
  
      newElement.style.transform =
        "translate3d(" +
        (600 - myMap[i][6] / 2 + myMap[i][0]) +
        "px," +
        (400 - myMap[i][7] / 2 + myMap[i][1]) +
        "px," +
        myMap[i][2] +
        "px)" +
        "rotateX(" +
        myMap[i][3] +
        "deg)" +
        "rotateY(" +
        myMap[i][4] +
        "deg)" +
        "rotateZ(" +
        myMap[i][5] +
        "deg)";
  
      world.append(newElement);
    }
  }