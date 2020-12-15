class Particle{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:1.7,
            friction:0.5,
            density:1
        }

    this.x=x;
    this.y=y;
    this.r=r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options)  
    this.color = color(random(0,255), random(0,255), random(0,255))  
    World.add(world,this.body)
    }
    display(){
        var particlePos = this.body.position;
            
        
        ellipse(particlePos.x,particlePos.y,this.r,this.r)
        
    }
}