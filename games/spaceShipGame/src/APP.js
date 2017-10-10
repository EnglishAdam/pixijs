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