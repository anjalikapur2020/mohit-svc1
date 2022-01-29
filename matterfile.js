const Engine=Matter.Engine
const World= Matter.World
const Bodies =Matter.Bodies
const Body =Matter.Body

var engine,world,boy,ground

function setup(){
createCanvas(windowWidth,windowHeight)
engine=Engine.create()
world=engine.world


boy= new Player( 100,100,100,100)

}

function draw(){
background("blue")

boy.display()
}