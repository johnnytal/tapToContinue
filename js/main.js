var gameMain = function(game){
    time_left = 100;
    level = 1;
};

gameMain.prototype = {
    create: function(){  
        levelsGroup = game.add.group();

        level10 = levelsGroup.create(0, 0, 'level10');
        level9 = levelsGroup.create(0, 0, 'level9');
        level8 = levelsGroup.create(0, 0, 'level8');
        level7 = levelsGroup.create(0, 0, 'level7');
        level6 = levelsGroup.create(0, 0, 'level6');
        level5 = levelsGroup.create(0, 0, 'level5');
        level4 = levelsGroup.create(0, 0, 'level4');
        level3 = levelsGroup.create(0, 0, 'level3');
        level2 = levelsGroup.create(0, 0, 'level2');
        level1 = levelsGroup.create(0, 0, 'level1');
        
        timeLabel = this.add.text(280, 10, 'T i m e: ' + time_left, {
            font: '56px ' + font, fill: 'red', fontWeight: 'normal', align: 'center', stroke:'#ffffff', strokeThickness: 3
        });
        timeLabel.alpha = 0.6;
        
        virusLabel = this.add.text(20, 950, 'http://5z8.info/spamBot_t4u7_steal-ip/hotGoats.mov', {
            font: '38px', fill: 'blue', fontWeight: 'normal', align: 'center'
        });
        virusLabel2 = this.add.text(20, 955, '___________________________________________', {
            font: '38px', fill: 'blue', fontWeight: 'normal', align: 'center'
        });
        virusLabel.visible = false;
        virusLabel2.visible = false;
        virusLabel.inputEnabled = true;
        
        number4 = game.add.sprite(600, 870, 'number4');
        number4.inputEnabled = true;
        number4.visible = false;
        
        finishLabel = game.add.text(65, 150, 'You Won! \n\n Thanks for playing. \n\n You can offer me more riddles\nfor the next release at\n\njohnnytal9@gmail.com\n\nCredit guarnteed', {
            font: '48px Luckiest Guy', fill: 'white', fontWeight: 'normal', align: 'center'
        });
        finishLabel.visible = false;

        if (!this.game.device.desktop){
            try{ mc.destroy(); }catch(e){}
            
            screen = document.getElementById('game');
            mc = new Hammer(screen);
            mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL, threshold: 20 });
            mc.get('pinch').set({ enable: true });
        }
        
        setTimer();
        
        /*try{
            Cocoon.Ad.AdMob.configure({
                android: { 
                    interstitial:"ca-app-pub-9795366520625065/2229270238"
                }
            });
            interstitial = Cocoon.Ad.AdMob.createInterstitial();
            interstitial.load();
        } catch(e){}*/
        
        // level 1 (tap)
        level1.inputEnabled = true;
        level1.events.onInputDown.add(function(){
            level1.destroy();
            level = 2;
            
            time_left = 100;
            setTimer();
        }, this);
        
        // level 2 (swipe right)
        if (!this.game.device.desktop && level == 2){       
           mc.on("swiperight", function(ev) {
                level2.destroy();
                level = 3;
                
                time_left = 250;
                setTimer();
           });
        }
        
        else{
            level2.inputEnabled = true;
            level2.events.onInputDown.add(function(){
                level2.destroy();
                level = 3;
                
                time_left = 250;
                setTimer();
            }, this);    
        }
        
        // level 3 (turn up the volume)
        if (!this.game.device.desktop && level == 3){        
           mc.on("swipedown", function(ev) {
                level3.destroy();
                level = 4;
                
                time_left = 150;
                setTimer();
           });
        }
        
        else{
            level3.inputEnabled = true;
            level3.events.onInputDown.add(function(){
                level3.destroy();
                level = 4;
                
                time_left = 150;
                setTimer();
            }, this);    
        }
        
        //level 4 (don't tap)
        level4.inputEnabled = true;
        level4.events.onInputDown.add(function(){
            gameOver();
        }, this);
        
        //level 5 (swipe left)
        if (!this.game.device.desktop && level == 5){        
           mc.on("swipeleft", function(ev) {
                level5.destroy();
                level = 6;
                
                time_left = 120;
                setTimer();
           });
        }
        
       else{
            level5.inputEnabled = true;
            level5.events.onInputDown.add(function(){
                level5.destroy();
                level = 6;
                
                time_left = 120;
                setTimer();
            }, this);    
        }
        
        //level 6 (pentadruple)
        var level6clicks = 0;
         
        level6.inputEnabled = true;
        level6.events.onInputDown.add(function(){
            level6clicks++;

            if (level6clicks == 5 && level == 6){
                level6.destroy();
                level = 7;
                
                time_left = 350;
                setTimer();    
            }
        }, this);

        
        //level 7 (blake)
        if (!this.game.device.desktop && level == 2){        
           mc.on("swiperight", function(ev) {
                level2.destroy();
                level = 3;
                
                time_left = 200;
                setTimer();
    
                virusLabel.visible = true;
                virusLabel2.visible = true;
           });
        }
        
        else{
            level7.inputEnabled = true;
            level7.events.onInputDown.add(function(){
                level7.destroy();
                level = 8;
                
                time_left = 200;
                setTimer();
                
                virusLabel.visible = true;
                virusLabel2.visible = true;
      
            }, this);    
        }

        //level 8 (virus)
        
        virusLabel.events.onInputDown.add(function(){
            if (level == 8){
                level8.destroy();
                virusLabel.destroy();
                virusLabel2.destroy();
                
                level = 9;
            
                time_left = 100;
                setTimer();
            }
        }, this);
        
        //level 9 (zoom)
        
        if (!this.game.device.desktop && level == 9){       
           mc.on("pinchin", function(ev) {
                level9.destroy();
                level = 10;
                
                time_left = 200;
                setTimer();
           });
        }
        
        else{
            level9.inputEnabled = true;
            level9.events.onInputDown.add(function(){
                level9.destroy();
                level = 10;
                
                time_left = 200;
                setTimer();
                
                number4.visible = true;
            }, this);    
        }
        
        //level 10 (press 4)
        
        number4.events.onInputDown.add(function(){
            if (level == 10){
                
                level10.destroy();
                number4.destroy();
                
                level = 11;
                
                finishGame();
            }
        }, this);
        

    },

    update: function(){
        if (time_left < 1){
            time_left = 100;
            gameOver();
        }
    
        if (time_left == 5 && level == 4){
            level4.destroy();
            level = 5;
            
            time_left = 100;
            setTimer();    
        }
    }
};

function setTimer(){
   try{
       clearInterval(timer); 
   } catch(e){}
      
   timer = setInterval(function(){
       if (time_left > 0){
           time_left--;
           timeLabel.text = 'T i m e : ' + time_left; 
           
           if (time_left < 10) {
               timeLabel.text = 'T i m e : 0' + time_left; 
           }
       }
    }, 30);    
}

function gameOver(){
    this.game.state.start("Boot"); 
}

function finishGame(){
    /*try{
        interstitial.show();
    } catch(e){}   */
    
    clearInterval(timer);
    timeLabel.destroy();
    
    finishLabel.visible = true;
}

