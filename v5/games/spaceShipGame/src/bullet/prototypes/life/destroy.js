module.exports = function destroy() {
    this.app.obj.bullets[this.index] = null;
    PIXI.Sprite.prototype.destroy.call(this);
};