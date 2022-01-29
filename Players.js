class Player{
    constructor(x,y,w,h){

var options={
    mass:0.5,
    friction:0.5,
    restitution:0.5
}

this.body=Bodies.rectangle(x,y,w,h,options)
this.h=h 
this.w=w
World.add(world,this.body)


    }

display(){
var pos=this.body.position
var angle=this.body.angle

rectMode(CENTER)

translate(angle)

rect(pos.x,pos.y,this.w,this.h)


}

}


