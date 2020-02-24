namespace SpriteKind {
    export const gap = SpriteKind.create()
}
function bird1 () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . b 6 6 b . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 6 6 6 6 6 b . . . 
. b b b b b 6 6 6 6 6 6 6 b . . 
. b d 6 b 6 6 6 6 6 6 6 6 b . . 
. . b 6 6 b 6 d 1 f 6 d c f . . 
. . b d 6 6 b 1 f f 6 c c 6 . . 
b b d b 6 6 6 d f b c c c c b . 
b d d c d 6 6 b 6 c c c c c c b 
c d d d c c b 6 6 6 6 6 6 6 b . 
c b d d d d d 6 6 6 6 6 6 6 b . 
. c d d d d d d 6 6 6 6 6 d b . 
. . c b d d d d d 6 6 6 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Player)
}
function game2 () {
    game.over(false)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.gap, function (sprite, otherSprite) {
    if (mySprite.right - mySprite.left < 2) {
    	
    }
})
function background () {
    scene.setBackgroundColor(4)
    effects.confetti.startScreenEffect()
}
function score () {
    info.setScore(1)
}
function sound () {
    music.baDing.play()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game2()
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -10
    mySprite.startEffect(effects.spray, 500)
})
let gapsprite = 0
let gapimage: Image = null
let bottomImage: Image = null
let top_image: Image = null
let gap = 0
let mySprite: Sprite = null
score()
bird1()
background()
sound()
game.onUpdate(function () {
    gap = Math.randomRange(0, 3)
    if (gap == 0) {
        top_image = sprites.duck.log1
        bottomImage = sprites.duck.log8
    } else if (gap == 1) {
        top_image = sprites.duck.log2
        bottomImage = sprites.duck.log7
    } else if (gap == 2) {
        top_image = sprites.duck.log7
        bottomImage = sprites.duck.log1
    } else {
        top_image = sprites.duck.log7
        bottomImage = sprites.duck.log1
    }
    gapimage = image.create(2, scene.screenHeight())
    gapimage.fill(0)
    gapsprite = 0
})
