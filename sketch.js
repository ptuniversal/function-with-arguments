var moving;
var fixed;
var fixed2;
var fxed3;
var fixed4;

function setup() {

  createCanvas(800,400);
  
  moving=createSprite(100,200,50,25);
  moving.debug=true;

  fixed=createSprite(300,100,25,50);
  fixed.debug=true;

  fixed2=createSprite(200,50,20,20);

  fixed3=createSprite(300,150,50,30);

  fixed4=createSprite(500,250,20 ,50);
  
}

function draw() {

  background(255,255,255);  
  drawSprites();

  moving.x=mouseX;
  moving.y=mouseY;
 
  if(touch(moving,fixed2)){

  fixed2.shapeColor=(30,25,150)

  }
  else{
    moving.shapeColor=(1,1,1);
    fixed2.shapeColor=(1,1,1);
  }

  if(touch(moving,fixed)){

    fixed.shapeColor=(230,125,150)
    fixed.width=100

    }
    else{
      moving.shapeColor=(1,1,1);
      fixed.shapeColor=(1,1,1);
      fixed.width=25;

    }
    if(touch(moving,fixed3)){

      fixed3.shapeColor=(230,125,150)
  
      }
      else{
        moving.shapeColor=(1,1,1);
        fixed3.shapeColor=(1,1,1);
        
      }
      if(touch(moving,fixed4)){

        fixed4.shapeColor=(230,125,150)
        fixed4.width=200
    
        }
        else{
          moving.shapeColor=(1,1,1);
          fixed4.shapeColor=(1,1,1);
          fixed4.width=20;
          
        }
}

