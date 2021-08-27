const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine;
var world;
var ball;
var ground
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
var options={
restitution:0.5
}
ball=Bodies.circle(200,100,30,options);
World.add(world,ball);
var ground_options={
isStatic:true
}
ground=Bodies.rectangle(100,380,1000,10,ground_options);
World.add(world,ground);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,30);
  rect(ground.position.x,ground.position.y,1000,10);
  console.log(ball)
  drawSprites();
}