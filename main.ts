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
let projectile: Sprite = null
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
        top_image = img`
. . . . . 6 d d d d d d d d d d c d 6 . . . . . 
. . . . 6 4 4 6 d d d d d d d d d 6 4 6 . . . . 
. . . 6 4 4 6 6 6 6 d d d d 6 4 6 6 4 4 6 . . . 
. . 6 4 4 6 d d 4 4 4 4 4 4 4 4 6 6 4 4 4 6 . . 
. . . 6 6 8 c d 4 4 6 8 8 6 4 4 8 8 6 6 6 . . . 
. . . . . . c d 4 4 d d d d 6 4 d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . b d d d d d d d d d d b . . . . . . 
. . . . . . . b d d d d d d d d b . . . . . . . 
. . . . . . . . b d d d d d d b . . . . . . . . 
`
        bottomImage = img`
. . . . . 6 f d d d d d d d d d d f 6 . . . . . 
. . . . 6 4 4 6 d d d d d d d d d 6 4 6 . . . . 
. . . 6 4 4 4 6 6 6 d d d d 6 6 6 4 4 4 6 . . . 
. . 6 4 4 6 d d 6 4 4 4 4 4 4 4 6 6 4 4 4 6 . . 
. . . 6 6 8 d d 4 4 6 8 8 6 4 4 8 8 6 6 6 . . . 
. . . . . . d d 4 4 d d d d 6 4 d d d d . . . . 
. . . . . . d d 6 d d d d d d 6 c d f . . . . . 
. . . . . . d d d d d d d d d d d d f . . . . . 
. . . . . . d d d d d d d d d d d d f . . . . . 
. . . . . . d d d d d d d d d d d c f . . . . . 
. . . . . . d d d d d d d d d d d c f . . . . . 
. . . . . . d d d d d d d d d d d f f . . . . . 
. . . . . . f d d d d d d d d d d f d . . . . . 
. . . . . 6 f d d d d d d d d d d f 6 . . . . . 
. . . . 6 4 4 6 d d d d d d d d d 6 4 6 . . . . 
. . . 6 4 4 4 6 6 6 d d d d 6 6 6 4 4 4 6 . . . 
. . 6 4 4 6 d d 6 4 4 4 4 4 4 4 6 6 4 4 4 6 . . 
. . . 6 6 8 d d 4 4 6 8 8 6 4 4 8 8 6 6 6 . . . 
. . . . . . d d 4 4 d d d d 6 4 d d . . . . . . 
. . . . . . d d 6 d d d d d d 6 c d . . . . . . 
. . . . . . d d f d d d d d d d c d . . . . . . 
. . . . . . d d c d d d d d d d c d . . . . . . 
. . . . . . d d c d d d d d d d f d . . . . . . 
. . . . . . d d c d d d d d d d f d . . . . . . 
. . . . . . d d d d d d d d d d f d . . . . . . 
. . . . . . d d d d d d d d d d c d . . . . . . 
. . . . . 6 d d d d d d d d d d c d 6 . . . . . 
. . . . 6 4 4 6 d d d d d d d d d 6 4 6 . . . . 
. . . 6 4 4 6 6 6 6 d d d d 6 4 6 6 4 4 6 . . . 
. . 6 4 4 6 d d 4 4 4 4 4 4 4 4 6 6 4 4 4 6 . . 
. . . 6 6 8 c d 4 4 6 8 8 6 4 4 8 8 6 6 6 . . . 
. . . . . . c d 4 4 d d d d 6 4 d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . b d d d d d d d d d d b . . . . . . 
. . . . . . . b d d d d d d d d b . . . . . . . 
. . . . . . . . b d d d d d d b . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
    } else if (gap == 1) {
        top_image = img`
. . . . . 6 d d d d d d d d d d c d 6 . . . . . 
. . . . 6 4 4 6 d d d d d d d d d 6 4 6 . . . . 
. . . 6 4 4 6 6 6 6 d d d d 6 4 6 6 4 4 6 . . . 
. . 6 4 4 6 d d 4 4 4 4 4 4 4 4 6 6 4 4 4 6 . . 
. . . 6 6 8 c d 4 4 6 8 8 6 4 4 8 8 6 6 6 . . . 
. . . . . . c d 4 4 d d d d 6 4 d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . b d d d d d d d d d d b . . . . . . 
. . . . . . . b d d d d d d d d b . . . . . . . 
. . . . . . . . b d d d d d d b . . . . . . . . 
`
        bottomImage = img`
