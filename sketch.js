var player1
var enemy1
var backgroundImage

function preload(){
backgroundImage = loadImage("background1.jpg");

}

function setup(){

createCanvas(1100,500);

player1 = new Player(580,460);

enemy1 = new Enemy(100,100);

                 
}

function draw(){

background(backgroundImage);

player1.display();
enemy1.display();

 


drawSprites()
}

function mouseReleased(){
    player1.shoot()
}