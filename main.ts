namespace SpriteKind {
    export const Arrow = SpriteKind.create()
}
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(assets.image`3`)
    if (arrow.image.equals(arrow_list[3])) {
        mp.changePlayerStateBy(player2, MultiplayerState.Score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(assets.image`1`)
    if (arrow.image.equals(arrow_list[1])) {
        mp.changePlayerStateBy(player2, MultiplayerState.Score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(assets.image`0`)
    if (arrow.image.equals(arrow_list[0])) {
        mp.changePlayerStateBy(player2, MultiplayerState.Score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(assets.image`2`)
    if (arrow.image.equals(arrow_list[2])) {
        mp.changePlayerStateBy(player2, MultiplayerState.Score, 1)
    }
})
let arrow: Sprite = null
let arrow_list: Image[] = []
scene.setBackgroundImage(assets.image`2pbg`)
arrow_list = [
assets.image`0`,
assets.image`1`,
assets.image`2`,
assets.image`3`
]
arrow = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Arrow)
arrow.setPosition(80, 30)
sprites.destroyAllSpritesOfKind(SpriteKind.Player)
mp.setPlayerSprite(mp.PlayerNumber.One, sprites.create(assets.image`0`, SpriteKind.Player))
mp.setPlayerSprite(mp.PlayerNumber.Two, sprites.create(assets.image`0`, SpriteKind.Player))
mp.getPlayerSprite(mp.PlayerNumber.One).changeScale(0.75, ScaleAnchor.Middle)
mp.getPlayerSprite(mp.PlayerNumber.Two).changeScale(0.75, ScaleAnchor.Middle)
mp.getPlayerSprite(mp.PlayerNumber.One).setPosition(40, 90)
mp.getPlayerSprite(mp.PlayerNumber.Two).setPosition(120, 90)
game.splash("Be the quickest to match", "arrow directions to win!")
carnival.startCountdownGame(15, carnival.WinTypes.Multi)
game.onUpdateInterval(500, function () {
    arrow.setImage(arrow_list._pickRandom())
})
