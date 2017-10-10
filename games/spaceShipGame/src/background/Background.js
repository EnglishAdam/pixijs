/**
 * Background
 * @class Background
 */
function Background(app, texture) {
    PIXI.extras.TilingSprite.call(this, PIXI.Texture.fromImage(texture), app.renderer.width, app.renderer.height);
    // this.width = app.renderer.width;
    // this.height = app.renderer.height;
    // this.anchor.x = 0;
    // this.anchor.y = 0;
}

Background.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

Background.prototype.update = function update() {
    // console.log('BackgroundUpdate')
}

// Background.prototype.destroy = PIXI.Sprite.prototype.destroy.bind(this)

module.exports = Background