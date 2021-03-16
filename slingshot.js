class SlingShot{
 constructor(bodyA,pointB){
 var options={
     bodyA : bodyA,
     pointB : pointB,
     stiffness : 0.04,
     length : 10
 }
this.sling=Constraint.create(options)
this.pointB=pointB;
World.add(world,this.sling)
 }

 flying(){
     this.sling.bodyA=null;
 }
display(){
push();
strokeWeight(5)
if(this.sling.bodyA){
line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
}
pop();
}
}
