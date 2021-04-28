var database;
var gameState = 0;
var player,playerCount;
var form;
var allPlayers;
var distance = 0;
var game;
function setup(){
    createCanvas(500,500); 
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    
    if(playerCount===4){
        game.update(1);
    }
    if(gameState===1){
        game.play();
    }
   
}