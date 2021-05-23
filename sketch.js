var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var pole;
//var helicopterBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;


	//boxPosition = width/2-200
	//boxY = 610;

	pole1=createSprite(400,650,150,10);
	pole1.shapeColor=color(255,0,0);

	pole2=createSprite(330,590,10,130);
	pole2.shapeColor="red";

	pole3=createSprite(470,590,10,130);
	pole3.shapeColor="red";

	
	
	packageBody = Bodies.circle(width/2 , 200 , 5 ,{restitution:0.4,isStatic:true,friction:0.3})
	
	//Matter.Body.setStatic(packageBody,true);
	World.add(world, packageBody);

	//var helicopterSprite_options={
	//	restitution:0.1
	//}
	//helicopterBody = Bodies.circle(width/2 , 200 , 10 ,helicopterSprite_options);
	//World.add(world, helicopterBody);

	//Create a Ground 
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x=packageBody.position.x;
  packageSprite.y=packageBody.position.y; 
  packageSprite.x = helicopterSprite.x
  //rect(packageSprite.position.x,packageSprite.position.y,20,20);
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false);
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

  }
  if(keyCode === RIGHT_ARROW){
	helicopterSprite.x = helicopterSprite.x+5;
	//helicopterSprite.x = packageBody.x;
}
  if(keyCode === LEFT_ARROW){
	 helicopterSprite.x = helicopterSprite.x-5;
    // packageSprite.velocityX = -9
 }
}



