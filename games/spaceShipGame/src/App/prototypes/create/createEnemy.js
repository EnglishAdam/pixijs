module.exports = function createEnemy() {
    // Create Enemy
    const enemy = new this.classes.Enemy(this)
    this.obj.enemies.push(enemy)
    this.layers.enemy.addChild(enemy)
}