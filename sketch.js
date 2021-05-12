const World = Matter.World;//namespacing
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world,engine,ground;
var ball
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
      isStatic : true
  }
  ground = Bodies.rectangle(200,370,50,50,options);
  World.add(world,ground)

  var options={
    restitution:1.5
  }
ball=Bodies.circle(200,200,30,options)
World.add(world,ball)

 console.log(ground)
}

function draw() {
  background(0);  
  Engine.update(engine)

    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,400,50)

    ellipseMode(CENTER)
    ellipse(ball.position.x,ball.position.y,60,60)
}