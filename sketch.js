
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5;
var platform;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObj1 = new Bob(200,500,20);
	bobObj2 = new Bob(240,500,20);
	bobObj3 = new Bob(280,500,20);
	bobObj4 = new Bob(320,500,20);
	bobObj5 = new Bob(360,500,20);

	platform = new Roof(278,200,300,30);

	rope1 = new Rope(bobObj1.body, {x : 200, y : 200});
	rope2 = new Rope(bobObj2.body, {x : 240, y : 200});
	rope3 = new Rope(bobObj3.body, {x : 280, y : 200});
	rope4 = new Rope(bobObj4.body, {x : 320, y : 200});
	rope5 = new Rope(bobObj5.body, {x : 360, y : 200});

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(190);

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  platform.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-1000,y:-1000})
	}
}


