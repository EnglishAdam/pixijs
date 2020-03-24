module.exports = function setMaxSpeed(delta) {
    if (this.speed.x > this.speedMax) this.speed.x = this.speedMax;
    else if (this.speed.x < -this.speedMax) this.speed.x = -this.speedMax;
    if (this.speed.y > this.speedMax) this.speed.y = this.speedMax;
    else if (this.speed.y < -this.speedMax) this.speed.y = -this.speedMax;
}