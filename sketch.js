const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;

var ground1, BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7;

var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;

var BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;

var polygon1;

function setup() {

  createCanvas(800, 400);

  engine = Engine.create();

  world = engine.world

  ground1 = new Ground(170, 200, 320, 20);

  //first level
  BlockBlue1 = new Box(200, 182, 30, 30);

  BlockBlue2 = new Box(220, 182, 30, 30);

  BlockBlue3 = new Box(240, 182, 30, 30);

  BlockBlue4 = new Box(260, 182,30, 30);

  BlockBlue5 = new Box(280, 182, 30, 30);

  BlockBlue6 = new Box(300, 182, 30, 30);

  BlockBlue7 = new Box(320, 182, 30, 30);

  //second level
  BlockPink1 = new BoxPink(201, 2,30, 30);

  BlockPink2 = new BoxPink(220, 2, 30, 30);

  BlockPink3 = new BoxPink(240, 2, 30, 30);

  BlockPink4 = new BoxPink(260, 2, 30, 30);

  BlockPink5 = new BoxPink(280, 2, 30, 30);

  BlockPink6 = new BoxPink(300, 2,30, 30);

  BlockPink7 = new BoxPink(320, 2, 30, 30);

  //third level
  BlockBlue8  = new Box(202, 182, 30, 30);

  BlockBlue9  = new Box(220, 182, 30, 30);

  BlockBlue10 = new Box(240, 182, 30, 30);

  BlockBlue11 = new Box(260, 182,30, 30);

  BlockBlue12 = new Box(280, 182, 30, 30);

  BlockBlue13 = new Box(300, 182,30, 30);

  BlockBlue14 = new Box(320, 182, 30, 30);

  polygon_1 = new poly(110, 100, 30, 30);

  sling = new SlingShot(polygon_1.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);
  ground1.display();

  BlockBlue1.display();

  BlockBlue2.display();

  BlockBlue3.display();

  BlockBlue4.display();

  BlockBlue5.display();

  BlockBlue6.display();

  BlockBlue7.display();

  BlockPink1.display ();

  BlockPink2.display ();

  BlockPink3.display ();

  BlockPink4.display ();

  BlockPink5.display ();

  BlockPink6.display ();

  BlockPink7.display ();

  BlockBlue8.display ();

  BlockBlue9.display ();

  BlockBlue10.display();

  BlockBlue11.display();

  BlockBlue12.display();

  BlockBlue13.display();

  BlockBlue14.display();

  polygon_1.display();

  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

