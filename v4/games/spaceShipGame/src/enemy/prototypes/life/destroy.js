module.exports = function destroy() {
    PIXI.Sprite.prototype.destroy.bind(this);
    }