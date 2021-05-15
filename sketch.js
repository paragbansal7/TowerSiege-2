const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var base1,base2,base3,base4;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var b17,b18,b19,b20,b21,b22,b23,b24,b25,b26;
var ball,slingshot;

function preload(){

}

function setup() {
  createCanvas(1024,400);

  engine = Engine.create();
	world = engine.world;

  base1 = new Ground(512,390,1024,20)
  base2 = new Ground(350,290,320,20)
  base3 = new Ground(750,200,200,20)

  b1 = new Box(230,260,40,40)
  b2 = new Box(270,260,40,40)
  b3 = new Box(310,260,40,40)
  b4 = new Box(350,260,40,40)
  b5 = new Box(390,260,40,40)
  b6 = new Box(430,260,40,40)
  b7 = new Box(470,260,40,40)

  b8 = new Box(270,220,40,40)
  b9 = new Box(310,220,40,40)
  b10 = new Box(350,220,40,40)
  b11 = new Box(390,220,40,40)
  b12 = new Box(430,220,40,40)

  b13 = new Box(310,180,40,40)
  b14 = new Box(350,180,40,40)
  b15 = new Box(390,180,40,40)
  
  b16 = new Box(350,140,40,40)

  b17 = new Box(700,170,40,40)
  b18 = new Box(730,170,40,40)
  b19 = new Box(770,170,40,40)
  b20 = new Box(810,170,40,40)

  b21 = new Box(710,130,40,40)
  b22 = new Box(750,130,40,40)
  b23 = new Box(790,130,40,40)

  b24 = new Box(730,90,40,40)
  b25 = new Box(770,90,40,40)

  b26 = new Box(750,50,40,40)

  ball = new Ball(120,100,25)
  slingshot = new SlingShot(ball.body,{x:110,y:110})

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(200);

  base1.display();
  base2.display();
  base3.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();

  b13.display();
  b14.display();
  b15.display();

  b16.display();

  b17.display();
  b18.display();
  b19.display();
  b20.display();

  b21.display();
  b22.display();
  b23.display();

  b24.display();
  b25.display();

  b26.display();

  ball.display();
  slingshot.display();

}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	slingshot.fly()
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(ball.body)
  }
}