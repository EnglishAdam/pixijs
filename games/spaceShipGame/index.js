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

/**
 * Application call for simulation
 * @class App
 */
function App() {
    this.options = {
        width:800,
        height: 600,
        backgroundColor: 0x1099bb
    }
    this.app = new PIXI.Application(this.options);
    this.obj = {
        background: new Background(this.app, './src/assets/background.png')

    }
}

App.prototype.ready = function ready() {
    document.body.appendChild(this.app.view);
    this.obj.background.update();
    this.app.stage.addChild(this.obj.background)
    
}

module.exports = App
},{"./background/Background":3}],3:[function(require,module,exports){
/**
 * Background
 * @class Background
 */
function Background(app, texture) {
    PIXI.Sprite.call(this, PIXI.Texture.fromImage(texture));
    this.width = app.renderer.width;
    this.height = app.renderer.height;
    this.anchor.x = 0;
    this.anchor.y = 0;
}

Background.prototype = Object.create(PIXI.Sprite.prototype);

Background.prototype.update = function update() {
    console.log('BackgroundUpdate')
}

// Background.prototype.destroy = PIXI.Sprite.prototype.destroy.bind(this)

module.exports = Background
},{}]},{},[1]);
