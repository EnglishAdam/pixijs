module.exports = function update(delta) {
    this.tilePosition.x += this.app.speed.x;
    this.tilePosition.y += this.app.speed.y;
}