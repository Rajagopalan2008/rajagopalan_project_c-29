class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.color=color
  } 
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("cyan");
    rect(pos.x, pos.y, this.width, this.height);
  }
};
