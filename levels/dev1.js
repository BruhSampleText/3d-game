let level = {
    meta: {
        groundFriction: 1,
        playerHeight: 150,
        gravity : { x : 0, y : -5, z : 0 }
    },

    geometry: [
        [ 0, 0, 0, 90, 0, 0, 300, 600, "#00ff00" ], //Floor
    ],

    objects : [
        // Monēta
        [45, 350, 0, 0, 0, 0, 100, 100, "1EURO.png", null, 'coin']
    ]
}