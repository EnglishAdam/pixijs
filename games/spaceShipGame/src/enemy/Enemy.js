function Enemy(app, texture) {
    console.log(texture)
    PIXI.Sprite.call(this, PIXI.Texture.fromImage(texture));
    this.position.x = app.renderer.width/2;
    this.position.y = app.renderer.height/2;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
}

Enemy.prototype = Object.create(PIXI.Sprite.prototype);

Enemy.prototype.update = function update() {
    // console.log(Enemy.prototype.destroy)
}

// Enemy.prototype.destroy = PIXI.Sprite.prototype.destroy.bind(this)

module.exports = Enemy