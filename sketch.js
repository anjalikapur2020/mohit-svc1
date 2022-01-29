const Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body;
var bgimg
var gameState = "wait"
var bgimg1, logo, logoimg, about, level1item1, level1item2, level1item3
var level1item1img, level2item1img, level3item1img
var level1obs1, level1obs2, level1obs3, level1obs4, level1obs5
var level1obs1img, level1obs2img, level1obs3img, level1obs4img, level1obs5img
var player, engine, world, invisibleground
var life = 3
var level1img, heart, collect, start, startimg, gottime, gotbino,resizeCanvas
var lifeprint = "left"
var heartimg
var heartallimg, heartlost1img, heartlost2img, heartlostallimg, l1collectall, l1collectmap, l1collecttime, l1collectbino, l1collectmaptime, l1collectmapbino
var l1collecttimebino, l1collectmap, playerwalk, playerdie, playerwalkleft
var count = 0
var levelup,levelupimg,level2grndimg,wall,wallimg,doorc,dooro,dooropen,doorclose
var fall="no"
var metaldoor,metaldoorimg

function preload() {
    bgimg = loadImage("magicbook.gif")
   // metaldoorimg=loadAnimation("dm1.jpg","dm1.jpg","dm1.jpg","dm2.jpg","dm2.jpg","dm2.jpg","dm2.jpg","dm3.jpg","dm3.jpg","dm3.jpg","dm3.jpg","dm3.jpg","dm4.jpg","dm4.jpg","dm4.jpg","dm4.jpg","dm4.jpg")
    dooropen=loadImage("dr1.png")
    doorclose=loadImage("dr2.png")
    level2grndimg=loadImage("ground.JPG")
    wallimg=loadImage("castleasset4.png")
    levelupimg=loadImage("levelup.gif")
    level1img = loadImage("level1.png")
    level2img = loadImage("level2.png")
    bgimg1 = loadImage("mysterybg.jpg")
    logoimg = loadImage("logo.png")
    playbg = loadImage("bgcastle.jpg")
    level1item1img = loadImage("map.png")
    level1item2img = loadImage("time.png")
    level1item3img = loadImage("bino.png")
    level1obs1img = loadImage("obs2.png")
    level1obs2img = loadImage("obs3.png")
    level1obs3img = loadImage("obs5.png")
    level2obs1img = loadImage("obs1.png")
    heartallimg = loadAnimation("lifeall.png", "lifeall.png", "lifeall.png")
    heartlost1img = loadAnimation("lifelost1.png", "lifelost1.png", "lifelost1.png")
    heartlost2img = loadAnimation("lifelost2.png", "lifelost2.png", "lifelost2.png")
    heartlostallimg = loadAnimation("lifelostall.png", "lifelostall.png", "lifelostall.png")

    collectionbar = loadImage("collectionbar.PNG")



    playerwalk = loadAnimation("image/wright/w1.png", "image/wright/w2.png", "image/wright/w3.png", "image/wright/w4.png", "image/wright/w5.png", "image/wright/w6.png", "image/wright/w7.png", "image/wright/w8.png", "image/wright/w9.png", "image/wright/w10.png")
    playerdie = loadAnimation("image/die/d7.png", "image/die/d7.png")
    playerwalkleft = loadAnimation("image/wleft/w1.png", "image/wleft/w2.png", "image/wleft/w3.png", "image/wleft/w4.png", "image/wleft/w5.png", "image/wleft/w6.png", "image/wleft/w7.png", "image/wleft/w8.png", "image/wleft/w9.png", "image/wleft/w10.png")

    startimg = loadImage("image/level1/start.png")

}

function setup() {
    createCanvas(windowWidth - 20, windowHeight - 50)
    //  book=createSprite(width/4,height/1.25)
    //book.addImage(bgimg)
    //book.scale=.7

    engine = Engine.create()
    engine = engine.world

    invisibleground = createSprite(width / 2, height - 20, width, 10)
    invisibleground.visible = false

    logo = createSprite(width / 2, height / 2.5)
    logo.addImage(logoimg)
    logo.scale = 1.25

    levelup = createSprite(width / 2, height / 2.5)
    levelup.addImage(levelupimg)
    levelup.scale = 1.25
    levelup.visible=false

    level1item1 = createSprite((Math.round(random(250, width - 100))), (Math.round(random(100, height - 50))))
    level1item1.addImage(level1item1img)
    level1item1.scale = 0.2
    level1item1.visible = false

    

    level1item2 = createSprite((Math.round(random(100, width - 100))), (Math.round(random(100, height - 100))))
    level1item2.addImage(level1item2img)
    level1item2.scale = 0.35
    level1item2.visible = false

    level1item3 = createSprite((Math.round(random(80, width - 80))), (Math.round(random(100, height - 80))))
    level1item3.addImage(level1item3img)
    level1item3.scale = 0.35
    level1item3.visible = false



    level1obs1 = createSprite(100, height - 100)
    level1obs1.addImage(level1obs1img)
    level1obs1.scale = 0.5
    level1obs1.visible = false

    level1obs2 = createSprite((width - 100), height - 100)
    level1obs2.addImage(level1obs2img)
    level1obs2.scale = 0.5
    level1obs2.visible = false


    level1obs3 = createSprite((width / 2 + 100), height - 100)
    level1obs3.addImage(level1obs3img)
    level1obs3.scale = 0.5
    level1obs3.visible = false


    play = createImg("play.png")
    play.position(width / 3, height / 1.3)
    play.size(250, 150)


    about = createImg("about.png")
    about.position(width / 3 + 300, height / 1.3)
    about.size(230, 150)

    level1 = createSprite(150, 60)
    level1.addImage(level1img)
    level1.visible = false
    level1.scale = 0.7

    level2 = createSprite(150, 60)
    level2.addImage(level2img)
    level2.visible = false
    level2.scale = 0.7

    heart = createSprite(width - width / 8, 60)
    heart.addAnimation("all", heartallimg)
    heart.addAnimation("one", heartlost1img)
    heart.addAnimation("two", heartlost2img)
    heart.addAnimation("three", heartlostallimg)
    heart.visible = false
    heart.scale = 0.6

    player = createSprite(width / 4, height - 50, 50, 50)
    player.visible = false

    player.addAnimation("walk", playerwalk)
    player.addAnimation("walkleft", playerwalkleft)
    player.addAnimation("die", playerdie)
    player.setCollider("rectangle", 0, 0, player.width / 4, player.height / 2)


    collect = createSprite(width / 2 - 20, 60)
    collect.addImage(collectionbar)


    collect.visible = false
    collect.scale = 0.6
    //collect.debug=true
    collect.setCollider("rectangle", 0, 0, collect.width, collect.height)

    level1start = createSprite(width / 2, height / 2)
    level1start.addImage(startimg)
    level1start.visible = false


    gotmap = createSprite(collect.x + 50, collect.y + 10)
    gotmap.addImage(level1item1img)
    gotmap.scale = 0.15
    gotmap.visible = false

    gottime = createSprite((collect.x) - 50, collect.y + 10)
    gottime.addImage(level1item2img)
    gottime.scale = 0.3
    gottime.visible = false

    gotbino = createSprite(collect.x, collect.y + 10)
    gotbino.addImage(level1item3img)
    gotbino.scale = 0.3
    gotbino.visible = false


//level 2
wall=createSprite(width/4,height/2)
wall.addImage(wallimg)
wall.visible=false

doorc= createSprite(width-200,height/4)
doorc.addImage(doorclose)
doorc.visible=false

dooro= createSprite(width-200,height/4)
dooro.addImage(dooropen)
dooro.visible=false

/*metaldoor = createSprite(width/2-200,height/1.25)
metaldoor.addAnimation("metaldooropen",metaldoorimg)
metaldoor.scale=0.5
metaldoor.visible=false*/



}

