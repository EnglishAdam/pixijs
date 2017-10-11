(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const App = require('./src/APP.js');

// When DOM ready
function ready() {
    // Start App
    var app = new App();
    app.ready();
}

document.addEventListener('DOMContentLoaded', ready, false);
},{"./src/APP.js":2}],2:[function(require,module,exports){
const Background = require('./background/Background')
const Player = require('./player/Player')
const Enemy = require('./enemy/Enemy')
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
        enemies: [
            new Enemy(this.app, './src/assets/enemy.png'),
            new Enemy(this.app, './src/assets/enemy.png'),
            new Enemy(this.app, './src/assets/enemy.png'),
            new Enemy(this.app, './src/assets/enemy.png'),
            new Enemy(this.app, './src/assets/enemy.png')
        ],
        bullets: []
    }
    this.speed = {
        x: 0,
        y: 0
    }
    this.speedMax = 10
    this.movementSpeed = 0.2
    this.movementDecay = 0.1

    this.mapSize = {
        x: 1000,
        y: 1000
    }

    this.mapPosition = {
        x: 0,
        y: 0,
    }

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
        this.obj.enemies[0],
        this.obj.enemies[1],
        this.obj.enemies[2],
        this.obj.enemies[3],
        this.obj.enemies[4],
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
    // console.log('angleRadians', angleRadians)
    let index = this.obj.bullets.length
    let bullet = new Bullet(this, './src/assets/bullet.png', index, angleRadians)
    this.obj.bullets.push(bullet)
    this.app.stage.addChild(bullet)
}

App.prototype.update = function update(delta) {
    // this.checkKeys();
    console.log('this.speed')

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

    this.obj.background.update(this);
    this.obj.player.update();
    this.obj.bullets.forEach((bullet) => {
        if (bullet && bullet.update) bullet.update();
    });

    // Move Tile
    // this.obj.background.tilePosition.x += this.speed.x;
    // this.obj.background.tilePosition.y += this.speed.y;
    
    // Map Position
    this.mapPosition.x += this.speed.x;
    this.mapPosition.y += this.speed.y;

    if (this.mapPosition.x > this.mapSize.x) this.mapPosition.x = -this.mapSize.x + (this.mapPosition.x - this.mapSize.x)
    if (this.mapPosition.x < -this.mapSize.x) this.mapPosition.x = this.mapSize.x + (this.mapPosition.x + this.mapSize.x)
    if (this.mapPosition.y > this.mapSize.y) this.mapPosition.y = -this.mapSize.y + (this.mapPosition.y - this.mapSize.y)
    if (this.mapPosition.y < -this.mapSize.y) this.mapPosition.y = this.mapSize.y + (this.mapPosition.y + this.mapSize.y)
    console.log('a', this.mapPosition.x, this.mapPosition.y)
}

module.exports = App
},{"./background/Background":3,"./bullet/Bullet":4,"./enemy/Enemy":5,"./player/Player":6}],3:[function(require,module,exports){
/**
 * Background
 * @class Background
 */
function Background(app, texture) {
    PIXI.extras.TilingSprite.call(this, PIXI.Texture.fromImage(texture), app.renderer.width, app.renderer.height);
}

Background.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

Background.prototype.update = function update(app) {
    this.tilePosition.x += app.speed.x;
    this.tilePosition.y += app.speed.y;
}

// Background.prototype.destroy = PIXI.Sprite.prototype.destroy.bind(this)

module.exports = Background
},{}],4:[function(require,module,exports){
function Bullet(app, texture, index, angle=0) {
    this.app = app;
    PIXI.Sprite.call(this, PIXI.Texture.fromImage(texture));
    this.position.x = app.obj.player.position.x;
    this.position.y = app.obj.player.position.y;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.angle = angle;
    this.maxSpeed = 20;
    this.speed = {
        x: Math.sin(this.angle) * this.maxSpeed,
        y: Math.cos(this.angle) * this.maxSpeed
    }
    this.index = index;
    this.life = 1
}

Bullet.prototype = Object.create(PIXI.Sprite.prototype);

Bullet.prototype.update = function update() {
    this.position.x += this.speed.x
    this.position.y += this.speed.y
    // this.position.x += this.app.speed.x
    // this.position.y += this.app.speed.y
    this.life -= 0.01
    if (this.life < 0) this.destroy()
}

Bullet.prototype.destroy = function()
{
    this.app.obj.bullets[this.index] = null;
    PIXI.Sprite.prototype.destroy.call(this);
};

module.exports = Bullet
},{}],5:[function(require,module,exports){
function Enemy(app, texture) {
    console.log(texture)
    PIXI.Sprite.call(this, PIXI.Texture.fromImage(texture));
    this.position.x = app.renderer.width/2;
    this.position.y = app.renderer.height/2;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
}

Enemy.prototype = Object.create(PIXI.Sprite.prototype);

Enemy.prototype.update = function update() {
    // console.log(Enemy.prototype.destroy)
}

// Enemy.prototype.destroy = PIXI.Sprite.prototype.destroy.bind(this)

module.exports = Enemy
},{}],6:[function(require,module,exports){
function Player(app, texture) {
    console.log(texture)
    PIXI.Sprite.call(this, PIXI.Texture.fromImage(texture));
    this.position.x = app.renderer.width/2;
    this.position.y = app.renderer.height/2;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
}

Player.prototype = Object.create(PIXI.Sprite.prototype);

Player.prototype.update = function update() {
    // console.log(Player.prototype.destroy)
}

// Player.prototype.destroy = PIXI.Sprite.prototype.destroy.bind(this)

module.exports = Player
},{}]},{},[1]);
