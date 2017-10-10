/**
 * Background
 * @class Background
 */
function Background(app, texture) {
    PIXI.Sprite.call(this, PIXI.Texture.fromImage(texture));
    this.width = app.renderer.width;
    this.height = app.renderer.height;
    this.anchor.x = 0;
    this.anchor.y = 0;
}

Background.prototype = Object.create(PIXI.Sprite.prototype);

Background.prototype.update = function update() {
    console.log('BackgroundUpdate')
}

// Background.prototype.destroy = PIXI.Sprite.prototype.destroy.bind(this)

module.exports = Background