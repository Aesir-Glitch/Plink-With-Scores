const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var particles = [];
var plinkos = [];
var divisions = [];

var score = 0;
var count = 0;
var particle;
var gameState = "play";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");
  textSize(40);
  text("Score : "+score,20,30);
  Engine.update(engine);

  textSize(20);
  text("100", 25,625);
  text("100", 105,625);
  text("250", 185,625);
  text("250", 265,625);
  text("500", 345,625);
  text("500", 425,625);
  text("250", 505,625);
  text("250", 585,625);
  text("100", 665,625);
  text("100", 745,625);

  ground.display();
 
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();     
   }
   
   if(particle != null) {
     particle.display();
     
     if(particle.body.position.y > 760) {
      
      if(particle.body.position.x < 465 && particle.body.position.x > 305){
        score = score + 500;
        particle = null;
        if (count >= 5) gameState = "end";
      }

      if(particle.body.position.x < 625 && particle.body.position.x > 465 || 
         particle.body.position.x < 305 && particle.body.position.x > 145){
        score = score + 250;
        particle = null;
      }

      if(particle.body.position.x < 800 && particle.body.position.x > 625 || 
         particle.body.position.x < 145 && particle.body.position.x > 0){
        score = score + 100;
        particle = null;
      }
     }
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed() {
  console.log(count);
  if(gameState !== "end") {
    count++;
    particle = new Particle(mouseX,10,10,10);
    
  }
}