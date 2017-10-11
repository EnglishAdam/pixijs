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