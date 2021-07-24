var backCliffs, backForest, backCave, backMountain;
var chr, chrIdle, chrWalk;
var button1, startButtonImage;
var lvl = 0;

function preload(){

backMountain = loadAnimation("Images/Mountains.jpg");
backCliffs = loadAnimation("Images/Cliffs.png");
backCaves = loadAnimation("Images/Caves.png");
backForest = loadAnimation("Images/Forest.png");

//chrWalk = loadAnimation("Images/Character Images/w1.png,w2.png,w3.png,w4.png,w5.png,w6.png");
//chrIdle = loadAnimation("Images/Character Images/Walk/Idle.png");

startButtonImage = loadImage("Images/start.jpg");
  
}

function setup() {
  createCanvas(displayWidth-50,displayHeight-115);
  Mountain = createSprite(width/2, height/2, 5000, 5000);
  Mountain.addAnimation("Mountain",backMountain);
  Mountain.addAnimation("Forest",backForest);

  Mountain.scale = 1.7
  
  button1 = createSprite(width/2,height/2+200,150,30);
  button1.addImage(startButtonImage)

  chr = createSprite(width/2,height/2,40,50);
  chr.addAnimation("chrIdle")
  chr.addAnimation("chrWalk");
  
  
}

function draw() {
  background("white");  
  drawSprites();
  
 
    textSize (40)
    fill ("black")
    text ("Press Start",width/2-90,height/2-300);
  

    if (heyIsDown(RIGHT_ARROW)){
      chr.x = chr.x+10;
    }



    if (mousePressedOver(button1)){
      button1.visible = false;
  
      Mountain.changeAnimation("Forest",backForest);
      
      
    }
  
 
}