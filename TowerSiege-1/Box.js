class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.color=color
    this.visibility=255;
  } 
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("cyan");
    rect(pos.x, pos.y, this.width, this.height);

    if(this.body.speed<3){
      super.display();
    } else{
      world.remove(world,this.body);
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50)
    }
  }
};
