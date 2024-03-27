var devLevel = {
    meta: {
        groundFriction: 1,
        playerHeight: 150,
        gravity : { x : 0, y : -5, z : 0 }
    },

    geometry: [
        [0, 0, 1500, 0, 180, 0, 3000, 1200, "url('textures/mapAdheeksha1.jpg')", "ff0000"],
        [0, 0, -1500, 0, 0, 0, 3000, 1200, "url('textures/mapAdheeksha1.jpg')", "ff0000"],
        [1500, 0, 0, 0, -90, 0, 3000, 1200, "url('textures/mapAdheeksha1.jpg')", "ff0000"],
        [-1500, 0, 0, 0, 90, 0, 3000, 1200, "url('textures/mapAdheeksha1.jpg')", "ff0000"],
        [0, 100, 0, 90, 0, 0, 3000, 3000, "url('textures/mapAdheeksha2.jpg')", "00ff00"], //floor
    
        [-1300,-70,1300, 10, 0, 90, 300, 300, "url('textures/teleportAdheeksha.gif')", "00ff00"], //hole
        //Patric's wall
        [750, 0, 1190, 0, 0, 0, 1500, 1200, "url('textures/mapAdheeksha3.jpg')", "ff0000"],
        [750, 0, 1200, 0, 0, 0, 1500, 1200, "url('textures/mapAdheeksha3.jpg')", "ff0000"],
        [0, 0, 1195, 0, 90, 0, 10, 1200, "url('textures/mapAdheeksha3.jpg')", "ff0000"],
        //Altyshka's wall
        [-790, 0, 750, 0, 90, 0, 1500, 1200, "url('textures/mapAdheeksha3.jpg')", "ff0000"],
        [-795, 0, 0, 0, 0, 0, 10, 1200, "url('textures/mapAdheeksha3.jpg')", "ff0000"],
        //Antelz's wall
        [990,0,-750, 0, 90, 0, 1500, 1200, "url('textures/mapAdheeksha3.jpg')", "ff0000"],
        [1000, 0,-750, 0, 90, 0, 1500, 1200, "url('textures/mapAdheeksha3.jpg')", "ff0000"],
        [995, 0,0, 0, 0, 0,10, 1200, "url('textures/mapAdheeksha3.jpg')", "ff0000"],
        //Adheeksha's wall
        [-750, 0, -990, 0, 0, 0, 1500, 1200, "url('textures/mapAdheeksha3.jpg')", "ff0000"],
        [-750, 0, -1000, 0, 0, 0, 1500, 1200, "url('textures/mapAdheeksha3.jpg')", "ff0000"],
        [0, 0, -995, 0, 90, 0, 10, 1200, "url('textures/mapAdheeksha3.jpg')", "ff0000"], 
    ],

    objects : [
        // Monēta
        [45, 350, 0, 0, 0, 0, 100, 100, "1EURO.png", null, 'coin']
    ]
}