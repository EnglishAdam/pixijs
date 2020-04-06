// Create application
const app = new PIXI.Application({ 
  width: 256,         // default: 800
  height: 256,        // default: 600
  antialias: true,    // default: false
  transparent: false, // default: false
  resolution: 1       // default: 1
});

// Attach to DOM
document.body.appendChild(app.view);

// Updated renderer - e.g. Set background and size
app.renderer.backgroundColor = 0x061639;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoDensity = true;
app.renderer.on('postrender', () => console.log('postrender'))
app.renderer.resize(window.innerWidth, window.innerHeight);


/**
 * -- USES
 *      const app = new PIXI.Application({options})
 *      const renderer = app.renderer
 * 
 * -- DESCRIPTION
 *      The Renderer draws the scene and all its content onto a WebGL enabled canvas.
 *      This renderer should be used for browsers that support WebGL.
 *      This renderer works by automatically managing WebGLBatchesm, so no need for Sprite Batches or Sprite Clouds.
 *      Don't forget to add the view to your DOM or you will not see anything!
 * 
 * -- EXTENSIONS
 *      PIXI.Renderer
 *        <= PIXI.AbstractRenderer
 *          <= PIXI.utils.EventEmitter
 * 
 * -- OPTIONS
 *      PIXI.Renderer({
 *        width,                  // number               // default - 800      // optional - The width of the renderers view.
 *        height,                 // number               // default - 600      // optional - The height of the renderers view.
 *        view,                   // HTMLCanvasElement    // default -          // optional - The canvas to use as a view, optional.
 *        transparent,            // boolean              // default - false    // optional - If the render view is transparent.
 *        autoDensity,            // boolean              // default - false    // optional - Resizes renderer view in CSS pixels to allow for resolutions other than 1.
 *        antialias,              // boolean              // default - false    // optional - Sets antialias. If not available natively then FXAA antialiasing is used.
 *        resolution,             // number               // default - 1        // optional - The resolution / device pixel ratio of the renderer, retina would be 2.
 *        clearBeforeRender,      // boolean              // default - true     // optional - This sets if the renderer will clear the canvas or not before the new render pass. If you wish to set this to false, you must set preserveDrawingBuffer to true.
 *        preserveDrawingBuffer,  // boolean              // default - false    // optional - Enables drawing buffer preservation, enable this if you need to call toDataUrl on the WebGL context.
 *        backgroundColor,        // number               // default - 0x000000 // optional - The background color of the rendered area (shown if not transparent).
 *        powerPreference,        // string               // default -          // optional - Parameter passed to webgl context, set to "high-performance" for devices with dual graphics card. (WebGL only).
 *        context                 // object               // default -          // optional - If WebGL context already exists, all parameters must be taken from it.
 *      })
 * 
 * 
 * -- PROPERTIES
 *      renderer.batch                      // Batch system instance
 *      renderer.context                    // Context system instance
 *      renderer.extract                    // Collection of methods for extracting data (image, pixels, etc.) from a display object or render texture
 *      renderer.filter                     // Filter system instance
 *      renderer.framebuffer                // Framebuffer system instance
 *      renderer.geometry                   // Geometry system instance
 *      renderer.gl                         // WebGL context, set by the contextSystem (this.context)
 *      renderer.globalUniforms             // Global uniforms
 *      renderer.mask                       // Mask system instance
 *      renderer.projection                 // Projection system instance
 *      renderer.renderingToScreen          // Flag if we are rendering to the screen vs renderTexture
 *      renderer.renderTexture              // RenderTexture system instance
 *      renderer.scissor                    // Scissor system instance
 *      renderer.shader                     // Shader system instance
 *      renderer.state                      // State system instance
 *      renderer.stencil                    // Stencil system instance
 *      renderer.texture                    // Texture system instance
 *      renderer.textureGC                  // Texture garbage collector system instance
 * 
 * -- PROPERTIES INHERITED
 *      renderer._backgroundColor           // The background color as a number.
 *      renderer._backgroundColorRgba       // The background color as an [R, G, B] array.
 *      renderer._backgroundColorString     // The background color as a string.
 *      renderer._lastObjectRendered        // The last root object that the renderer tried to render.
 *      renderer._tempDisplayObjectParent   // This temporary display object used as the parent of the currently being rendered item.
 *      renderer.autoDensity                // Whether CSS dimensions of canvas view should be resized to screen dimensions automatically.
 *      renderer.backgroundColor            // The background color to fill if not transparent
 *      renderer.clearBeforeRender          // This sets if the CanvasRenderer will clear the canvas or not before the new render pass. If the scene is NOT transparent PixiJS will use a canvas sized fillRect operation every frame to set the canvas background color. If the scene is transparent PixiJS will use clearRect to clear the canvas every frame. Disable this by setting this to false. For example, if your game has a canvas filling background image you often don't need this set.
 *      renderer.height                     // Same as view.height, actual number of pixels in the canvas by vertical.
 *      renderer.options                    // The supplied constructor options.
 *      renderer.plugins                    // Collection of plugins.
 *      renderer.preserveDrawingBuffer      // The value of the preserveDrawingBuffer flag affects whether or not the contents of the stencil buffer is retained after rendering.
 *      renderer.resolution                 // The resolution / device pixel ratio of the renderer.
 *      renderer.screen                     // Measurements of the screen. (0, 0, screenWidth, screenHeight). Its safe to use as filterArea or hitArea for the whole stage.
 *      renderer.transparent                // Whether the render view is transparent.
 *      renderer.type                       // The type of the renderer.
 *      renderer.view                       // The canvas element that everything is drawn to.
 *      renderer.width                      // Same as view.width, actual number of pixels in the canvas by horizontal.
 * 
 * -- METHODS STATIC
 *      PIXI.Renderer.registerPlugin(pluginName, ctor)    // Adds a plugin to the renderer.
 * 
 * -- METHODS
 *      renderer.addSystem(ClassRef, _name)                                                         // Add a new system to the renderer.
 *      renderer.clear()                                                                            // Clear the frame buffer
 *      renderer.render(displayObject, _renderTexture, _clear, _transform, _skipUpdateTransform)    // Renders the object to its WebGL view
 *      renderer.reset()                                                                            // Resets the WebGL state so you can render things however you fancy!
 *
 * -- METHODS OVERRIDES
 *      renderer.destroy(_removeView)                                                               // Removes everything from the renderer (event listeners, spritebatch, etc...)
 *      renderer.resize(screenWidth, screenHeight)                                                  // Resizes the WebGL view to the specified width and height.
 *
 * -- METHODS INHERITED
 *      renderer.generateTexture(displayObject, scaleMode, resolution, _region)                     // Useful function that returns a texture of the display object that can then be used to create sprites This can be quite useful if your displayObject is complicated and needs to be reused multiple times.
 *      renderer.initPlugins(staticMap)                                                             // Initialize the plugins.
 *
 * -- EVENTS
 *      context(gl)                         // Fired when the WebGL context is set.
 *      postrender()                        // Fired after rendering finishes.
 *      prerender()                         // Fired before rendering starts.
 *      resize(screenWidth, screenHeight)   // Fired after view has been resized.
 */
