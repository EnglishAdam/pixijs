const Background = require('./background/Background')
const Player = require('./player/Player')
const Bullet = require('./bullet/Bullet')

/**
 * Application call for simulation
 * @class App
 */
function App() {
    this.options = {
        width: 800,
        height: 600,
        backgroundColor: 0x1099bb
    }
    this.app = new PIXI.Application(this.options);
    this.obj = {
        background: new Background(this.app, './src/assets/background.png'),
        player: new Player(this.app, './src/assets/player.png'),
        bullets: []
    }
    this.speed = {
        x: 0,
        y: 0
    }
    this.speedMax = 10
    this.movementSpeed = 0.2
    this.movementDecay = 0.1

    this.ctrl = {
        a: false,
        d: false,
        w: false,
        s: false,
        lmb: false
    }

    this.fireRate = 5
    this.fireRateCounter = 0

    this.app.ticker.add((delta) => this.update(delta));
}

App.prototype.ready = function ready() {
    document.body.appendChild(this.app.view);
    this.addEventListeners()

    this.app.stage.addChild(
        this.obj.background,
        this.obj.player,
    );


}

App.prototype.addEventListeners = function checkKeys() {
    document.addEventListener('keydown', (event) => {
        this.ctrl[event.key] = true;
    }, false);

    document.addEventListener('keyup', (event) => {
        this.ctrl[event.key] = false;
    }, false);

    document.addEventListener('mousedown', (event) => {
        this.ctrl.lmb = true;
    }, false);

    document.addEventListener('mouseup', (event) => {
        this.ctrl.lmb = false;
    }, false);
}

App.prototype.fire = function fire(delta) {
    let p1 = this.obj.player.position
    let p2 = this.app.renderer.plugins.interaction.mouse.global
    let angleRadians = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    angleRadians -= 0.5 * Math.PI
    angleRadians *= -1
    console.log('angleRadians', angleRadians)
    let index = this.obj.bullets.length
    let bullet = new Bullet(this, './src/assets/bullet.png', index, angleRadians)
    this.obj.bullets.push(bullet)
    this.app.stage.addChild(bullet)
}

App.prototype.update = function update(delta) {
    // this.checkKeys();
    // console.log(this.speed)

    if (this.ctrl.w && this.speed.y < this.speedMax) this.speed.y += this.movementSpeed * delta;
    if (this.ctrl.s && this.speed.y > -this.speedMax) this.speed.y -= this.movementSpeed * delta;
    if (this.ctrl.a && this.speed.x < this.speedMax) this.speed.x += this.movementSpeed * delta;
    if (this.ctrl.d && this.speed.x > -this.speedMax) this.speed.x -= this.movementSpeed * delta;
    if (this.ctrl.lmb) {
        if (this.fireRateCounter === this.fireRate) {
            this.fire(delta);
            this.fireRateCounter = 0;
        } else {
            this.fireRateCounter += 1;
        }
        
    };

    if (this.speed.x > this.speedMax) this.speed.x = this.speedMax;
    else if (this.speed.x < -this.speedMax) this.speed.x = -this.speedMax;
    if (this.speed.y > this.speedMax) this.speed.y = this.speedMax;
    else if (this.speed.y < -this.speedMax) this.speed.y = -this.speedMax;

    if (this.speed.x > 0) this.speed.x -= this.movementDecay;
    else if (this.speed.x < 0) this.speed.x += this.movementDecay;
    if (this.speed.y > 0) this.speed.y -= this.movementDecay;
    else if (this.speed.y < 0) this.speed.y += this.movementDecay;

    this.speed.x = Math.round(this.speed.x * 100) / 100;
    this.speed.y = Math.round(this.speed.y * 100) / 100;

    this.obj.background.update();
    this.obj.player.update();
    this.obj.bullets.forEach((bullet) => {
        if (bullet && bullet.update) bullet.update();
    });

    this.obj.background.tilePosition.x += this.speed.x;
    this.obj.background.tilePosition.y += this.speed.y;
}

module.exports = App