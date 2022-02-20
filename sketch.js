var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(850,600);

    //create 4 different surfaces
box1 = createSprite(100,550,200,30);
box1.shapeColor = "red";

box2 = createSprite(318,550,200,30);
box2.shapeColor = "blue";

box3 = createSprite(535,550,200,30);
box3.shapeColor = "green";

box4 = createSprite(750,550,200,30);
box4.shapeColor = "orange";
    //create box sprite and give velocity
ball = createSprite(random(20,750),100,40,40);
ball.shapeColor = "grey"
ball.velocityX= 6
ball.velocityY= -6


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
ball.bounceOff(edges);

if(box1.isTouching(ball) && ball.bounceOff(box1)){ 
    ball.shapeColor = "red";
     music.play(); 
    }
    if(box2.isTouching(ball) && ball.bounceOff(box2)){ 
        ball.shapeColor = "blue";
         music.stop(); 
        }
        if(box3.isTouching(ball) && ball.bounceOff(box3)){ 
            ball.shapeColor = "green";
             music.play(); 
            }
            if(box4.isTouching(ball) && ball.bounceOff(box4)){ 
                ball.shapeColor = "orange";
                 music.stop(); 
                }
    
    //add condition to check if box touching surface and make it box
    drawSprites();
}
