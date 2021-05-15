class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.7,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("box.png")
      this.Visibility = 255;
      World.add(world, this.body);

    }
    display(){
      if(this.body.speed<3){
      push();
      translate(this.body.position.x, this.body.position.y);
      //stroke("black")
      //strokeWeight(4);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
      }

      else{ 
        World.remove(world,this.body);
        push();
        this.Visibility=this.Visibility-5;
        tint(255,this.Visibility);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        pop();
      }

    }
}