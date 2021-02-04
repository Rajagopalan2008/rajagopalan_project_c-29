//to create the constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//to create the variables
var ground1,world,engine,base1,base2,polygen,slingshot,polyImage
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20
var block21,block22,block23,block24,block25,block26,block27,block28,block29,block30 
var block31,block32

function preload() {
    polyImage = loadImage("polygon.png");
}
function setup() {
    createCanvas(800,600);

     engine=Engine.create();
      world=engine.world;

    //to create the ground
    ground1=new Ground(400,600,900,20);

    //to create the base
    base1=new Ground(355,400,210,20);
    base2=new Ground(675,200,210,20);

    //to create the sling holder polygon
    var optionpoly={
        density:50
    }
    polygen=Bodies.circle(75,200,20,optionpoly);
    World.add(world,polygen);
    slingshot=new SlingShot(polygen,{x:75,y:200});

    //to create the blocks
    //base1
    block1=new Box(265,375,30,30);
    block2=new Box(295,375,30,30);
    block3=new Box(325,375,30,30);
    block4=new Box(355,375,30,30);
    block5=new Box(385,375,30,30);
    block6=new Box(415,375,30,30);
    block7=new Box(445,375,30,30);
    block8=new Box(295,345,30,30);
    block9=new Box(325,345,30,30);
    block10=new Box(355,345,30,30);
    block11=new Box(385,345,30,30);
    block12=new Box(415,345,30,30);
    block13=new Box(325,315,30,30);
    block14=new Box(355,315,30,30);
    block15=new Box(385,315,30,30);
    block16=new Box(355,285,30,30);

    //base2
    block17=new Box(585,175,30,30);
    block18=new Box(615,175,30,30);
    block19=new Box(645,175,30,30);
    block20=new Box(675,175,30,30);
    block21=new Box(705,175,30,30);
    block22=new Box(735,175,30,30);
    block23=new Box(765,175,30,30);
    block24=new Box(615,145,30,30);
    block25=new Box(645,145,30,30);
    block26=new Box(675,145,30,30);
    block27=new Box(705,145,30,30);
    block28=new Box(735,145,30,30);
    block29=new Box(645,115,30,30);
    block30=new Box(675,115,30,30);
    block31=new Box(705,115,30,30);
    block32=new Box(675,85,30,30)

}

function draw(){
    background("orange");
    Engine.update(engine);
    imageMode(CENTER);
    image(polyImage, polygen.position.x, polygen.position.y, 40, 40);

    ground1.display();
    base1.display();
    base2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display(); 
    slingshot.display();
  
}

function mouseDragged(){
 polygen: Matter.Body.setPosition(polygen,{x:mouseX,y:mouseY});
}
function mouseReleased(){
slingshot.fly();
}
