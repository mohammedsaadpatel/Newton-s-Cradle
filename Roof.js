class Roof{
    constructor(x, y, width, height){
        this.body = Bodies.rectangle(x, y, 250, height,{isStatic:true});
        this.width = 250
        this.height = height
        World.add(world,this.body)
    }

    display(){
        push();
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x, this.body.position.y, this.body.width, this.body.height);
        pop();
}
}