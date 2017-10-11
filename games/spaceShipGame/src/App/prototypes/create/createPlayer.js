module.exports = function createPlayer() {
    // Create Player
    const player = new this.classes.Player(this)
    this.obj.player = player
    this.stage.addChild(player)
}