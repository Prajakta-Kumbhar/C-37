var database;
var playerCount, gameState;
var form, player, game;
var allPlayers;

function setup(){
    createCanvas(500,500);

    database = firebase.database();
   game = new Game()
   game.getState()
   game.startGame()
}

function draw(){
    background("white");
   
    if(playerCount === 4)
    {
      game.updateState(1)    
    }
    if (gameState === 1)
    {
        game.play()
    }
}

