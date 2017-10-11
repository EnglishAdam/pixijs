module.exports = function update(delta) {
    this.position.x += this.speed.x
    this.position.y += this.speed.y
    this.life -= 0.01
    if (this.life < 0) this.destroy()
}