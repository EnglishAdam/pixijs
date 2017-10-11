function Bullet(app, texture, index, angle=0) {
    this.app = app;
    PIXI.Sprite.call(this, PIXI.Texture.fromImage(texture));
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

Bullet.prototype = Object.create(PIXI.Sprite.prototype);

Bullet.prototype.update = function update() {
    this.position.x += this.speed.x
    this.position.y += this.speed.y
    // this.position.x += this.app.speed.x
    // this.position.y += this.app.speed.y
    this.life -= 0.01
    if (this.life < 0) this.destroy()
}

Bullet.prototype.destroy = function()
{
    this.app.obj.bullets[this.index] = null;
    PIXI.Sprite.prototype.destroy.call(this);
};

module.exports = Bullet