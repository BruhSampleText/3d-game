// Pozīcija  Rotācija  Izmēri              Īpašības
// x, y, z,  x, y, z,  platums, augstums,  attēls/krāsa,  neflīze?  
// 0  1  2   3  4  5   6        7          8              9

var devLevel = {
    meta: {
        groundFriction: 1,
        playerHeight: 150,
        gravity : { x : 0, y : -5, z : 0 },
    },

    geometry: [
        [0, 0, 1500, 0, 180, 0, 3000, 1200, "wall.jpg"],
        [0, 0, -1500, 0, 0, 0, 3000, 1200, "wall.jpg"],
        [1500, 0, 0, 0, -90, 0, 3000, 1200, "wall.jpg"],
        [-1500, 0, 0, 0, 90, 0, 3000, 1200, "wall.jpg"],
        [0, 100, 0, 90, 0, 0, 3000, 3000, "wall.jpg"],
    ],

    objects : [
    ]
}