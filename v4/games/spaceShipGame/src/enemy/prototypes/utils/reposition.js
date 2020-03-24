module.exports = function reposition() {
    this.position.x = this.app.renderer.width / 2;
    this.position.y = this.app.renderer.height / 2;
}