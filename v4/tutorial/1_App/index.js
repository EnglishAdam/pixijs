/**
 * Returns Pixi Application
 * 
 * The application will create a renderer using WebGL, if possible,
 * with a fallback to a canvas render. It will also setup the ticker
 * and the root stage PIXI.Container.
 */
const app = new PIXI.Application();

/**
 * Attached <canvas> to body.
 * app.view provides the HTMLCanvasElement
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
 *           autoStart,              // boolean              // default - true       // optional - automatically starts the rendering after the construction. Note that setting this parameter to false does NOT stop the shared ticker even if you set options.sharedTicker to true in case that it is already started. Stop it by your own.
 *           width,                  // number               // default - 800        // optional - the width of the renderers view
 *           height,                 // number               // default - 600        // optional - the height of the renderers view
 *           view,                   // HTMLCanvasElement    // default -            // optional - the canvas to use as a view, optional
 *           transparent,            // boolean              // default - false      // optional - If the render view is transparent, default false
 *           antialia,               // boolean              // default - false      // optional - sets antialias (only applicable in chrome at the moment
 *           preserveDrawingBuffer,  // boolean              // default - false      // optional - enables drawing buffer preservation, enable this if you need to call toDataUrl on the webgl context
 *           resolution,             // number               // default - 1          // optional - The resolution / device pixel ratio of the renderer, retina would be 2
 *           forceCanvas,            // boolean              // default - false      // optional - prevents selection of WebGL renderer, even if such is present
 *           backgroundColor,        // number               // default - 0x000000   // optional - The background color of the rendered area (shown if not transparent).
 *           clearBeforeRender,      // boolean              // default - true       // optional - This sets if the renderer will clear the canvas or not before the new render pass.
 *           roundPixels,            // boolean              // default - false      // optional - If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
 *           forceFXAA,              // boolean              // default - false      // optional - forces FXAA antialiasing to be used over native. FXAA is faster, but may not always look as great webgl only
 *           legacy,                 // boolean              // default - false      // optional - true to ensure compatibility with older / less advanced devices. If you experience unexplained flickering try setting this to true. webgl only
 *           powerPreference,        // string               // default -            // optional - Parameter passed to webgl context, set to "high-performance" for devices with dual graphics card webgl only
 *           sharedTicker,           // boolean              // default - false      // optional - true to use PIXI.ticker.shared, false to create new ticker.
 *           sharedLoader            // boolean              // default - false      // optional - true to use PIXI.loaders.shared, false to create new Loader.
 *      })
 * 
 * 
 * -- PROPERTIES
 *      app._options // Default Options
 *      app.loader   // (PIXI.loaders.Loader) - Loader instance to help with asset loading.
 *      app.render   // (PIXI.WebGLRenderer | PIXI.CanvasRenderer) - WebGL renderer if available, otherwise CanvasRenderer
 *      app.screen   // (PIXI.Rectangle) - Reference to the renderer's screen rectangle. Its safe to use as filterArea or hitArea for whole screen
 *      app.stage    // (PIXI.Container) - The root display container that's rendered.
 *      app.ticker   // (PIXI.ticker.Ticker) - Ticker for doing render updates.
 *      app.view     // (HTMLCanvasElement) - Reference to the renderer's canvas element.
 * 
 * -- METHODS
 *      app.destroy(removeView)  // Destroy and don't use after this.
 *           - removeView  // boolean  // default - false  // optional - Automatically remove canvas from DOM.
 *      app.render()             // Render the current stage.
 *      app.start()              // Convenience method for starting the render.
 *      app.stop()               // Convenience method for stopping the render.
 */
