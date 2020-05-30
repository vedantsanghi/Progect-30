class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
      this.Visibility = 255
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
      super.display();
   } else {
     World.remove(world,this.body)
      push();
      this.Visibility = this.Visibility - 2
      tint(255,this.Visibility)
      rect(0,0, this.width, this.height);
      pop();
    }
   }
 };
  