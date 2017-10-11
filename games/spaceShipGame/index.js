(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const App = require('./src/App/App.js');

// When DOM ready
function loaded() {
    console.log('loaded')
    // Start App
    var app = new App();
    // app.ready();
}

document.addEventListener('DOMContentLoaded', loaded, false);
},{"./src/App/App.js":2}],2:[function(require,module,exports){
// Class App
function App() {
    // Extend Application Class
    PIXI.Application.call(this, {
        width: 800,
        height: 600,
        backgroundColor: 0x1099bb
    });

    // Load Textures
    PIXI.loader.add('background', './src/assets/background.png')
    PIXI.loader.add('bullet', './src/assets/bullet.png')
    PIXI.loader.add('enemy', './src/assets/enemy.png')
    PIXI.loader.add('enemyHit', './src/assets/enemyHit.png')
    PIXI.loader.add('player', './src/assets/player.png')
    PIXI.loader.load((loader, resources) => {
        this.resources = resources;
        this.ready();
    })

    // Reference Classes
    this.classes = {
        Background: require('../background/Background'),
        Bullet: require('../bullet/Bullet'),
        Enemy: require('../enemy/Enemy'),
        Player: require('../player/Player')

    }

    // Object Instances
    this.obj = {
        background: {},
        player: {},
        enemies: [],
        bullets: []
    }

    // Game Variables
    this.speed = { x: 0, y: 0 }
    this.speedMax = 10
    this.movementSpeed = 0.2
    this.movementDecay = 0.1
    this.trueMapPosition = { x: 0, y: 0, }
    this.mapPosition = { x: 0, y: 0, }
    this.mapSize = { x: 1000, y: 1000 }
    this.ctrl = {
        a: false,
        d: false,
        w: false,
        s: false,
        lmb: false
    }
    this.fireRate = 5
    this.fireRateCounter = 0

    // Set Update Function
    this.ticker.add((delta) => this.update(delta));
}

// Extend Application Class
App.prototype = Object.create(PIXI.Application.prototype);

// Setup
App.prototype.ready = require('./prototypes/setup/ready');

// Loop
App.prototype.update = require('./prototypes/loops/update');

// Events
App.prototype.addEventListeners = require('./prototypes/events/addEventListeners');

// Controls
App.prototype.checkControls = require('./prototypes/controls/checkControls');
App.prototype.lmbDown = require('./prototypes/controls/lmbDown');
App.prototype.moveDown = require('./prototypes/controls/moveDown');
App.prototype.moveLeft = require('./prototypes/controls/moveLeft');
App.prototype.moveRight = require('./prototypes/controls/moveRight');
App.prototype.moveUp = require('./prototypes/controls/moveUp');

// Create
App.prototype.createBackground = require('./prototypes/create/createBackground');
App.prototype.createBullet = require('./prototypes/create/createBullet');
App.prototype.createEnemy = require('./prototypes/create/createEnemy');
App.prototype.createPlayer = require('./prototypes/create/createPlayer');

// Game
App.prototype.roundSpeedValue = require('./prototypes/game/roundSpeedValue');
App.prototype.setEnemyPosition = require('./prototypes/game/setEnemyPosition');
App.prototype.setMapPosition = require('./prototypes/game/setMapPosition');
App.prototype.setMaxSpeed = require('./prototypes/game/setMaxSpeed');
App.prototype.setMovementDecay = require('./prototypes/game/setMovementDecay');

// Util
App.prototype.getMousePos = require('./prototypes/utils/getMousePos');

// Export
module.exports = App
},{"../background/Background":22,"../bullet/Bullet":24,"../enemy/Enemy":27,"../player/Player":32,"./prototypes/controls/checkControls":3,"./prototypes/controls/lmbDown":4,"./prototypes/controls/moveDown":5,"./prototypes/controls/moveLeft":6,"./prototypes/controls/moveRight":7,"./prototypes/controls/moveUp":8,"./prototypes/create/createBackground":9,"./prototypes/create/createBullet":10,"./prototypes/create/createEnemy":11,"./prototypes/create/createPlayer":12,"./prototypes/events/addEventListeners":13,"./prototypes/game/roundSpeedValue":14,"./prototypes/game/setEnemyPosition":15,"./prototypes/game/setMapPosition":16,"./prototypes/game/setMaxSpeed":17,"./prototypes/game/setMovementDecay":18,"./prototypes/loops/update":19,"./prototypes/setup/ready":20,"./prototypes/utils/getMousePos":21}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
module.exports = function lmbDown(delta) {
    this.obj.player.fire(delta);
}
},{}],5:[function(require,module,exports){
module.exports = function moveDown(delta) {
    this.speed.y -= this.movementSpeed * delta;
}
},{}],6:[function(require,module,exports){
module.exports = function moveLeft(delta) {
    this.speed.x += this.movementSpeed * delta;
}
},{}],7:[function(require,module,exports){
module.exports = function moveRight(delta) {
    this.speed.x -= this.movementSpeed * delta;
}
},{}],8:[function(require,module,exports){
module.exports = function moveUp(delta) {
    this.speed.y += this.movementSpeed * delta;
}
},{}],9:[function(require,module,exports){
module.exports = function createBackground() {
    // Create Background
    const background = new this.classes.Background(this)
    this.obj.background = background
    this.stage.addChild(background)
}
},{}],10:[function(require,module,exports){
module.exports = function createBullet(playerPosition, moustPosition) {
    // Get Deltas
    const deltaY = moustPosition.y - playerPosition.y;
    const deltaX = moustPosition.x - playerPosition.x;

    // Calculate Angle to Mouse Cursor
    let angleRadians = Math.atan2(deltaY, deltaX);
    angleRadians -= 0.5 * Math.PI
    angleRadians *= -1

    // Create Bullet
    const index = this.obj.bullets.length
    const bullet = new this.classes.Bullet(this, index, angleRadians)
    this.obj.bullets.push(bullet)
    this.stage.addChild(bullet)
}
},{}],11:[function(require,module,exports){
module.exports = function createEnemy() {
    // Create Enemy
    const enemy = new this.classes.Enemy(this)
    this.obj.enemies.push(enemy)
    this.stage.addChild(enemy)
}
},{}],12:[function(require,module,exports){
module.exports = function createPlayer() {
    // Create Player
    const player = new this.classes.Player(this)
    this.obj.player = player
    this.stage.addChild(player)
}
},{}],13:[function(require,module,exports){
module.exports = function addEventListeners() {
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
},{}],14:[function(require,module,exports){
module.exports = function roundSpeedValue(delta) {
    this.speed.x = Math.round(this.speed.x * 100) / 100;
    this.speed.y = Math.round(this.speed.y * 100) / 100;
}
},{}],15:[function(require,module,exports){
module.exports = function setEnemyPosition(delta) {
    this.obj.enemies.forEach((enemy) => {
        enemy.position.x = (this.trueMapPosition.x + enemy.randomPosition.x) % this.mapSize.x;
        enemy.position.y = (this.trueMapPosition.y + enemy.randomPosition.y) % this.mapSize.y;
    })
}
},{}],16:[function(require,module,exports){
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
},{}],17:[function(require,module,exports){
module.exports = function setMaxSpeed(delta) {
    if (this.speed.x > this.speedMax) this.speed.x = this.speedMax;
    else if (this.speed.x < -this.speedMax) this.speed.x = -this.speedMax;
    if (this.speed.y > this.speedMax) this.speed.y = this.speedMax;
    else if (this.speed.y < -this.speedMax) this.speed.y = -this.speedMax;
}
},{}],18:[function(require,module,exports){
module.exports = function setMovementDecay(delta) {
    if (this.speed.x > 0) this.speed.x -= this.movementDecay;
    else if (this.speed.x < 0) this.speed.x += this.movementDecay;
    if (this.speed.y > 0) this.speed.y -= this.movementDecay;
    else if (this.speed.y < 0) this.speed.y += this.movementDecay;
}
},{}],19:[function(require,module,exports){
module.exports = function update(delta) {
    // Checks & Sets
    this.checkControls(delta);
    this.setMaxSpeed(delta);
    this.setMovementDecay(delta);
    this.roundSpeedValue(delta);
    this.setMapPosition(delta);
    this.setEnemyPosition(delta);

    // Updated Instances
    if (this.obj.background.update) this.obj.background.update();
    if (this.obj.player.update) this.obj.player.update();
    this.obj.bullets.forEach((bullet) => {
        if (bullet && bullet.update) bullet.update(delta);
    });
    this.obj.enemies.forEach((enemy) => {
        if (enemy && enemy.update) enemy.update(delta);
    });
}
},{}],20:[function(require,module,exports){
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
},{}],21:[function(require,module,exports){
module.exports = function getMousePos() {
    return this.renderer.plugins.interaction.mouse.global;
}
},{}],22:[function(require,module,exports){
// Class Background
function Background(app) {
    // Extend TileingSprite Class
    PIXI.extras.TilingSprite.call(this, app.resources.background.texture, app.renderer.width, app.renderer.height);
    
    // Reference Application
    this.app = app;
}

// Extend TileingSprite Class
Background.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

// Loops
Background.prototype.update = require('./prototypes/loops/update')

// Export
module.exports = Background
},{"./prototypes/loops/update":23}],23:[function(require,module,exports){
module.exports = function update(delta) {
    this.tilePosition.x += this.app.speed.x;
    this.tilePosition.y += this.app.speed.y;
}
},{}],24:[function(require,module,exports){
// Class Bullet
function Bullet(app, index, angle=0) {
    // Extend Sprite Class
    PIXI.Sprite.call(this, app.resources.bullet.texture);

    // Reference Application
    this.app = app;

    // Game Variables
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

// Extend Sprite Class
Bullet.prototype = Object.create(PIXI.Sprite.prototype);

// Loops
Bullet.prototype.update = require('./prototypes/loops/update')

// Life Cycle
Bullet.prototype.destroy = require('./prototypes/life/destroy')

// Export
module.exports = Bullet
},{"./prototypes/life/destroy":25,"./prototypes/loops/update":26}],25:[function(require,module,exports){
module.exports = function destroy() {
    this.app.obj.bullets[this.index] = null;
    PIXI.Sprite.prototype.destroy.call(this);
};
},{}],26:[function(require,module,exports){
module.exports = function update(delta) {
    this.position.x += this.speed.x
    this.position.y += this.speed.y
    this.life -= 0.01
    if (this.life < 0) this.destroy()
}
},{}],27:[function(require,module,exports){
// Class Enemy
function Enemy(app) {
    // Extend Sprite Class
    PIXI.Sprite.call(this, app.resources.enemy.texture);
    
    // Reference Application
    this.app = app;

    // Game Variables
    this.position.x = app.renderer.width / 2;
    this.position.y = app.renderer.height / 2;
    this.randomPosition = {
        x: Math.round(Math.random() * 2000),
        y: Math.round(Math.random() * 2000)
    }
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
}

// Extend Sprite Class
Enemy.prototype = Object.create(PIXI.Sprite.prototype);

// Loops
Enemy.prototype.update = require('./prototypes/loops/update')

// Events
Enemy.prototype.onDamage = require('./prototypes/events/onDamage')

// Utils
Enemy.prototype.reposition = require('./prototypes/utils/reposition')

// Life Cycle
Enemy.prototype.destroy = require('./prototypes/life/destroy')

// Export
module.exports = Enemy
},{"./prototypes/events/onDamage":28,"./prototypes/life/destroy":29,"./prototypes/loops/update":30,"./prototypes/utils/reposition":31}],28:[function(require,module,exports){
module.exports = function onDamage() {
    this.texture = app.resources.enemy.texture
    setTimeout(() => {
        this.texture = app.resources.enemyHit.texture
    }, 1000);
}
},{}],29:[function(require,module,exports){
module.exports = function destroy() {
    PIXI.Sprite.prototype.destroy.bind(this);
    }
},{}],30:[function(require,module,exports){
module.exports = function update() {
}
},{}],31:[function(require,module,exports){
module.exports = function reposition() {
    this.position.x = this.app.renderer.width / 2;
    this.position.y = this.app.renderer.height / 2;
}
},{}],32:[function(require,module,exports){
// Class Player
function Player(app) {
    // Extend Spite Class
    PIXI.Sprite.call(this, app.resources.player.texture);

    // Reference Application
    this.app = app;

    // Game Variables
    this.position.x = app.renderer.width/2;
    this.position.y = app.renderer.height/2;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
}

// Extend Spite Class
Player.prototype = Object.create(PIXI.Sprite.prototype);

// Loops
Player.prototype.update = require('./prototype/loops/update');

// Events
Player.prototype.fire = require('./prototype/events/fire');

// Export
module.exports = Player
},{"./prototype/events/fire":33,"./prototype/loops/update":34}],33:[function(require,module,exports){
module.exports = function fire() {
    // Get Positions
    const playerPosition = this.position;
    const mousePosition = this.app.getMousePos();

    // Create Bullet
    this.app.createBullet(playerPosition, mousePosition)
}
},{}],34:[function(require,module,exports){
module.exports = function update(delta) {
    //
}
},{}]},{},[1]);
