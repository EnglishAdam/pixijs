module.exports = function fire() {
    // Get Positions
    const playerPosition = this.position;
    const mousePosition = this.app.getMousePos();

    // Create Bullet
    this.app.createBullet(playerPosition, mousePosition)
}