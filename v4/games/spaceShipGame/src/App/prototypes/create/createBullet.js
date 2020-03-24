module.exports = function createBullet(playerPosition, moustPosition) {
    // Get Deltas
    const deltaY = moustPosition.y - playerPosition.y;
    const deltaX = moustPosition.x - playerPosition.x;

    // Calculate Angle to Mouse Cursor
    let angleRadians = Math.atan2(deltaY, deltaX);
    angleRadians -= 0.5 * Math.PI
    angleRadians *= -1

    // Create Bullet
    const index = this.obj.bullets.length
    const bullet = new this.classes.Bullet(this, index, angleRadians)
    this.obj.bullets.push(bullet)
    this.layers.bullet.addChild(bullet)
}