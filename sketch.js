var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

var particle;

var score = 0;
var gameState = "play";
var count; 


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

    for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
   

    
}
 


function draw() {
  background("black");

  stroke("white");
  textSize(20); 
  fill("white")
  text("Score : " + score, 70,50); 
  text("500",30,550)
  text("500",100,550)
  text("500",170,550)
  text("500",250,550)
  text("100",340,550)
  text("100",420,550)
  text("100",500,550)
  text("200",580,550)
  text("200",670,550)
  text("200",750,550)



  Engine.update(engine);
  ground.display();
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }
  
   for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
  
   if(particle!=null){
    particle.display();
   if(particle.body.position.y>760){
   if(particle.body.position.x < 300){
     score = score+500;
     particle = null;
     if(count>=5)
     gameState = "end";  
     }  
   }  
   }  
   

}

function mousePressed() {
  if(gameState!=="end") {
    count++;
    particle = new Particle(mouseX,10,10,10);
  
  }
 
}