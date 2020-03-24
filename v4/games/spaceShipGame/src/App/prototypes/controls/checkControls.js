module.exports = function checkControls(delta) {
    // Check Keys
    if (this.ctrl.w && this.speed.y < this.speedMax) this.moveUp(delta);
    if (this.ctrl.s && this.speed.y > -this.speedMax) this.moveDown(delta);
    if (this.ctrl.a && this.speed.x < this.speedMax) this.moveLeft(delta);
    if (this.ctrl.d && this.speed.x > -this.speedMax) this.moveRight(delta);

    // Check Mouse
    if (this.ctrl.lmb) {
        if (this.fireRateCounter === this.fireRate) {
            // this.obj.player.fire(delta);
            this.lmbDown(delta);
            this.fireRateCounter = 0;
        } else {
            this.fireRateCounter += 1;
        }
    };
}