class Enemy{
    constructor(a,b){
        this.x = a
        this.y = b
       
    }

    display(){

        if (World.frameCount % 90 === 0) {
            this.enemy = createSprite(this.x,this.y,10,10);  
            this.enemy.x = Math.round(random(10,1000));
            this.enemyImage = loadImage("covid2.png");
            this.enemy.addImage(this.enemyImage);
            this.enemy.scale = 0.1
            this.enemy.velocityY = 2
         
        }
    }
}