function draw() {
    if(gameState==="wait"){
    background(bgimg1)


}
    //player.display()

    player.collide(invisibleground)

    play.mousePressed(() => {
        gameState = "Level 1"

    })

    if (gameState === "Level 1") {
        background(playbg)
        logo.visible = false
        play.hide()
        about.hide()
        level1item1.visible = true
        level1item2.visible = true
        level1item3.visible = true

        level1obs2.visible = true
        level1obs3.visible = true
        level1.visible = true
        collect.visible = true
        player.visible = true
        heart.visible = true

        if(count===3){
            gameState="levelup"
        }


        if (keyIsDown(RIGHT_ARROW)) {
            player.x += 5
            player.changeAnimation("walk", playerwalk)
        }

        if (keyIsDown(LEFT_ARROW)) {
            player.x -= 5
            player.changeAnimation("walkleft", playerwalkleft)
        }

        if (keyDown("space")) {
            player.velocityY = -15
        }

        player.velocityY += 0.8
        if (player.x > width) {
            player.x = 50
        }

        if (player.x < 0) {
            player.x = width - 100
        }




        if (player.isTouching(level1item1) || player.isTouching(level1item2) || player.isTouching(level1item3)) {
            if (player.isTouching(level1item1) && keyDown("t")) {
                gotmap.visible = true
                level1item1.destroy()
                count += 1
                console.log("got : ", count)
            }

            if (player.isTouching(level1item2) && keyDown("t")) {
                gottime.visible = true
                level1item2.destroy()
                count += 1
                console.log("got : ", count)
            }

            if (player.isTouching(level1item3) && keyDown("t")) {
                gotbino.visible = true
                level1item3.destroy()
                count += 1
                console.log("got : ", count)
            }
        }




        if (player.isTouching(level1obs2) || player.isTouching(level1obs3)) {
            level1start.visible = true
            

            if (player.isTouching(level1obs2)) {
                level1obs2.destroy()


            }

            if (player.isTouching(level1obs3)) {
                level1obs3.destroy()
            }
            life = life - 1
            if (life == 2) {
                heart.changeAnimation("one", heartlost1img)
            }

            if (life == 1) {
                heart.changeAnimation("two", heartlost2img)
            }

            player.changeAnimation("die", playerdie)
            if (life > 0) {
                lifeprint = "lifelost"
            }

        }
        if (keyDown("s")) {
            lifeprint = "left"
            player.changeAnimation("walk", playerwalk)
            level1start.visible = false


        }


    }


    //level up codes

    if(gameState==="levelup"){
        //background(levelupimg)
        background(playbg)
        logo.visible = false
        play.hide()
        about.hide()
        level1item1.visible = false
        level1item2.visible = false
        level1item3.visible = false

        level1obs2.visible = false
        level1obs3.visible = false
        level1.visible = false
        collect.visible = false
        player.visible = false
        heart.visible = false
        levelup.visible=true
    gotmap.visible=false
    gotbino.visible=false
    gottime.visible=false

    }
    //move to next level
    if(gameState==="levelup"&& keyDown("c")){
        gameState="Level 2"
    }

//level 2 codes

if (gameState==="Level 2"){
    background(level2grndimg)
    player.velocityY += 0.8
    level2.visible = true
    level2.depth= wall.depth+1
    level1.visible = false
    levelup.visible=false
    wall.visible=true
    doorc.visible=true
    //metaldoor.visible=true



}

    drawSprites()

    if (gameState === "Level 1") {



        if (lifeprint === "lifelost") {
            fill("green")
            //text(, (width / 4), height / 2)
            player.changeAnimation("die", playerdie)
        }


    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
