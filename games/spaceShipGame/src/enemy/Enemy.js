function Enemy(app) {
    this.app = app;
    PIXI.Sprite.call(this, app.resources.enemy.texture);
    this.position.x = app.renderer.width / 2;
    this.position.y = app.renderer.height / 2;
    this.randomPosition = {
        x: Math.round(Math.random() * 2000),
        y: Math.round(Math.random() * 2000)
    }
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
}

Enemy.prototype = Object.create(PIXI.Sprite.prototype);

Enemy.prototype.update = function update() {
}

Enemy.prototype.damage = function damage() {
    this.texture = app.resources.enemy.texture
    setTimeout(() => {
        this.texture = app.resources.enemyHit.texture
    }, 1000);
}

Enemy.prototype.reposition = function reposition() {
    this.position.x = this.app.renderer.width / 2;
    this.position.y = this.app.renderer.height / 2;
}

Enemy.prototype.destroy = function destroy() {

}

// Enemy.prototype.destroy = PIXI.Sprite.prototype.destroy.bind(this)

module.exports = Enemy