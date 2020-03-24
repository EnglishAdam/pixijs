module.exports = function createBackground() {
    // Create Background
    const background = new this.classes.Background(this)
    this.obj.background = background
    this.layers.background.addChild(background)
}