var devLevel = {
    meta: {
        groundFriction: 1,
        playerHeight: 150,
        gravity : { x : 0, y : -5, z : 0 }
    },

    geometry: [
        [0, 0, 1500, 0, 180, 0, 3000, 1200, "url('img/wall.jpg')", "ff0000"],
        [0, 0, -1500, 0, 0, 0, 3000, 1200, "url('img/wall.jpg')", "ff0000"],
        [1500, 0, 0, 0, -90, 0, 3000, 1200, "url('img/wall.jpg')", "ff0000"],
        [-1500, 0, 0, 0, 90, 0, 3000, 1200, "url('img/wall.jpg')", "ff0000"],
        [0, 100, 0, 90, 0, 0, 3000, 3000, "url('img/wall.jpg')", "00ff00"], //floor
        [0, 0, 500, 0, 0, 0, 1500, 1200, null, "yellow"]
    ],

    objects : [
        // Monēta
        [45, 350, 0, 0, 0, 0, 100, 100, "1EURO.png", null, 'coin']
    ]
}