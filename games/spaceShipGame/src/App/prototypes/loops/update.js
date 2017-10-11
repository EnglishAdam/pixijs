module.exports = function update(delta) {
    // Checks & Sets
    this.checkControls(delta);
    this.setMaxSpeed(delta);
    this.setMovementDecay(delta);
    this.roundSpeedValue(delta);
    this.setMapPosition(delta);
    this.setEnemyPosition(delta);

    // Updated Instances
    if (this.obj.background.update) this.obj.background.update();
    if (this.obj.player.update) this.obj.player.update();
    this.obj.bullets.forEach((bullet) => {
        if (bullet && bullet.update) bullet.update(delta);
    });
    this.obj.enemies.forEach((enemy) => {
        if (enemy && enemy.update) enemy.update(delta);
    });
}