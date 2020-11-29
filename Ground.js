class Ground extends baseClass{
    constructor(x,y,width,height) {
     super(x,y,width,height)
     this.image=loadImage("sprites/ground.png")
     Matter.Body.setStatic(this.body,true)
    }
    display(){
      super.display()
    }
  };