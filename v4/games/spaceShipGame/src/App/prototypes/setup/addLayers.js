module.exports = function addLayers() {
    this.stage.addChild(this.layers.background),
    this.stage.addChild(this.layers.shadow),
    this.stage.addChild(this.layers.expBottom),
    this.stage.addChild(this.layers.enemy),
    this.stage.addChild(this.layers.player),
    this.stage.addChild(this.layers.bullet),
    this.stage.addChild(this.layers.expTop)
}