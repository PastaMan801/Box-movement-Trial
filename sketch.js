var box;
var box2;
function setup() {
  createCanvas(400,400);

  box = createSprite(100,100,30,30);
  box2 = createSprite(300,300,30,30);
}
edges = createEdgeSprites();
function draw() 
{
   background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
    box2.position.x = box2.position.x +7;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    box2.position.x= box2.position.x-7;
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
    box2.position.y  = box2.position.y - 7;
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
    box2.position.y = box2.position.y +7;
  }
  //if(box.isTouching(edges) || if(box2.isTouching(edges));
  
  //box.bounceOff(edges);
  //box2.bounceOff(edges);
  drawSprites();
}




