const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var pb, p, cb, c;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  cb = new CompBase(300, 400, 180, 150);
  pb = new PlayBase(900, 400, 180, 150);
  p = new Player(900, pb.height + 150, 100, 100);
  c = new CompPlayer(300, cb.height + 150, 100, 100);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  pb.display();
  cb.display();
  p.display();
  c.display();

   //display Player and computerplayer


}
