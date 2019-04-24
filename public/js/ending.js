var easyRestart;

var Ending = {

    preload : function() {
    	game.load.image('Wall_paper' , 'img/space.jpg');
        game.load.image('restartButton', 'img/restartbutton.png');
        game.load.image('menuButton', 'img/menubutton.png');
    },

    create : function() {
        var image = game.add.image(0,0,'Wall_paper');
        game.stage.background = image;
        game.add.button(350,300,'restartButton', this.startGame, this);
        game.add.button(350,400,'menuButton', this.goMenu, this);
        totalScore = game.add.text(game.world.centerX, 200, score, { font: '124px Arial', fill: '#00fs' });
        totalScore.anchor.setTo(0.5)
        easyRestart = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    },

    update : function() {
        if (easyRestart.isDown) {
            this.startGame();
        }
    },

    startGame : function() {
        game.state.start('Game');
    },

    goMenu : function() {
        game.state.start('mainMenu');
    },

}
