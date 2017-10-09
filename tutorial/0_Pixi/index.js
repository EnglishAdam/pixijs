/**
 * [REFERENCE] Overview of the PIXI library
 * This is not part of the tutorial, just a simple look up and reference to get an overview of the PIXI API
 * 
 */

/**
 * -- CLASSES
 *      // APPLICATION
 *          PIXI.Application(options)     // Convenience class to create a new PIXI application. This class automatically creates the renderer, ticker and root container.
 * 
 *      // TEXTURE
 *          PIXI.BaseRenderTexture(width, height, scaleMode, resolution)     // Special Texture (Base Texture), any PixiJS display object can render to it.
 *          PIXI.BaseTexture(source, scaleMode, resolution)      // All textures have a bast texture
 *          PIXI.GroupD8(options)     // Implements Dihedral Group D_8. Used for texture rotations.
 *          PIXI.RenderTexture(baseRenderTexture, frame)     // A RenderTexture is a special texture that allows any PixiJS display object to be rendered to it.
 *          PIXI.Texture(optbaseTexture, frame, orig, trim, rotateions)     // A texture stores the information that represents an image or part of an image. It cannot be added to the display list directly. Instead use it as the texture for a Sprite. If no frame is provided then the whole image is used.
 *          PIXI.TextureGarbageCollector(renderer)     // TextureGarbageCollector. This class manages the GPU and ensures that it does not get clogged up with textures that are no longer being used.
 *          PIXI.TextureManager(renderer)     // Helper class to create a webGL Texture
 * 
 *      // BLEND
 *          PIXI.BlendModeManager(renderer)
 *
 *      // BOUNDING BOX
 *          PIXI.Bounds()     //'Builder' pattern for bounds rectangles Axis-Aligned Bounding Box It is not a shape! Its mutable thing, no 'EMPTY' or that kind of problems
 * 
 *      // CANVAS
 *          PIXI.CanvasMaskManager(renderer)      // A set of functions used to handle masking.
 *          PIXI.CanvasRenderer(options)      // The CanvasRenderer draws the scene and all its content onto a 2d canvas.
 *          PIXI.CanvasRenderTarget(width, height, resolution) //      Creates a Canvas element of the given size.
 *          PIXI.CanvasTinter()     // Utility methods for Sprite/Texture tinting.
 * 
 *      // SHAPES
 *          PIXI.Circle(x, y, radius)     // The Circle object can be used to specify a hit area for displayObjects
 *          PIXI.Ellipse(x, y, width, height)     // The Ellipse object can be used to specify a hit area for displayObjects
 *          PIXI.ObservablePoint(cb, scope, x, y)     // The Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis. An observable point is a point that triggers a callback when the point's position is changed.
 *          PIXI.Point(x, y)     // The Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis.
 *          PIXI.Polygon(pointsArray)
 *          PIXI.Rectangle(x, y, width, height)     // Rectangle object is an area defined by its position, as indicated by its top-left corner point (x, y) and by its width and its height.
 *          PIXI.RoundedRectangle(x, y, width, height, radius)     // The Rounded Rectangle object is an area that has nice rounded corners, as indicated by its top-left corner point (x, y) and by its width and its height and its radius.
 * 
 *      // UTILITY
 *          PIXI.Buffer(size)
 *          PIXI.CountLimiter(options)     // CountLimiter limits the number of items handled by a PIXI.prepare.BasePrepare to a specified number of items per frame.
 *          PIXI.Matrix(a, b, c, d, tx, ty)     // The PixiJS Matrix class as an object, which makes it a lot faster, here is a representation of it : | a | b | tx| | c | d | ty| | 0 | 0 | 1 |
 *          PIXI.TimeLimiter(maxMilliseconds)     // TimeLimiter limits the number of items handled by a PIXI.BasePrepare to a specified number of milliseconds per frame.
 * 
 *      // OBJECTS
 *          PIXI.Container()     // A Container represents a collection of display objects. It is the base class of all display objects that act as a container for other objects.
 *          PIXI.DisplayObject()     // The base class for all objects that are rendered on the screen. This is an abstract class and should not be used on its own rather it should be extended.
 *          PIXI.ObjectRenderer()     // Base for a common object renderer that can be used as a system renderer plugin.
 * 
 *      // SPRITE
 *          PIXI.Sprite(texture)     // The Sprite object is the base for all textured objects that are rendered to the screen
 *          PIXI.SpriteMaskFilter(sprite)
 *          PIXI.Spritesheet(baseTexture, data, resolutionFilename)     // Utility class for maintaining reference to a collection of Textures on a single Spritesheet.
 * 
 *      // RENDERS, SHADERS, FILTERS
 *          PIXI.Filter(vertexSrc, fragmentSrc, uniforms)
 *          PIXI.FilterManager(renderer)
 *          PIXI.ParticleShader(gl)
 *          PIXI.PrimitiveShader(gl)      // This shader is used to draw simple primitive shapes for PIXI.Graphics.
 *          PIXI.Quad(gl, state)     // Helper class to create a quad, with a shader applied to it
 *          PIXI.RenderTarget(gl, width, height, scaleMode, resolution, root)
 *          PIXI.Shader(gl, vertexSrc, fragmentSrc)     // Wrapper class, webGL Shader for Pixi. Adds precision string if vertexSrc or fragmentSrc have no mention of it.
 *          PIXI.StencilManager(renderer)
 *          PIXI.SystemRenderer(system, options)     // The SystemRenderer is the base for a PixiJS Renderer. It is extended by the PIXI.CanvasRenderer and PIXI.WebGLRenderer which can be used for rendering a PixiJS scene.
 * 
 *      // Graphics
 *          PIXI.Graphics(nativeLines)     // The Graphics class contains methods used to draw primitive shapes such as lines, circles and rectangles to the display, and to color and fill them
 *          PIXI.GraphicsData(lineWidth, lineColor, lineAlpha, fillColor, fillAlpha, fill, nativeLines, shape)     // A GraphicsData object.
 *          PIXI.GraphicsRenderer(renderer)     // Renders the graphics object.
 * 
 *      // MASKS
 *          PIXI.MaskManager(renderer)
 * 
 *      // SPRITES
 *          PIXI.MeshRenderer(renderer)     // WebGL renderer plugin for tiling sprites
 * 
 *      // TEXT
 *          PIXI.Text(text, style, canvas)     // A Text Object will create a line or multiple lines of text. To split a line you can use '\n' in your text string, or add a wordWrap property set to true and and wordWrapWidth property with a value in the style object.
 *          PIXI.TextMetrics(text, style, width, height, lines, lineWidths, lineHeight, maxLineWidth, fontProperties)     // The TextMetrics object represents the measurement of a block of text with a specified style.
 *          PIXI.TextStyle(style)     // A TextStyle Object decorates a Text Object. It can be shared between multiple Text objects. Changing the style will update all text objects using it.
 * 
 *      // TRANSFORM
 *          PIXI.Transform()     // Generic class to deal with traditional 2D matrix transforms local transformation is calculated from position,scale,skew and rotation
 *          PIXI.TransformBase()     // Generic class to deal with traditional 2D matrix transforms
 *          PIXI.TransformStatic()     // Transform that takes care about its versions
 * 
 * 
 * 
 *      PIXI.VideoBaseTexture(options)
 *      PIXI.WebGLManager(options)
 *      PIXI.WebGLRenderer(options)
 *      PIXI.WebGLState(options)
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

 // Frame is like a view into a texture, else whole texture used