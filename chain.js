class Chain {
    constructor(birdBody, log6Body) {
        var chainoptions = {
            bodyA: birdBody,
            bodyB: log6Body,
            length:60
        }
        this.rope= Constraint.create(chainoptions);
        World.add(world,this.rope);
        
    }

display(){
 line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y);
}
}