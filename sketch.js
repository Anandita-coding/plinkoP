
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var particles = []
function setup() {
	createCanvas(500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(width/2,690,500,10)
    if(frameCount%60 === 0){
      particles.push(new Particle(random(width/2-10,width/2+10),10,10))
    }





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("purple");
  


  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
   ground.display();
  drawSprites();
 
}



