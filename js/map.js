let testMap = [
    [0, 0, 1000, 0, 180, 0, 2000, 600, "url('img/brick.jpg')", "ff0000"],
    [0, 0, -1000, 0, 0, 0, 2000, 600, "url('img/brick.jpg')", "ff0000"],
    [1000, 0, 0, 0, -90, 0, 2000, 600, "url('img/brick.jpg')", "ff0000"],
    [-1000, 0, 0, 0, 90, 0, 2000, 600, "url('img/brick.jpg')", "ff0000"],
    [0, 100, 0, 90, 0, 0, 3000, 2000, "url('img/brick.jpg')", "00ff00"], //floor

    //Patric's wall
    [500, 0, 580, 0, 0, 0, 1000, 600, "url('img/brick.jpg')", "ff0000"],
    [500, 0, 600, 0, 0, 0, 1000, 600, "url('img/brick.jpg')", "ff0000"],
    [0, 0, 590, 0, 90, 0, 20, 600, "url('img/brick.jpg')", "ff0000"],
    //Altyshka's wall
    [-500, 0, 500, 0, 90, 0, 1000, 600, "url('img/brick.jpg')", "ff0000"],
    [-480, 0, 500, 0, 90, 0, 1000, 600, "url('img/brick.jpg')", "ff0000"],
    [-490, 0, 0, 0, 0, 0, 20, 600, "url('img/brick.jpg')", "ff0000"],
    //Antelz's wall
    [680,0,-500, 0, 90, 0, 1000, 600, "url('img/brick.jpg')", "ff0000"],
    [700, 0,-500, 0, 90, 0, 1000, 600, "url('img/brick.jpg')", "ff0000"],
    [690, 0,0, 0, 0, 0, 20, 600, "url('img/brick.jpg')", "ff0000"],
    //Adheeksha's wall
    [-500, 0, -580, 0, 0, 0, 1000, 600, "url('img/brick.jpg')", "ff0000"],
    [-500, 0, -600, 0, 0, 0, 1000, 600, "url('img/brick.jpg')", "ff0000"],
    [0, 0, -590, 0, 90, 0, 20, 600, "url('img/brick.jpg')", "ff0000"], 

//     // Grīda
//     [0, 0, -300, 90, 0, 0, 1500, 500, "url('img/floor.jpg')", "#000000"],
//     //griesti
//     [0, 0, 0, 90, 0, 0, 1500, 500, "url('img/tree.jpg')", "#000000"],
//     // Siena
//     [0, 50, -50, 0, 0, 0, 1500, 300, "url('img/brick.jpg')", "#fc865d"],
//     [0, 50, 450, 0, 0, 0, 1500, 300, "url('img/brick.jpg')", "#fc865d"],
//     [750,50, -200, 0, 90, 0, 500, 300, "url('img/brick.jpg')", "#fc865d"],
//     [750, 50, 1300, 0, 90, 0, 500, 300, "url('img/brick.jpg')", "#fc865d"],
]

let loadNewWorld = function( worldArray ) {
    for ( let index = 0; index < worldArray.length; index++ ) {
        let entry = worldArray[ index ]

        let element = document.createElement( "div" )
        
        element.className = 'square'
        element.id = "div_"+index

        element.style.backgroundColor = entry[ 9 ]
        element.style.backgroundImage = "url(img/zogs.jpg)"

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