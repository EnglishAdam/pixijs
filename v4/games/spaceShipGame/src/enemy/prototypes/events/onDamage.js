module.exports = function onDamage() {
    this.texture = app.resources.enemy.texture
    setTimeout(() => {
        this.texture = app.resources.enemyHit.texture
    }, 1000);
}