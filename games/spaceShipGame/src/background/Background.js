/**
 * Background
 * @class Background
 */
function Background(app, texture) {
    PIXI.extras.TilingSprite.call(this, PIXI.Texture.fromImage(texture), app.renderer.width, app.renderer.height);
}

Background.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

Background.prototype.update = function update(app) {
    this.tilePosition.x += app.speed.x;
    this.tilePosition.y += app.speed.y;
}

// Background.prototype.destroy = PIXI.Sprite.prototype.destroy.bind(this)

module.exports = Background