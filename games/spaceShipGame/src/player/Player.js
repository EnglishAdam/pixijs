function Player(app) {
    // Extend Sprite
    PIXI.Sprite.call(this, app.resources.player.texture);
    this.app = app;
    this.position.x = app.renderer.width/2;
    this.position.y = app.renderer.height/2;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
}

Player.prototype = Object.create(PIXI.Sprite.prototype);
Player.prototype.update = require('./prototype/update');
Player.prototype.fire = require('./prototype/fire');

module.exports = Player