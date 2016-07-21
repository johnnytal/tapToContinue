var gameMain = function(game){
    time_left = 15;
    level = 1;
    tries = 1;
};

gameMain.prototype = {
    create: function(){  
        levelsGroup = game.add.group();

        level1 = levelsGroup.create(0, 0, 'level1');
        
        timeLabel = this.add.text(350, 10, '0:' + time_left, {
            font: '56px Luckiest Guy', fill: 'red', fontWeight: 'normal', align: 'center', stroke:'#ffffff', strokeThickness: 3
        });
        timeLabel.alpha = 0.6;
        
        triesLabel = this.add.text(600, 1020, 'T r i e s : ' + tries, {
            font: '42px Luckiest Guy', fill: 'darkblue', fontWeight: 'normal', align: 'center', stroke:'#ffffff', strokeThickness: 3
        });
        tries.alpha = 0.6;
        
        virusLabel = this.add.text(45, 940, 'http://5z8.spy/t4u7-steal.ip/hot-goats.mov', {
            font: '40px', fill: 'blue', fontWeight: 'normal', align: 'center'
        });
        virusLabel2 = this.add.text(40, 945, '____________________________________________', {
            font: '36px', fill: 'blue', fontWeight: 'normal', align: 'center'
        });
        
        virusLabel.inputEnabled = true;
        virusLabel.visible = false;
        virusLabel2.visible = false;

        finishLabel = game.add.text(70, 150, 'You Won! \n\n And it took you only ' + tries + ' tries. \n\n Offer me more riddles\nfor the next release\n(Credit guarnteed)\n\njohnnytal9@gmail.com', {
            font: '48px Luckiest Guy', fill: 'white', fontWeight: 'normal', align: 'center'
        });
        finishLabel.visible = false;   

        sfxSwipeLeft = game.add.audio('swipeLeftSfx', 1, true);

        try{ mc.destroy(); }catch(e){}
        
        screen = document.getElementById('game');
        mc = new Hammer(screen);
        mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL, threshold: 10 });
        mc.get('pinch').set({ enable: true });
        
        try{
            Cocoon.Ad.AdMob.configure({
                android: { 
                      interstitial:""
                }
            });
            
            interstitial = Cocoon.Ad.AdMob.createInterstitial();
            interstitial.load();
            
            bannerNotCraeted = false;
        } catch(e){}

        setTimer(15);

        // level 1 (tap)

        level1.inputEnabled = true;
        level1.events.onInputDown.add(function(){
            level1.destroy();
            
            level2 = levelsGroup.create(0, 0, 'level2');
            level = 2;

            setTimer(5);
        }, this);
        
        // level 2 (swipe right)

        mc.on("swiperight", function(ev) {
            if(!ev.handled && level == 2){
                 level2.destroy();
                 
                 level3 = levelsGroup.create(0, 0, 'level3');
                 level = 3;
                 sfxSwipeLeft.play();
 
                 setTimer(7);
             }
        });

        // level 3 (turn up the volume)

        mc.on("swipeleft", function(ev) {
            if(!ev.handled && level == 3){
                 level3.destroy();
                 sfxSwipeLeft.stop();
 
                 level4 = levelsGroup.create(0, 0, 'level4');
                 level = 4;
                 
                 setTimer(6);
                 
                 // level 4 (don't tap)
                 
                 level4.inputEnabled = true;
                 level4.events.onInputDown.add(function(){
                     gameOver();
                 }, this);
             }
        });

        //level 5 (swipe left)

        mc.on("swipeleft", function(ev) {
            if(!ev.handled && level == 5){
                 level5.destroy();
                 
                 // level 6 (pentadruple)
                 
                 level6 = levelsGroup.create(0, 0, 'level6');
                 level = 6;
                 
                 setTimer(6);
                 
                 var level6clicks = 0;
     
                 level6.inputEnabled = true;
                 level6.events.onInputDown.add(function(){
                     level6clicks++;
        
                     if (level6clicks == 5){
                         level6.destroy();
                         
                         level7 = levelsGroup.create(0, 0, 'level7');
                         level = 7;
 
                         setTimer(12);    
                     }
                 }, this);
             }
        });

        // level 7 (blake)

        mc.on("swiperight", function(ev) {
            if(!ev.handled && level == 7){
                 level7.destroy();
                
                 level8 = levelsGroup.create(0, 0, 'level8');
                 level = 8;

                 setTimer(7);
    
                 virusLabel.visible = true;
                 virusLabel2.visible = true;
                 
                 // level 8 (virus)
    
                 virusLabel.events.onInputDown.add(function(){
                     if (level == 8){
                         level8.destroy();
                         virusLabel.destroy();
                         virusLabel2.destroy();
                         
                         level9 = levelsGroup.create(0, 0, 'level9');
                         level = 9;
        
                         setTimer(4);
                     }
                 }, this);
              }
         });

        // level 9 (zoom)

        mc.on("pinchout", function(ev) {
            if(!ev.handled && level == 9){
                 level9.destroy();
                
                 level10 = levelsGroup.create(0, 0, 'level10');
                 level = 10;

                 setTimer(5);
                
                 // level 10 (press 4)
                 
                 number4 = game.add.sprite(600, 870, 'number4');
                 number4.inputEnabled = true;
                 number4.events.onInputDown.add(function(){
                    level10.destroy();
                    number4.destroy();
                    
                    level = 11;
                    
                    finishGame();
                    
                }, this);
            }
       });
    },

    update: function(){
        if (time_left < 1){
            time_left = 15;
            gameOver();
        }
    
        if (time_left == 1 && level == 4){
            level = 5;
            
            level4.destroy();
            level5 = levelsGroup.create(0, 0, 'level5');

            setTimer(3);    
        }
    }
};

function setTimer(_time){
   try{
       clearInterval(timer); 
   } catch(e){}
   
   time_left = _time;
   if (time_left < 10) {
       timeLabel.text = '0:0' + time_left; 
   }
   else{
       timeLabel.text = '0:' + time_left; 
   }
   
   timer = setInterval(function(){
       if (time_left > 0){
           time_left--;
           timeLabel.text = '0:' + time_left; 
           
           if (time_left < 10) {
               timeLabel.text = '0:0' + time_left; 
           }
       }
    }, 1000);    
}

function gameOver(){
    try{
        sfxSwipeLeft.stop();
    } catch(e){}
    tries++;
    triesLabel.text = 'T r i e s : ' + tries;
    
    this.game.state.start("Game"); 
}

function finishGame(){
    try{
        interstitial.show();
    } catch(e){}   

    clearInterval(timer);
    timeLabel.destroy();
    triesLabel.destroy();
    
    finishLabel.visible = true;
}

