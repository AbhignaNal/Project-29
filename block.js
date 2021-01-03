class Block{
    constructor(x, y, width, height){
        var options = {
            //isStatic: false,
            restitution: 0.4,
            friction: 0.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(this.x, this.y, 30, 40);
        pop();
    }
}