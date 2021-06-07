var bg,bgimage
var tntobj,tntgroup,tntimage
var heart,h=0
var foodimage,f=100;
function preload(){
  heart=loadImage("game imgs/heart_1.png")
  bgimage=loadImage("game imgs/bg1.jpg")
  tntimage=loadImage ("game imgs/tnt.png")
  foodimage=loadImage ("game imgs/foodlife.png")
}

function setup(){

  createCanvas(windowWidth,windowHeight)
  bg=createSprite(windowWidth-20,windowHeight-30)
  bg.addImage(bgimage)
  bg.scale=2.03
//  bg.velocityX=-2
tntgroup=new Group( )
heartCount()
foodCount()


}
function draw(){
  background(0)
  heartCount()
  //infinite background
  //if(bg.x<(windowWidth-20)/2)
  //bg.x=windowWidth-20
   // console.log('X='+bg.x)
    //console.log('Y='+bg.y)
  drawSprites()
}
// moving background0
function keyPressed() {
  if (keyCode === UP_ARROW) {
    bg.x=0
    bg.y=bg.y+20
    if(bg.y>windowHeight)
    bg.y=windowHeight/2
  } 
  else if (keyCode === DOWN_ARROW) {
    bg.x=0
    bg.y=bg.y-20
    if(bg.y<0)
     bg.y=windowHeigth/2
  }
  else if (keyCode === LEFT_ARROW) {
    bg.x=bg.x+20
    bg.y=0
    if(bg.x>windowWidth)
    bg.x=windowWidth/2
}
else if (keyCode === RIGHT_ARROW) {
  bg.x=bg.x-20
  bg.y=0
  if(bg.x<0)
  bg.x=windowWidth/2
}
}
function mouseClicked()
{
  
tntobj=createSprite(mouseX,mouseY)
tntobj.addImage(tntimage)
tntobj.scale=0.25
tntgroup.add(tntobj);

}

function heartCount(){
for (i=10;i<100;i=i+10){
  var ho=createSprite(5+i*5,50)
  ho.addImage(heart)
  ho.scale=0.22
}
}
function foodCount(){

  console.log(Math.round(World.frameCount))
  if(Math.round(World.frameCount/230)===0)
  f=f-10;
for(i=1;i<f;i=i+10){
  var fo=createSprite(1000+i*5,50)
  fo.addImage(foodimage)
  fo.scale=0.102
  
}
}




