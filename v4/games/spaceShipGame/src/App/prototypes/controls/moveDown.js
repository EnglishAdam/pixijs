module.exports = function moveDown(delta) {
    this.speed.y -= this.movementSpeed * delta;
}