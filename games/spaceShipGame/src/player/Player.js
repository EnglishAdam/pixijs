// Class Player
function Player(app) {
    // Extend Spite Class
    PIXI.Sprite.call(this, app.resources.player.texture);

    // Reference Application
    this.app = app;

    // Game Variables
    this.position.x = app.renderer.width/2;
    this.position.y = app.renderer.height/2;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
}

// Extend Spite Class
Player.prototype = Object.create(PIXI.Sprite.prototype);

// Loops
Player.prototype.update = require('./prototype/loops/update');

// Events
Player.prototype.fire = require('./prototype/events/fire');

// Export
module.exports = Player