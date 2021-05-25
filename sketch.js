const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var polygon

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,350,250,10);
  
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

//tower 2 level 1

block17 = new Block(610,325,30,40);
block18 = new Block(640,325,30,40);
block19 = new Block(670,325,30,40);
block20 = new Block(700,325,30,40);
block21 = new Block(730,325,30,40);
block22 = new Block(760,325,30,40);
block23 = new Block(790,325,30,40);

//tower 2 level 2

block24 = new Block(625,295,30,40);
block25 = new Block(655,295,30,40);
block26 = new Block(685,295,30,40);
block27 = new Block(715,295,30,40);
block28 = new Block(745,295,30,40);
block29 = new Block(775,295,30,40);

//tower 2 level 3

block30 = new Block(640,265,30,40);
block31 = new Block(670,265,30,40);
block32 = new Block(700,265,30,40);
block33 = new Block(730,265,30,40);
block34 = new Block(760,265,30,40);

//tower 2 level 4

block35 = new Block(655,235,30,40);
block36 = new Block(685,235,30,40);
block37 = new Block(715,235,30,40);
block38 = new Block(745,235,30,40);

//tower 2 level 5
  
block39 = new Block(670,205,30,40);
block40 = new Block(700,205,30,40);
block41 = new Block(730,205,30,40);

//tower 2 level 6

block42 = new Block(685,165,30,40);
block43 = new Block(715,165,30,40);

//tower 2 level 7

block44 = new Block(700,115,30,40);

polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});


}

function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  fill("grey");
  block16.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  fill("cyan")
 block39.display();
 block40.display();
 block41.display();
fill("lightgreen")
block42.display();
block43.display();
fill("lightpurple")
block44.display();

slingShot.display();
imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}



