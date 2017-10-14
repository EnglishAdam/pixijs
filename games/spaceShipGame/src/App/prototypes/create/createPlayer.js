module.exports = function createPlayer() {
    // Create Player
    const player = new this.classes.Player(this)
    this.obj.player = player
    this.layers.player.addChild(player)
}