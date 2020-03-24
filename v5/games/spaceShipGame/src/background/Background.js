// Class Background
function Background(app) {
    // Extend TileingSprite Class
    PIXI.extras.TilingSprite.call(this, app.resources.background.texture, app.renderer.width, app.renderer.height);
    
    // Reference Application
    this.app = app;
}

// Extend TileingSprite Class
Background.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

// Loops
Background.prototype.update = require('./prototypes/loops/update')

// Export
module.exports = Background