. . . . . 6 f d d d d d d d d d d f 6 . . . . . 
. . . . 6 4 4 6 d d d d d d d d d 6 4 6 . . . . 
. . . 6 4 4 4 6 6 6 d d d d 6 6 6 4 4 4 6 . . . 
. . 6 4 4 6 d d 6 4 4 4 4 4 4 4 6 6 4 4 4 6 . . 
. . . 6 6 8 d d 4 4 6 8 8 6 4 4 8 8 6 6 6 . . . 
. . . . . . d d 4 4 d d d d 6 4 d d d d . . . . 
. . . . . . d d 6 d d d d d d 6 c d f . . . . . 
. . . . . . d d d d d d d d d d d d f . . . . . 
. . . . . . d d d d d d d d d d d d f . . . . . 
. . . . . . d d d d d d d d d d d c f . . . . . 
. . . . . . d d d d d d d d d d d c f . . . . . 
. . . . . . d d d d d d d d d d d f f . . . . . 
. . . . . . f d d d d d d d d d d f d . . . . . 
. . . . . 6 f d d d d d d d d d d f 6 . . . . . 
. . . . 6 4 4 6 d d d d d d d d d 6 4 6 . . . . 
. . . 6 4 4 4 6 6 6 d d d d 6 6 6 4 4 4 6 . . . 
. . 6 4 4 6 d d 6 4 4 4 4 4 4 4 6 6 4 4 4 6 . . 
. . . 6 6 8 d d 4 4 6 8 8 6 4 4 8 8 6 6 6 . . . 
. . . . . . d d 4 4 d d d d 6 4 d d . . . . . . 
. . . . . . d d 6 d d d d d d 6 c d . . . . . . 
. . . . . . d d f d d d d d d d c d . . . . . . 
. . . . . . d d c d d d d d d d c d . . . . . . 
. . . . . . d d c d d d d d d d f d . . . . . . 
. . . . . . d d c d d d d d d d f d . . . . . . 
. . . . . . d d d d d d d d d d f d . . . . . . 
. . . . . . d d d d d d d d d d c d . . . . . . 
. . . . . 6 d d d d d d d d d d c d 6 . . . . . 
. . . . 6 4 4 6 d d d d d d d d d 6 4 6 . . . . 
. . . 6 4 4 6 6 6 6 d d d d 6 4 6 6 4 4 6 . . . 
. . 6 4 4 6 d d 4 4 4 4 4 4 4 4 6 6 4 4 4 6 . . 
. . . 6 6 8 c d 4 4 6 8 8 6 4 4 8 8 6 6 6 . . . 
. . . . . . c d 4 4 d d d d 6 4 d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . b d d d d d d d d d d b . . . . . . 
. . . . . . . b d d d d d d d d b . . . . . . . 
. . . . . . . . b d d d d d d b . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
    } else if (gap == 2) {
        top_image = img`
. . . . . 6 d d d d d d d d d d c d 6 . . . . . 
. . . . 6 4 4 6 d d d d d d d d d 6 4 6 . . . . 
. . . 6 4 4 6 6 6 6 d d d d 6 4 6 6 4 4 6 . . . 
. . 6 4 4 6 d d 4 4 4 4 4 4 4 4 6 6 4 4 4 6 . . 
. . . 6 6 8 c d 4 4 6 8 8 6 4 4 8 8 6 6 6 . . . 
. . . . . . c d 4 4 d d d d 6 4 d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . b d d d d d d d d d d b . . . . . . 
. . . . . . . b d d d d d d d d b . . . . . . . 
. . . . . . . . b d d d d d d b . . . . . . . . 
`
        bottomImage = img`
. . . . . 6 f d d d d d d d d d d f 6 . . . . . 
. . . . 6 4 4 6 d d d d d d d d d 6 4 6 . . . . 
. . . 6 4 4 4 6 6 6 d d d d 6 6 6 4 4 4 6 . . . 
. . 6 4 4 6 d d 6 4 4 4 4 4 4 4 6 6 4 4 4 6 . . 
. . . 6 6 8 d d 4 4 6 8 8 6 4 4 8 8 6 6 6 . . . 
. . . . . . d d 4 4 d d d d 6 4 d d d d . . . . 
. . . . . . d d 6 d d d d d d 6 c d f . . . . . 
. . . . . . d d d d d d d d d d d d f . . . . . 
. . . . . . d d d d d d d d d d d d f . . . . . 
. . . . . . d d d d d d d d d d d c f . . . . . 
. . . . . . d d d d d d d d d d d c f . . . . . 
. . . . . . d d d d d d d d d d d f f . . . . . 
. . . . . . f d d d d d d d d d d f d . . . . . 
. . . . . 6 f d d d d d d d d d d f 6 . . . . . 
. . . . 6 4 4 6 d d d d d d d d d 6 4 6 . . . . 
. . . 6 4 4 4 6 6 6 d d d d 6 6 6 4 4 4 6 . . . 
. . 6 4 4 6 d d 6 4 4 4 4 4 4 4 6 6 4 4 4 6 . . 
. . . 6 6 8 d d 4 4 6 8 8 6 4 4 8 8 6 6 6 . . . 
. . . . . . d d 4 4 d d d d 6 4 d d . . . . . . 
. . . . . . d d 6 d d d d d d 6 c d . . . . . . 
. . . . . . d d f d d d d d d d c d . . . . . . 
. . . . . . d d c d d d d d d d c d . . . . . . 
. . . . . . d d c d d d d d d d f d . . . . . . 
. . . . . . d d c d d d d d d d f d . . . . . . 
. . . . . . d d d d d d d d d d f d . . . . . . 
. . . . . . d d d d d d d d d d c d . . . . . . 
. . . . . 6 d d d d d d d d d d c d 6 . . . . . 
. . . . 6 4 4 6 d d d d d d d d d 6 4 6 . . . . 
. . . 6 4 4 6 6 6 6 d d d d 6 4 6 6 4 4 6 . . . 
. . 6 4 4 6 d d 4 4 4 4 4 4 4 4 6 6 4 4 4 6 . . 
. . . 6 6 8 c d 4 4 6 8 8 6 4 4 8 8 6 6 6 . . . 
. . . . . . c d 4 4 d d d d 6 4 d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . b d d d d d d d d d d b . . . . . . 
. . . . . . . b d d d d d d d d b . . . . . . . 
. . . . . . . . b d d d d d d b . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
    } else {
        top_image = img`
. . . . . 6 d d d d d d d d d d c d 6 . . . . . 
. . . . 6 4 4 6 d d d d d d d d d 6 4 6 . . . . 
. . . 6 4 4 6 6 6 6 d d d d 6 4 6 6 4 4 6 . . . 
. . 6 4 4 6 d d 4 4 4 4 4 4 4 4 6 6 4 4 4 6 . . 
. . . 6 6 8 c d 4 4 6 8 8 6 4 4 8 8 6 6 6 . . . 
. . . . . . c d 4 4 d d d d 6 4 d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . b d d d d d d d d d d b . . . . . . 
. . . . . . . b d d d d d d d d b . . . . . . . 
. . . . . . . . b d d d d d d b . . . . . . . . 
`
        bottomImage = img`
. . . . . 6 f d d d d d d d d d d f 6 . . . . . 
. . . . 6 4 4 6 d d d d d d d d d 6 4 6 . . . . 
. . . 6 4 4 4 6 6 6 d d d d 6 6 6 4 4 4 6 . . . 
. . 6 4 4 6 d d 6 4 4 4 4 4 4 4 6 6 4 4 4 6 . . 
. . . 6 6 8 d d 4 4 6 8 8 6 4 4 8 8 6 6 6 . . . 
. . . . . . d d 4 4 d d d d 6 4 d d d d . . . . 
. . . . . . d d 6 d d d d d d 6 c d f . . . . . 
. . . . . . d d d d d d d d d d d d f . . . . . 
. . . . . . d d d d d d d d d d d d f . . . . . 
. . . . . . d d d d d d d d d d d c f . . . . . 
. . . . . . d d d d d d d d d d d c f . . . . . 
. . . . . . d d d d d d d d d d d f f . . . . . 
. . . . . . f d d d d d d d d d d f d . . . . . 
. . . . . 6 f d d d d d d d d d d f 6 . . . . . 
. . . . 6 4 4 6 d d d d d d d d d 6 4 6 . . . . 
. . . 6 4 4 4 6 6 6 d d d d 6 6 6 4 4 4 6 . . . 
. . 6 4 4 6 d d 6 4 4 4 4 4 4 4 6 6 4 4 4 6 . . 
. . . 6 6 8 d d 4 4 6 8 8 6 4 4 8 8 6 6 6 . . . 
. . . . . . d d 4 4 d d d d 6 4 d d . . . . . . 
. . . . . . d d 6 d d d d d d 6 c d . . . . . . 
. . . . . . d d f d d d d d d d c d . . . . . . 
. . . . . . d d c d d d d d d d c d . . . . . . 
. . . . . . d d c d d d d d d d f d . . . . . . 
. . . . . . d d c d d d d d d d f d . . . . . . 
. . . . . . d d d d d d d d d d f d . . . . . . 
. . . . . . d d d d d d d d d d c d . . . . . . 
. . . . . 6 d d d d d d d d d d c d 6 . . . . . 
. . . . 6 4 4 6 d d d d d d d d d 6 4 6 . . . . 
. . . 6 4 4 6 6 6 6 d d d d 6 4 6 6 4 4 6 . . . 
. . 6 4 4 6 d d 4 4 4 4 4 4 4 4 6 6 4 4 4 6 . . 
. . . 6 6 8 c d 4 4 6 8 8 6 4 4 8 8 6 6 6 . . . 
. . . . . . c d 4 4 d d d d 6 4 d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . b d d d d d d d d d d b . . . . . . 
. . . . . . . b d d d d d d d d b . . . . . . . 
. . . . . . . . b d d d d d d b . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
    }
    gapimage = image.create(2, scene.screenHeight())
    gapimage.fill(0)
    gapsprite = 0
    gapsprite = sprites.create(gapimage, SpriteKind.gap)
    gapsprite.setFlag(SpriteFlag.AutoDestroy, true)
    gapsprite.setFlag(SpriteFlag.Invisible, true)
    gapsprite.left = scene.screenWidth()
    gapsprite.vx = -45
    projectile = sprites.createProjectileFromSide(top_image, -45, 0)
    mySprite.top = 0
    projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
    mySprite.left = scene.screenHeight()
})
