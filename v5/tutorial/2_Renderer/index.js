/**
 * Returns Pixi Application
 * 
 * The application will create a renderer using WebGL, if possible,
 * with a fallback to a canvas render. It will also setup the ticker
 * and the root stage PIXI.Container.
 */
const app = new PIXI.Application({ 
  width: 256,         // default: 800
  height: 256,        // default: 600
  antialias: true,    // default: false
  transparent: false, // default: false
  resolution: 1       // default: 1
});

/**
 * Attached <canvas> to body.
 * 
 * app.view provides the HTMLCanvasElement to attach to
 * The application will create a canvas element for you that you
 * can then insert into the DOM.
*/
document.body.appendChild(app.view);

/**
 * -- USES
 *      PIXI.Application({options})
 *      const app = new PIXI.Application({options})
 * 
 * -- OPTIONS
 *      PIXI.Application({
 *        autoStart,              // boolean              // default - true     // optional - Automatically starts the rendering after the construction. Note: Setting this parameter to false does NOT stop the shared ticker even if you set options.sharedTicker to true in case that it is already started. Stop it by your own.
 *        width,                  // number               // default - 800      // optional - The width of the renderers view.
 *        height,                 // number               // default - 600      // optional - The height of the renderers view.
 *        view,                   // HTMLCanvasElement    // default -          // optional - The canvas to use as a view, optional.
 *        transparent,            // boolean              // default - false    // optional - If the render view is transparent.
 *        autoDensity,            // boolean              // default - false    // optional - Resizes renderer view in CSS pixels to allow for resolutions other than 1.
 *        antialias,              // boolean              // default - false    // optional - Sets antialias
 *        preserveDrawingBuffer,  // boolean              // default - false    // optional - Enables drawing buffer preservation, enable this if you need to call toDataUrl on the WebGL context.
 *        resolution,             // number               // default - 1        // optional - The resolution / device pixel ratio of the renderer, retina would be 2.
 *        forceCanvas,            // boolean              // default - false    // optional - prevents selection of WebGL renderer, even if such is present, this option only is available when using pixi.js-legacy or @pixi/canvas-renderer modules, otherwise it is ignored.
 *        backgroundColor,        // number               // default - 0x000000 // optional - The background color of the rendered area (shown if not transparent).
 *        clearBeforeRender,      // boolean              // default - true     // optional - This sets if the renderer will clear the canvas or not before the new render pass.
 *        forceFXAA,              // boolean              // default - false    // optional - Forces FXAA antialiasing to be used over native. FXAA is faster, but may not always look as great. (WebGL only).
 *        powerPreference,        // string               // default -          // optional - Parameter passed to webgl context, set to "high-performance" for devices with dual graphics card. (WebGL only).
 *        sharedTicker,           // boolean              // default - false    // optional - true to use PIXI.Ticker.shared, false to create new ticker. If set to false, you cannot register a handler to occur before anything that runs on the shared ticker. The system ticker will always run before both the shared ticker and the app ticker.
 *        sharedLoader,           // boolean              // default - false    // optional - true to use PIXI.Loader.shared, false to create new Loader.
 *        resizeTo                // Window | HTMLElement // default -          // optional - Element to automatically resize stage to.
 *      })
 * 
 * 
 * -- PROPERTIES
 *      app.loader    // PIXI.Loader                         // default -                    // - readoly - Loader instance to help with asset loading.
 *      app.render    // PIXI.Renderer | PIXI.CanvasRenderer // default -                    //           - WebGL renderer if available, otherwise CanvasRenderer
 *      app.resizeTo  // Window | HTMLElement                // default -                    //           - The element or window to resize the application to.
 *      app.screen    // PIXI.Rectangle                      // default -                    // - readoly - Reference to the renderer's screen rectangle. Its safe to use as filterArea or hitArea for whole screen
 *      app.stage     // PIXI.Container                      // default -                    //           - The root display container that's rendered.
 *      app.ticker    // PIXI.Ticker                         // default - PIXI.Ticker.shared //           - Ticker for doing render updates.
 *      app.view      // HTMLCanvasElement                   // default -                    // - readoly - Reference to the renderer's canvas element.
 * 
 * -- STATIC METHODS
 *      // Register a middleware plugin for the application
 *      PIXI.Application.registerPlugin({
 *        plugin // PIXI.Application.Plugin // - Plugin to be installed (See type definition)
 *      })
 * 
 * -- METHODS
 *      // Destroy and don't use after this, able to remove the texture of children sprites and base textures
 *      app.destroy({
 *        removeView,   // boolean          // default - false  // optional - Automatically remove canvas from DOM.
 *        stageOptions  // object | boolean // default -        // optional - Options parameter. A boolean will act as if all options have been set to that value
 *                                                              //          - {
 *                                                                              children,   // boolean  // default - false  // optional - if set to true, all the children will have their destroy method called as well. 'stageOptions' will be passed on to those calls.
 *                                                                              texture,    // boolean  // default - false  // optional - Only used for child Sprites if stageOptions.children is set to true. Should it destroy the texture of the child sprite
 *                                                                              baseTexture // boolean  // default - false  // optional - Only used for child Sprites if stageOptions.children is set to true. Should it destroy the base texture of the child sprite
 *                                                                            }
 *      })
 *      app.queueResize ()       // Queues a resizing of application, similar to resize(). Must have resizeTo set. Resize is throttled, so it's safe to call this multiple times per frame and it'll only be called once.
 *      app.render()             // Render the current stage.
 *      app.resize ()            // Execute an immediate resize on the renderer, this is not throttled and can be expensive to call many times in a row. Will resize only if resizeTo property is set.
 *      app.start()              // Convenience method for starting the render.
 *      app.stop()               // Convenience method for stopping the render.
 *
 * -- TYPE DEFINITIONS
 *    PIXI.Application.Plugin:
 *      init    // function   // Called when Application is constructed, scoped to Application instance. Passes in options as the only argument, which are Application constructor options.
 *      destroy // function   // Called when destroying Application, scoped to Application instance
 */
