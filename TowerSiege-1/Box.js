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

    if(this.body.speed<3){
      super.display();
    } else{
      World.remove(world,this.body);
      this.visibility-=5;
    }
  }
};
