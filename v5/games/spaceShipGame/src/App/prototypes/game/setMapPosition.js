module.exports = function setMapPosition(delta) {
    this.mapPosition.x += this.speed.x;
    this.mapPosition.y += this.speed.y;
    if (this.mapPosition.x > this.mapSize.x) this.mapPosition.x = -this.mapSize.x + (this.mapPosition.x - this.mapSize.x)
    if (this.mapPosition.x < -this.mapSize.x) this.mapPosition.x = this.mapSize.x + (this.mapPosition.x + this.mapSize.x)
    if (this.mapPosition.y > this.mapSize.y) this.mapPosition.y = -this.mapSize.y + (this.mapPosition.y - this.mapSize.y)
    if (this.mapPosition.y < -this.mapSize.y) this.mapPosition.y = this.mapSize.y + (this.mapPosition.y + this.mapSize.y)
    this.trueMapPosition.x = this.mapSize.x + this.mapPosition.x
    this.trueMapPosition.y = this.mapSize.y + this.mapPosition.y
}