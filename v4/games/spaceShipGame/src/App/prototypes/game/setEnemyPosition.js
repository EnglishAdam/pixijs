module.exports = function setEnemyPosition(delta) {
    this.obj.enemies.forEach((enemy) => {
        enemy.position.x = (this.trueMapPosition.x + enemy.randomPosition.x) % this.mapSize.x;
        enemy.position.y = (this.trueMapPosition.y + enemy.randomPosition.y) % this.mapSize.y;
    })
}