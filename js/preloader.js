var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
        this.game.load.image("level1", "assets/images/level1.jpg");
        this.game.load.image("level2", "assets/images/level2.jpg");
        this.game.load.image("level3", "assets/images/level3.jpg");
        this.game.load.image("level4","assets/images/level4.jpg");
        this.game.load.image("level5","assets/images/level5.jpg");
        this.game.load.image("level6","assets/images/level6.jpg");
        this.game.load.image("level7","assets/images/level7.jpg");
        this.game.load.image("level8","assets/images/level8.jpg");
        this.game.load.image("level9","assets/images/level9.jpg");
        this.game.load.image("level10","assets/images/level10.jpg");
       
        this.game.load.image("number4","assets/images/number4.png");

        this.game.load.audio('swipeLeftSfx', 'assets/audio/swipeLeft.ogg');
    },
    
    create: function(){
        this.game.state.start("Game");  
    }
};