// Instantiate Application
const app = new PIXI.Application()
document.body.appendChild(app.view);

// Stage Sprite
var bunny = PIXI.Sprite.fromImage('./bunny.png')
app.stage.addChild(bunny);

/**
 * WHAT IS A TICKER?
 * A ticker is an internal clock used by PIXI
 * It is the 'requested animation frame' of the browser.
 * 
 * To use a ticker, you add functions to it.
 * Every animation frame (<=60fps), all added functions are invoked.
 * When the function is invoked, the delta (Time difference from last frame) is provided as the first parameter
 */
app.ticker.add(function(delta) {
    // delta is 1 if running at 100% performance
    bunny.rotation += 0.1 * delta
    console.log('delta:', delta)
});
