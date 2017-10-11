module.exports = function ready() {
    document.body.appendChild(this.view);
    this.createBackground();
    this.createPlayer();
    this.createEnemy();
    this.createEnemy();
    this.createEnemy();
    this.createEnemy();
    this.createEnemy();
    this.addEventListeners()
}