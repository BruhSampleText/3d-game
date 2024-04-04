
registerLevel( {
    meta: {
        groundFriction: 1,
        playerHeight: 150,
        gravity : { x : 0, y : -5, z : 0 },
    },

    geometry: [
        [0,0,1500,0,180,0,3000,200, "brickwallpaper.jfif"], //siena
        [0,0,-1500,0,0,0,3000,200, "brickwallpaper.jfif"], //siena
        [1500,0,0,0,-90,0,3000,200, "brickwallpaper.jfif"], //siena
        [-1500,0,0,0,90,0,3000,200, "brickwallpaper.jfif"], //siena
        [0,100,0,90,0,0,3000,3000, "wood.jpg"], //grīda
    
        [-400,0,1400,0,180,0,1400,200,  "brickwallpaper.jfif"], //siena1
        [-400,0,1300,0,180,0,1200,200,  "brickwallpaper.jfif"], //siena2
        [950,0,1400,0,180,0,900,200,  "brickwallpaper.jfif"], //siena3
        [950,0,1300,0,180,0,700,200,  "brickwallpaper.jfif"], //siena4
        [-1000,0,850,0,90,0,900,200,  "brickwallpaper.jfif"], //siena5
        [-1100,0,1150,0,90,0,500,200,  "brickwallpaper.jfif"], //siena6
        [-1150,0,800,0,180,0,100,200,  "brickwallpaper.jfif"], //siena7
        [-1150,0,900,0,180,0,100,200,  "brickwallpaper.jfif"], //siena8
        [-1200,0,1050,0,90,0,300,200,  "brickwallpaper.jfif"], //siena9
        [-1350,0,1200,0,180,0,300,200,  "brickwallpaper.jfif"], //siena10
        [-1350,0,1100,0,180,0,100,200,  "brickwallpaper.jfif"], //siena11
        [-1300,0,800,0,90,0,600,200,  "brickwallpaper.jfif"], //siena12
        [-1400,0,800,0,90,0,600,200,  "brickwallpaper.jfif"], //siena13
        [-1350,0,500,0,180,0,100,200,  "brickwallpaper.jfif"], //siena14
        [-1350,0,400,0,180,0,100,200,  "brickwallpaper.jfif"], //siena15
        [-1100,0,600,0,90,0,400,200,  "brickwallpaper.jfif"], //siena16
        [-1050,0,400,0,180,0,100,200,  "brickwallpaper.jfif"], //siena17
        [-1200,0,300,0,90,0,1000,200,  "brickwallpaper.jfif"], //siena18
        [-1250,0,-200,0,180,0,100,200,  "brickwallpaper.jfif"], //siena19
        [-1300,0,100,0,90,0,600,200,  "brickwallpaper.jfif"], //siena20
        [-1400,0,0,0,90,0,800,200,  "brickwallpaper.jfif"], //siena21
        [-1250,0,-400,0,180,0,300,200,  "brickwallpaper.jfif"], //siena22
        [-1450,0,-500,0,180,0,100,200,  "brickwallpaper.jfif"], //siena23
        [-1400,0,-800,0,90,0,600,200,  "brickwallpaper.jfif"], //siena24
        [-1100,0,-1100,0,180,0,600,200,  "brickwallpaper.jfif"], //siena25
        [-1050,0,-1000,0,180,0,500,200,  "brickwallpaper.jfif"], //siena26
        [-1300,0,-750,0,90,0,500,200,  "brickwallpaper.jfif"], //siena27
        [-800,0,-1250,0,90,0,300,200,  "brickwallpaper.jfif"], //siena28
        [-1100,0,-1400,0,180,0,600,200,  "brickwallpaper.jfif"], //siena29
        [-1400,0,-1450,0,90,0,100,200,  "brickwallpaper.jfif"], //siena30
        [-700,0,-1300,0,90,0,400,200,  "brickwallpaper.jfif"], //siena31
        [-350,0,-1100,0,180,0,700,200,  "brickwallpaper.jfif"], //siena32
        [-350,0,-1000,0,180,0,700,200,  "brickwallpaper.jfif"], //siena33
        [-800,0,-450,0,90,0,1100,200,  "brickwallpaper.jfif"], //siena34
        [-700,0,-650,0,90,0,700,200,  "brickwallpaper.jfif"], //siena35
        [-1150,0,-500,0,180,0,300,200,  "brickwallpaper.jfif"], //siena36
        [-1100,0,-50,0,90,0,700,200,  "brickwallpaper.jfif"], //siena37
        [-1000,0,-150,0,90,0,700,200,  "brickwallpaper.jfif"], //siena38
        [-700,0,200,0,180,0,600,200,  "brickwallpaper.jfif"], //siena39
        [-750,0,300,0,180,0,700,200,  "brickwallpaper.jfif"], //siena40
        [-400,0,250,0,90,0,100,200,  "brickwallpaper.jfif"], //siena41
        [-100,0,-300,0,180,0,1200,200,  "brickwallpaper.jfif"], //siena42
        [-500,0,100,0,180,0,600,200,  "brickwallpaper.jfif"], //siena43
        [-200,0,300,0,90,0,400,200,  "brickwallpaper.jfif"], //siena44
        [500,0,150,0,90,0,900,200,  "brickwallpaper.jfif"], //siena45
        [-50,0,600,0,180,0,1100,200,  "brickwallpaper.jfif"], //siena46
        [-450,0,500,0,180,0,500,200,  "brickwallpaper.jfif"], //siena47
        [-700,0,800,0,90,0,600,200,  "brickwallpaper.jfif"], //siena48
        [-600,0,800,0,90,0,400,200,  "brickwallpaper.jfif"], //siena49
        [-250,0,1100,0,180,0,900,200,  "brickwallpaper.jfif"], //siena50
        [-200,0,1000,0,180,0,800,200,  "brickwallpaper.jfif"], //siena51
        [-150,0,900,0,180,0,700,200,  "brickwallpaper.jfif"], //siena52
        [-500,0,850,0,90,0,100,200,  "brickwallpaper.jfif"], //siena53
        [50,0,800,0,180,0,1100,200,  "brickwallpaper.jfif"], //siena54
        [200,0,950,0,90,0,100,200,  "brickwallpaper.jfif"], //siena55
        [0,0,-1250,0,90,0,300,200,  "brickwallpaper.jfif"], //siena56
        [0,0,-850,0,90,0,300,200,  "brickwallpaper.jfif"], //siena57
        [550,0,-1400,0,180,0,1100,200,  "brickwallpaper.jfif"], //siena58
        [550,0,-1300,0,180,0,900,200,  "brickwallpaper.jfif"], //siena59
        [100,0,-1200,0,90,0,200,200,  "brickwallpaper.jfif"], //siena60
        [1000,0,-1200,0,90,0,200,200,  "brickwallpaper.jfif"], //siena61
        [550,0,-1100,0,180,0,900,200,  "brickwallpaper.jfif"], //siena62
        [550,0,-1000,0,180,0,900,200,  "brickwallpaper.jfif"], //siena63
        [100,0,-800,0,90,0,400,200,  "brickwallpaper.jfif"], //siena64
        [-250,0,-600,0,180,0,700,200,  "brickwallpaper.jfif"], //siena65
        [-250,0,-700,0,180,0,500,200,  "brickwallpaper.jfif"], //siena66
        [-600,0,-750,0,90,0,300,200,  "brickwallpaper.jfif"], //siena67
        [-500,0,-800,0,90,0,200,200,  "brickwallpaper.jfif"], //siena68
        [-550,0,-900,0,180,0,100,200,  "brickwallpaper.jfif"], //siena69
        [1100,0,-1000,0,90,0,800,200,  "brickwallpaper.jfif"], //siena70
        [1000,0,-850,0,90,0,300,200,  "brickwallpaper.jfif"], //siena71
        [700,0,-600,0,180,0,800,200,  "brickwallpaper.jfif"], //siena72
        [650,0,-700,0,180,0,700,200,  "brickwallpaper.jfif"], //siena73
        [300,0,-650,0,90,0,100,200,  "brickwallpaper.jfif"], //siena74
        [200,0,1200,0,90,0,200,200,  "brickwallpaper.jfif"], //siena75
        [300,0,1250,0,90,0,300,200,  "brickwallpaper.jfif"], //siena76
        [400,0,1100,0,180,0,200,200,  "brickwallpaper.jfif"], //siena77
        [500,0,1250,0,90,0,300,200,  "brickwallpaper.jfif"], //siena78
        [600,0,1200,0,90,0,200,200,  "brickwallpaper.jfif"], //siena79
        [850,0,1100,0,180,0,500,200,  "brickwallpaper.jfif"], //siena80
        [1100,0,1150,0,90,0,100,200,  "brickwallpaper.jfif"], //siena81
        [1150,0,1200,0,180,0,100,200,  "brickwallpaper.jfif"], //siena82
        [1200,0,1100,0,90,0,200,200,  "brickwallpaper.jfif"], //siena83
        [750,0,1000,0,180,0,900,200,  "brickwallpaper.jfif"], //siena84
        [300,0,950,0,90,0,100,200,  "brickwallpaper.jfif"], //siena85
        [800,0,900,0,180,0,1000,200,  "brickwallpaper.jfif"], //siena86
        [1300,0,1100,0,90,0,400,200,  "brickwallpaper.jfif"], //siena87
        [1400,0,1100,0,90,0,600,200,  "brickwallpaper.jfif"], //siena88
        [1350,0,800,0,180,0,100,200,  "brickwallpaper.jfif"], //siena89
        [1300,0,650,0,90,0,300,200,  "brickwallpaper.jfif"], //siena90
        [1350,0,500,0,180,0,100,200,  "brickwallpaper.jfif"], //siena91
        [1350,0,400,0,180,0,100,200,  "brickwallpaper.jfif"], //siena92
        [1400,0,450,0,90,0,100,200,  "brickwallpaper.jfif"], //siena93
        [1300,0,250,0,90,0,300,200,  "brickwallpaper.jfif"], //siena94
        [1200,0,250,0,90,0,300,200,  "brickwallpaper.jfif"], //siena95
        [1250,0,100,0,180,0,100,200,  "brickwallpaper.jfif"], //siena96
        [1100,0,400,0,180,0,200,200,  "brickwallpaper.jfif"], //siena97
        [1000,0,450,0,90,0,100,200,  "brickwallpaper.jfif"], //siena98
        [1100,0,500,0,180,0,200,200,  "brickwallpaper.jfif"], //siena99
        [1200,0,650,0,90,0,300,200,  "brickwallpaper.jfif"], //siena100
        [950,0,800,0,180,0,500,200,  "brickwallpaper.jfif"], //siena101
        [700,0,550,0,90,0,500,200,  "brickwallpaper.jfif"], //siena102
        [600,0,500,0,90,0,600,200,  "brickwallpaper.jfif"], //siena103
        [800,0,300,0,180,0,200,200,  "brickwallpaper.jfif"], //siena104
        [700,0,200,0,180,0,200,200,  "brickwallpaper.jfif"], //siena105
        [900,0,50,0,90,0,500,200,  "brickwallpaper.jfif"], //siena106
        [800,0,-50,0,90,0,500,200,  "brickwallpaper.jfif"], //siena107
        [1150,0,-200,0,180,0,500,200,  "brickwallpaper.jfif"], //siena108
        [1050,0,-300,0,180,0,500,200,  "brickwallpaper.jfif"], //siena109
        [1400,0,-850,0,90,0,1300,200,  "brickwallpaper.jfif"], //siena110
        [1300,0,-900,0,90,0,1200,200,  "brickwallpaper.jfif"], //siena111
    ],

    objects : [
        
    ]
}, "peat" )