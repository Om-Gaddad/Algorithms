var movingRect, fixedRect;



function setup() {
  createCanvas(800,400);


  fixedRect = createSprite(400, 200, 50, 100);
 movingRect = createSprite(400, 300, 100, 50);

 
 fixedRect.debug = true;
 movingRect.debug = true;

 fixedRect.shapeColor = "red";
 movingRect.shapeColor = "red";


}

//When two objects are touching the ditance between their centers = half the width of the first object + half the width of the second object
//Distance =  bigger coordinate - smaller coordinate


function draw() {
  background(0);
   movingRect.x = mouseX;
   movingRect.y = mouseY; 

   if(fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
   }
   else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
   }

  drawSprites();
}

