//document.addEventListener("deviceready", start, false);
window.onload = start;

function start(){   
    game = new Phaser.Game(850, 1100, Phaser.CANVAS, "game");    
      
    game.state.add("Boot", boot);
    game.state.add("Preloader", preloader);
    game.state.add("Game", gameMain);
    
    game.state.start("Boot");  
};

var boot = function(game){};
boot.prototype = {
    create: function(){
        font = 'Luckiest Guy'; 

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.maxWidth = window.innerWidth * window.devicePixelRatio;
        this.scale.maxHeight = window.innerHeight * window.devicePixelRatio;
        
        this.scale.forceOrientation(false, true);
    
        game.state.start('Preloader');
    }
};

