module.exports = function roundSpeedValue(delta) {
    this.speed.x = Math.round(this.speed.x * 100) / 100;
    this.speed.y = Math.round(this.speed.y * 100) / 100;
}