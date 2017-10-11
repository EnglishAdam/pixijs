// Class Enemy
function Enemy(app) {
    // Extend Sprite Class
    PIXI.Sprite.call(this, app.resources.enemy.texture);
    
    // Reference Application
    this.app = app;

    // Game Variables
    this.position.x = app.renderer.width / 2;
    this.position.y = app.renderer.height / 2;
    this.randomPosition = {
        x: Math.round(Math.random() * 2000),
        y: Math.round(Math.random() * 2000)
    }
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
}

// Extend Sprite Class
Enemy.prototype = Object.create(PIXI.Sprite.prototype);

// Loops
Enemy.prototype.update = require('./prototypes/loops/update')

// Events
Enemy.prototype.onDamage = require('./prototypes/events/onDamage')

// Utils
Enemy.prototype.reposition = require('./prototypes/utils/reposition')

// Life Cycle
Enemy.prototype.destroy = require('./prototypes/life/destroy')

// Export
module.exports = Enemy