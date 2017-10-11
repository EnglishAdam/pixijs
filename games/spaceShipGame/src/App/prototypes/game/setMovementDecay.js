module.exports = function setMovementDecay(delta) {
    if (this.speed.x > 0) this.speed.x -= this.movementDecay;
    else if (this.speed.x < 0) this.speed.x += this.movementDecay;
    if (this.speed.y > 0) this.speed.y -= this.movementDecay;
    else if (this.speed.y < 0) this.speed.y += this.movementDecay;
}