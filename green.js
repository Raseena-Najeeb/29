class Green {
    constructor(x,y) {
      var options = {
          isStatic: false,
          resitution : 0.1,
          friction : 0.5
      }
      this.body = Bodies.rectangle(x,y,40,40,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, 40, 40);
    }
  }
