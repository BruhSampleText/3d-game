var devLevel = {
    meta: {
        groundFriction: 1,
        playerHeight: 150,
        gravity : { x : 0, y : -5, z : 0 }
    },

    geometry: [
        [0,0,1500,0,180,0,3000,200,"#F0C0FF", "brickwallpaper.jfif"], //siena
        [0,0,-1500,0,0,0,3000,200,"#F0C0FF", "brickwallpaper.jfif"], //siena
        [1500,0,0,0,-90,0,3000,200,"#F0C0FF", "brickwallpaper.jfif"], //siena
        [-1500,0,0,0,90,0,3000,200,"#F0C0FF", "brickwallpaper.jfif"], //siena
        [0,100,0,90,0,0,3000,3000,"#666666", "wood.jpg"], //grīda
    
        [-400,0,1400,0,180,0,1400,200,"#F0C0FF", "brickwallpaper.jfif"], //siena1
        [-400,0,1300,0,180,0,1200,200,"#F0C0FF", "brickwallpaper.jfif"], //siena2
        [950,0,1400,0,180,0,900,200,"#F0C0FF", "brickwallpaper.jfif"], //siena3
        [950,0,1300,0,180,0,700,200,"#F0C0FF", "brickwallpaper.jfif"], //siena4
        [-1000,0,850,0,90,0,900,200,"#F0C0FF", "brickwallpaper.jfif"], //siena5
        [-1100,0,1150,0,90,0,500,200,"#F0C0FF", "brickwallpaper.jfif"], //siena6
        [-1150,0,800,0,180,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena7
        [-1150,0,900,0,180,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena8
        [-1200,0,1050,0,90,0,300,200,"#F0C0FF", "brickwallpaper.jfif"], //siena9
        [-1350,0,1200,0,180,0,300,200,"#F0C0FF", "brickwallpaper.jfif"], //siena10
        [-1350,0,1100,0,180,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena11
        [-1300,0,800,0,90,0,600,200,"#F0C0FF", "brickwallpaper.jfif"], //siena12
        [-1400,0,800,0,90,0,600,200,"#F0C0FF", "brickwallpaper.jfif"], //siena13
        [-1350,0,500,0,180,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena14
        [-1350,0,400,0,180,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena15
        [-1100,0,600,0,90,0,400,200,"#F0C0FF", "brickwallpaper.jfif"], //siena16
        [-1050,0,400,0,180,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena17
        [-1200,0,300,0,90,0,1000,200,"#F0C0FF", "brickwallpaper.jfif"], //siena18
        [-1250,0,-200,0,180,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena19
        [-1300,0,100,0,90,0,600,200,"#F0C0FF", "brickwallpaper.jfif"], //siena20
        [-1400,0,0,0,90,0,800,200,"#F0C0FF", "brickwallpaper.jfif"], //siena21
        [-1250,0,-400,0,180,0,300,200,"#F0C0FF", "brickwallpaper.jfif"], //siena22
        [-1450,0,-500,0,180,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena23
        [-1400,0,-800,0,90,0,600,200,"#F0C0FF", "brickwallpaper.jfif"], //siena24
        [-1100,0,-1100,0,180,0,600,200,"#F0C0FF", "brickwallpaper.jfif"], //siena25
        [-1050,0,-1000,0,180,0,500,200,"#F0C0FF", "brickwallpaper.jfif"], //siena26
        [-1300,0,-750,0,90,0,500,200,"#F0C0FF", "brickwallpaper.jfif"], //siena27
        [-800,0,-1250,0,90,0,300,200,"#F0C0FF", "brickwallpaper.jfif"], //siena28
        [-1100,0,-1400,0,180,0,600,200,"#F0C0FF", "brickwallpaper.jfif"], //siena29
        [-1400,0,-1450,0,90,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena30
        [-700,0,-1300,0,90,0,400,200,"#F0C0FF", "brickwallpaper.jfif"], //siena31
        [-350,0,-1100,0,180,0,700,200,"#F0C0FF", "brickwallpaper.jfif"], //siena32
        [-350,0,-1000,0,180,0,700,200,"#F0C0FF", "brickwallpaper.jfif"], //siena33
        [-800,0,-450,0,90,0,1100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena34
        [-700,0,-650,0,90,0,700,200,"#F0C0FF", "brickwallpaper.jfif"], //siena35
        [-1150,0,-500,0,180,0,300,200,"#F0C0FF", "brickwallpaper.jfif"], //siena36
        [-1100,0,-50,0,90,0,700,200,"#F0C0FF", "brickwallpaper.jfif"], //siena37
        [-1000,0,-150,0,90,0,700,200,"#F0C0FF", "brickwallpaper.jfif"], //siena38
        [-700,0,200,0,180,0,600,200,"#F0C0FF", "brickwallpaper.jfif"], //siena39
        [-750,0,300,0,180,0,700,200,"#F0C0FF", "brickwallpaper.jfif"], //siena40
        [-400,0,250,0,90,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena41
        [-100,0,-300,0,180,0,1200,200,"#F0C0FF", "brickwallpaper.jfif"], //siena42
        [-500,0,100,0,180,0,600,200,"#F0C0FF", "brickwallpaper.jfif"], //siena43
        [-200,0,300,0,90,0,400,200,"#F0C0FF", "brickwallpaper.jfif"], //siena44
        [500,0,150,0,90,0,900,200,"#F0C0FF", "brickwallpaper.jfif"], //siena45
        [-50,0,600,0,180,0,1100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena46
        [-450,0,500,0,180,0,500,200,"#F0C0FF", "brickwallpaper.jfif"], //siena47
        [-700,0,800,0,90,0,600,200,"#F0C0FF", "brickwallpaper.jfif"], //siena48
        [-600,0,800,0,90,0,400,200,"#F0C0FF", "brickwallpaper.jfif"], //siena49
        [-250,0,1100,0,180,0,900,200,"#F0C0FF", "brickwallpaper.jfif"], //siena50
        [-200,0,1000,0,180,0,800,200,"#F0C0FF", "brickwallpaper.jfif"], //siena51
        [-150,0,900,0,180,0,700,200,"#F0C0FF", "brickwallpaper.jfif"], //siena52
        [-500,0,850,0,90,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena53
        [50,0,800,0,180,0,1100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena54
        [200,0,950,0,90,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena55
        [0,0,-1250,0,90,0,300,200,"#F0C0FF", "brickwallpaper.jfif"], //siena56
        [0,0,-850,0,90,0,300,200,"#F0C0FF", "brickwallpaper.jfif"], //siena57
        [550,0,-1400,0,180,0,1100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena58
        [550,0,-1300,0,180,0,900,200,"#F0C0FF", "brickwallpaper.jfif"], //siena59
        [100,0,-1200,0,90,0,200,200,"#F0C0FF", "brickwallpaper.jfif"], //siena60
        [1000,0,-1200,0,90,0,200,200,"#F0C0FF", "brickwallpaper.jfif"], //siena61
        [550,0,-1100,0,180,0,900,200,"#F0C0FF", "brickwallpaper.jfif"], //siena62
        [550,0,-1000,0,180,0,900,200,"#F0C0FF", "brickwallpaper.jfif"], //siena63
        [100,0,-800,0,90,0,400,200,"#F0C0FF", "brickwallpaper.jfif"], //siena64
        [-250,0,-600,0,180,0,700,200,"#F0C0FF", "brickwallpaper.jfif"], //siena65
        [-250,0,-700,0,180,0,500,200,"#F0C0FF", "brickwallpaper.jfif"], //siena66
        [-600,0,-750,0,90,0,300,200,"#F0C0FF", "brickwallpaper.jfif"], //siena67
        [-500,0,-800,0,90,0,200,200,"#F0C0FF", "brickwallpaper.jfif"], //siena68
        [-550,0,-900,0,180,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena69
        [1100,0,-1000,0,90,0,800,200,"#F0C0FF", "brickwallpaper.jfif"], //siena70
        [1000,0,-850,0,90,0,300,200,"#F0C0FF", "brickwallpaper.jfif"], //siena71
        [700,0,-600,0,180,0,800,200,"#F0C0FF", "brickwallpaper.jfif"], //siena72
        [650,0,-700,0,180,0,700,200,"#F0C0FF", "brickwallpaper.jfif"], //siena73
        [300,0,-650,0,90,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena74
        [200,0,1200,0,90,0,200,200,"#F0C0FF", "brickwallpaper.jfif"], //siena75
        [300,0,1250,0,90,0,300,200,"#F0C0FF", "brickwallpaper.jfif"], //siena76
        [400,0,1100,0,180,0,200,200,"#F0C0FF", "brickwallpaper.jfif"], //siena77
        [500,0,1250,0,90,0,300,200,"#F0C0FF", "brickwallpaper.jfif"], //siena78
        [600,0,1200,0,90,0,200,200,"#F0C0FF", "brickwallpaper.jfif"], //siena79
        [850,0,1100,0,180,0,500,200,"#F0C0FF", "brickwallpaper.jfif"], //siena80
        [1100,0,1150,0,90,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena81
        [1150,0,1200,0,180,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena82
        [1200,0,1100,0,90,0,200,200,"#F0C0FF", "brickwallpaper.jfif"], //siena83
        [750,0,1000,0,180,0,900,200,"#F0C0FF", "brickwallpaper.jfif"], //siena84
        [300,0,950,0,90,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena85
        [800,0,900,0,180,0,1000,200,"#F0C0FF", "brickwallpaper.jfif"], //siena86
        [1300,0,1100,0,90,0,400,200,"#F0C0FF", "brickwallpaper.jfif"], //siena87
        [1400,0,1100,0,90,0,600,200,"#F0C0FF", "brickwallpaper.jfif"], //siena88
        [1350,0,800,0,180,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena89
        [1300,0,650,0,90,0,300,200,"#F0C0FF", "brickwallpaper.jfif"], //siena90
        [1350,0,500,0,180,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena91
        [1350,0,400,0,180,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena92
        [1400,0,450,0,90,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena93
        [1300,0,250,0,90,0,300,200,"#F0C0FF", "brickwallpaper.jfif"], //siena94
        [1200,0,250,0,90,0,300,200,"#F0C0FF", "brickwallpaper.jfif"], //siena95
        [1250,0,100,0,180,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena96
        [1100,0,400,0,180,0,200,200,"#F0C0FF", "brickwallpaper.jfif"], //siena97
        [1000,0,450,0,90,0,100,200,"#F0C0FF", "brickwallpaper.jfif"], //siena98
        [1100,0,500,0,180,0,200,200,"#F0C0FF", "brickwallpaper.jfif"], //siena99
        [1200,0,650,0,90,0,300,200,"#F0C0FF", "brickwallpaper.jfif"], //siena100
        [950,0,800,0,180,0,500,200,"#F0C0FF", "brickwallpaper.jfif"], //siena101
        [700,0,550,0,90,0,500,200,"#F0C0FF", "brickwallpaper.jfif"], //siena102
        [600,0,500,0,90,0,600,200,"#F0C0FF", "brickwallpaper.jfif"], //siena103
        [800,0,300,0,180,0,200,200,"#F0C0FF", "brickwallpaper.jfif"], //siena104
        [700,0,200,0,180,0,200,200,"#F0C0FF", "brickwallpaper.jfif"], //siena105
        [900,0,50,0,90,0,500,200,"#F0C0FF", "brickwallpaper.jfif"], //siena106
        [800,0,-50,0,90,0,500,200,"#F0C0FF", "brickwallpaper.jfif"], //siena107
        [1150,0,-200,0,180,0,500,200,"#F0C0FF", "brickwallpaper.jfif"], //siena108
        [1050,0,-300,0,180,0,500,200,"#F0C0FF", "brickwallpaper.jfif"], //siena109
        [1400,0,-850,0,90,0,1300,200,"#F0C0FF", "brickwallpaper.jfif"], //siena110
        [1300,0,-900,0,90,0,1200,200,"#F0C0FF", "brickwallpaper.jfif"], //siena111
    ],

    objects : [
        // Monēta
        [45, 350, 0, 0, 0, 0, 100, 100, "1EURO.png", null, 'coin']
    ]
}