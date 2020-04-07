/**
 * WHAT IS A TICKER?
 * A ticker is an internal clock used by PIXI
 * It is the 'requested animation frame' of the browser.
 * 
 * To use a ticker, you add functions to it.
 * Every animation frame (<=60fps), all added functions are invoked.
 * When the function is invoked, the delta (Time difference from last frame) is provided as the first parameter
 */
// Instantiate Application
const app = new PIXI.Application()
document.body.appendChild(app.view);

// Stage Sprite
var bunny = PIXI.Sprite.fromImage('./bunny.png')
app.stage.addChild(bunny);

app.ticker.add(function(delta) {
    // delta is 1 if running at 100% performance
    bunny.rotation += 0.1 * delta
    console.log('delta:', delta)
});

/*
The shared ticker instance used by PIXI.AnimatedSprite and by PIXI.VideoResource to update animation frames / video textures.
It may also be used by PIXI.Application if created with the sharedTicker option property set to true.
The property PIXI.Ticker#autoStart is set to true for this instance. Please follow the examples for usage, including how to opt-out of auto-starting the shared ticker.

-- Example creating:
let ticker =  new PIXI.Ticker()
- OR -
let ticker = PIXI.Ticker.shared
ticker.autoStart = false    // Set this to prevent starting this ticker when listeners are added. By default this is true only for the PIXI.Ticker.shared instance.
ticker.stop()               // FYI, call this to ensure the ticker is stopped. It should be stopped if you have not attempted to render anything yet.
ticker.start()              // Call this when you are ready for a running shared ticker.

-- Example using it to render:
let renderer = PIXI.autoDetectRenderer()
let stage = new PIXI.Container()
document.body.appendChild(renderer.view)
ticker.add(function (time) { renderer.render(stage) })

-- Example of manually updating
ticker.autoStart = false;
ticker.stop();
function animate(time) {
    ticker.update(time);
    renderer.render(stage);
    requestAnimationFrame(animate);
}
animate(performance.now());
 */

/*


PIXI.Ticker = {
    // Properties
    PIXI.Ticker.shared,     // The shared ticker instance used by PIXI.AnimatedSprite and by PIXI.VideoResource to update animation frames / video textures.
    PIXI.Ticker.system,     // The system ticker instance used by PIXI.interaction.InteractionManager and by PIXI.BasePrepare for core timing functionality that shouldn't usually need to be paused, unlike the shared ticker which drives visual animations and rendering which may want to be paused. The property PIXI.Ticker#autoStart is set to true for this instance.
    autoStart,              // Whether or not this ticker should invoke the method PIXI.Ticker#start automatically when a listener is added.
    count,                  // The number of listeners on this ticker, calculated by walking through linked list
    deltaMS,                // Scaler time elapsed in milliseconds from last frame to this frame. This value is capped by setting PIXI.Ticker#minFPS and is scaled with PIXI.Ticker#speed. Note: The cap may be exceeded by scaling. If the platform supports DOMHighResTimeStamp, this value will have a precision of 1 µs. Defaults to target frame time.
    deltaTime,              // Scalar time value from last frame to this frame. This value is capped by setting PIXI.Ticker#minFPS and is scaled with PIXI.Ticker#speed. Note: The cap may be exceeded by scaling.
    elapsedMS,              // Time elapsed in milliseconds from last frame to this frame. Opposed to what the scalar PIXI.Ticker#deltaTime is based, this value is neither capped nor scaled. If the platform supports DOMHighResTimeStamp, this value will have a precision of 1 µs. Defaults to target frame time.
    FPS,                    // The frames per second at which this ticker is running. The default is approximately 60 in most modern browsers. Note: This does not factor in the value of PIXI.Ticker#speed, which is specific to scaling PIXI.Ticker#deltaTime.
    lastTime,               // The last time PIXI.Ticker#update was invoked. This value is also reset internally outside of invoking update, but only when a new animation frame is requested. If the platform supports DOMHighResTimeStamp, this value will have a precision of 1 µs.
    maxFPS,                 // Manages the minimum amount of milliseconds required to elapse between invoking PIXI.Ticker#update. This will effect the measured value of PIXI.Ticker#FPS. If it is set to 0, then there is no limit; PixiJS will render as many frames as it can. Otherwise it will be at least minFPS.
    minFPS,                 // Manages the maximum amount of milliseconds allowed to elapse between invoking PIXI.Ticker#update. This value is used to cap PIXI.Ticker#deltaTime, but does not effect the measured value of PIXI.Ticker#FPS. When setting this property it is clamped to a value between 0 and PIXI.settings.TARGET_FPMS * 1000.
    speed,                  // Factor of current PIXI.Ticker#deltaTime.
    started,                // Whether or not this ticker has been started. true if PIXI.Ticker#start has been called. false if PIXI.Ticker#stop has been called. While false, this value may change to true in the event of PIXI.Ticker#autoStart being true and a listener is added.

    // Methods
    add(fn, _context, _priority)        // Register a handler for tick events. Calls continuously unless it is removed or the ticker is stopped.
    addOnce(fn, _context, _priority)    // Add a handler for the tick event which is only execute once.
    destroy()                           // Destroy the ticker and don't use after this. Calling this method removes all references to internal events.
    remove(fn, _context)                // Removes any handlers matching the function and context parameters. If no handlers are left after removing, then it cancels the animation frame.
    start()                             // Starts the ticker. If the ticker has listeners a new animation frame is requested at this point.
    stop()                              // Stops the ticker. If the ticker has requested an animation frame it is canceled at this point.
    update(_currentTime)                // Triggers an update. An update entails setting the current PIXI.Ticker#elapsedMS, the current PIXI.Ticker#deltaTime, invoking all listeners with current deltaTime, and then finally setting PIXI.Ticker#lastTime with the value of currentTime that was provided. This method will be called automatically by animation frame callbacks if the ticker instance has been started and listeners are added.
}
*/