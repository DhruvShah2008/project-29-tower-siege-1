class SlingShot{
    constructor(bodyA,pointB)
    {
        var options = {
            bodyA:bodyA, 
            pointB:pointB,
            stiffness:0.1,
            length:10
        
        }
        this.pointB = pointB;
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }
    fly(){
        this.Sling.bodyA = null;
    }
    display(){
      
        if(this.Sling.bodyA){
            var pointA = this.Sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight (5);
            line (pointA.x,pointA.y,pointB.x,pointB.y);
    
        }
       
    }
}