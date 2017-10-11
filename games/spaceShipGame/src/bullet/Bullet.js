function Bullet(app, index, angle=0) {
    // Extend Sprite Class
    PIXI.Sprite.call(this, app.resources.bullet.texture);

    // Reference Application
    this.app = app;

    // Game Variables
    this.position.x = app.obj.player.position.x;
    this.position.y = app.obj.player.position.y;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.angle = angle;
    this.maxSpeed = 20;
    this.speed = {
        x: Math.sin(this.angle) * this.maxSpeed,
        y: Math.cos(this.angle) * this.maxSpeed
    }
    this.index = index;
    this.life = 1
}

// Extend Sprite Class
Bullet.prototype = Object.create(PIXI.Sprite.prototype);

// Loops
Bullet.prototype.update = require('./prototypes/loops/update')

// Life Cycle
Bullet.prototype.destroy = require('./prototypes/life/destroy')

// Export
module.exports = Bullet