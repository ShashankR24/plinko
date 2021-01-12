const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var stand1, stand2, stand3, stand4, stand5, stand6, stand7;
var particles = [];
var plinkos = [];


function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 780, 1200, 10);

  stand1 = new Division(0, 680, 10, 200);
  stand2 = new Division(80, 680, 10, 200);
  stand3 = new Division(160, 680, 10, 200);
  stand4 = new Division(240, 680, 10, 200);
  stand5 = new Division(320, 680, 10, 200);
  stand6 = new Division(400, 680, 10, 200);
  stand7 = new Division(480, 680, 10, 200);
  stand8 = new Division(560, 680, 10, 200);
  stand9 = new Division(640, 680, 10, 200);
  stand10 = new Division(720, 680, 10, 200);

  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75,10));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175,10));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275,10));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375,10));
     
  }
  
}

function draw() {
   background(0);

   Engine.update(engine);

   ground.display();

   stand1.display();
   stand2.display();
   stand3.display();
   stand4.display();
   stand5.display();
   stand6.display();
   stand7.display();
   stand8.display();
   stand9.display();
   stand10.display();

   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  
  if(frameCount%60===0){
   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
 }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
}
