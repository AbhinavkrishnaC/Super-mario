function preload()
{

}

function setup() 
{
  createCanvas(9000, 700);
  var distanceX = 0;
  var gap = random([100, 50, 90, 40]);
  for(var i = 0; i<40; i++)
  {
    platform = new Platform(distanceX);
    distanceX = distanceX + platform.sptw + gap;

  }
}

function draw() 
{
  background("skyblue");  
  drawSprites();
}


