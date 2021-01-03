
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var BananaGroup, ObstacleGroup;
var score = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(40,340,30,30);
  monkey.addAnimation("fool",monkey_running);
  monkey.scale = 0.1;
  
ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
   ground.x=ground.width/2;
  BananaGroup = new Group();
  ObstacleGroup = new Group();
  score = 0
  
}


function draw() {
   background(255);
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  if (BananaGroup.isTouching(monkey)) {
    score=score+2;
    BananaGroup.destroyEach()
  }
  
   
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    spawnBanana();
    spawnObstacle();
 
  drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: "+ score, 300,50);        
  
  
    if(ObstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        ObstacleGroup.setVelocityXEach(0);
        BananaGroup.setVelocityXEach(0);
        ObstacleGroup.setLifetimeEach(0);
        BananaGroup.setLifetimeEach(0);
    }
  
}


function spawnObstacle(){
if(frameCount % 80 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    ObstacleGroup.add(obstacle);
  }
}


function spawnBanana(){
  if(frameCount% 40 === 0){
   
   banana = createSprite(600,250,40,10);
    banana.y = random(50,200);    
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
   
    
    //add image of banana
     banana.addImage(bananaImage);
     banana.scale=0.05;
    
    //add each banana to the group
   BananaGroup.add(banana);
  }
}
  
  
