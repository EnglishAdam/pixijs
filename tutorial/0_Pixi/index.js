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
 *          PIXI.BaseRenderTexture(width, height, scaleMode, resolution)    // Special Texture (Base Texture), any PixiJS display object can render to it.
 *          PIXI.BaseTexture(source, scaleMode, resolution)                 // All textures have a bast texture
 *          PIXI.GroupD8(options)                                           // Implements Dihedral Group D_8. Used for texture rotations.
 *          PIXI.RenderTexture(baseRenderTexture, frame)                    // A RenderTexture is a special texture that allows any PixiJS display object to be rendered to it.
 *          PIXI.Texture(optbaseTexture, frame, orig, trim, rotateions)     // A texture stores the information that represents an image or part of an image. It cannot be added to the display list directly. Instead use it as the texture for a Sprite. If no frame is provided then the whole image is used.
 *          PIXI.TextureGarbageCollector(renderer)                          // TextureGarbageCollector. This class manages the GPU and ensures that it does not get clogged up with textures that are no longer being used.
 *          PIXI.TextureManager(renderer)                                   // Helper class to create a webGL Texture
 *          PIXI.VideoBaseTexture(source, scaleMode)                        // A texture of a [playing] Video. Video base textures mimic PixiJS BaseTexture.from.... method in their creation process.
 * 
 *      // BLEND
 *          PIXI.BlendModeManager(renderer)
 *
 *      // BOUNDING BOX
 *          PIXI.Bounds()     //'Builder' pattern for bounds rectangles Axis-Aligned Bounding Box It is not a shape! Its mutable thing, no 'EMPTY' or that kind of problems
 * 
 *      // CANVAS
 *          PIXI.CanvasMaskManager(renderer)                    // A set of functions used to handle masking.
 *          PIXI.CanvasRenderer(options)                        // The CanvasRenderer draws the scene and all its content onto a 2d canvas.
 *          PIXI.CanvasRenderTarget(width, height, resolution)  //      Creates a Canvas element of the given size.
 *          PIXI.CanvasTinter()                                 // Utility methods for Sprite/Texture tinting.
 * 
 *      // SHAPES
 *          PIXI.Circle(x, y, radius)                           // The Circle object can be used to specify a hit area for displayObjects
 *          PIXI.Ellipse(x, y, width, height)                   // The Ellipse object can be used to specify a hit area for displayObjects
 *          PIXI.ObservablePoint(cb, scope, x, y)               // The Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis. An observable point is a point that triggers a callback when the point's position is changed.
 *          PIXI.Point(x, y)                                    // The Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis.
 *          PIXI.Polygon(pointsArray)                           //
 *          PIXI.Rectangle(x, y, width, height)                 // Rectangle object is an area defined by its position, as indicated by its top-left corner point (x, y) and by its width and its height.
 *          PIXI.RoundedRectangle(x, y, width, height, radius)  // The Rounded Rectangle object is an area that has nice rounded corners, as indicated by its top-left corner point (x, y) and by its width and its height and its radius.
 * 
 *      // UTILITY
 *          PIXI.Buffer(size)
 *          PIXI.CountLimiter(options)          // CountLimiter limits the number of items handled by a PIXI.prepare.BasePrepare to a specified number of items per frame.
 *          PIXI.Matrix(a, b, c, d, tx, ty)     // The PixiJS Matrix class as an object, which makes it a lot faster, here is a representation of it : | a | b | tx| | c | d | ty| | 0 | 0 | 1 |
 *          PIXI.TimeLimiter(maxMilliseconds)   // TimeLimiter limits the number of items handled by a PIXI.BasePrepare to a specified number of milliseconds per frame.
 * 
 *      // OBJECTS
 *          PIXI.Container()        // A Container represents a collection of display objects. It is the base class of all display objects that act as a container for other objects.
 *          PIXI.DisplayObject()    // The base class for all objects that are rendered on the screen. This is an abstract class and should not be used on its own rather it should be extended.
 *          PIXI.ObjectRenderer()   // Base for a common object renderer that can be used as a system renderer plugin.
 * 
 *      // SPRITE
 *          PIXI.Sprite(texture)                                    // The Sprite object is the base for all textured objects that are rendered to the screen
 *          PIXI.SpriteMaskFilter(sprite)                           //
 *          PIXI.Spritesheet(baseTexture, data, resolutionFilename) // Utility class for maintaining reference to a collection of Textures on a single Spritesheet.
 * 
 *      // RENDERS, SHADERS, FILTERS
 *          PIXI.Filter(vertexSrc, fragmentSrc, uniforms)                       //
 *          PIXI.FilterManager(renderer)                                        //
 *          PIXI.ParticleShader(gl)                                             //
 *          PIXI.PrimitiveShader(gl)                                            // This shader is used to draw simple primitive shapes for PIXI.Graphics.
 *          PIXI.Quad(gl, state)                                                // Helper class to create a quad, with a shader applied to it
 *          PIXI.RenderTarget(gl, width, height, scaleMode, resolution, root)   //
 *          PIXI.Shader(gl, vertexSrc, fragmentSrc)                             // Wrapper class, webGL Shader for Pixi. Adds precision string if vertexSrc or fragmentSrc have no mention of it.
 *          PIXI.StencilManager(renderer)                                       //
 *          PIXI.SystemRenderer(system, options)                                // The SystemRenderer is the base for a PixiJS Renderer. It is extended by the PIXI.CanvasRenderer and PIXI.WebGLRenderer which can be used for rendering a PixiJS scene.
 * 
 *      // Graphics
 *          PIXI.Graphics(nativeLines)                                                                          // The Graphics class contains methods used to draw primitive shapes such as lines, circles and rectangles to the display, and to color and fill them
 *          PIXI.GraphicsData(lineWidth, lineColor, lineAlpha, fillColor, fillAlpha, fill, nativeLines, shape)  // A GraphicsData object.
 *          PIXI.GraphicsRenderer(renderer)                                                                     // Renders the graphics object.
 * 
 *      // MASKS
 *          PIXI.MaskManager(renderer)
 * 
 *      // SPRITES
 *          PIXI.MeshRenderer(renderer) // WebGL renderer plugin for tiling sprites
 * 
 *      // TEXT
 *          PIXI.Text(text, style, canvas)                                                                              // A Text Object will create a line or multiple lines of text. To split a line you can use '\n' in your text string, or add a wordWrap property set to true and and wordWrapWidth property with a value in the style object.
 *          PIXI.TextMetrics(text, style, width, height, lines, lineWidths, lineHeight, maxLineWidth, fontProperties)   // The TextMetrics object represents the measurement of a block of text with a specified style.
 *          PIXI.TextStyle(style)                                                                                       // A TextStyle Object decorates a Text Object. It can be shared between multiple Text objects. Changing the style will update all text objects using it.
 * 
 *      // TRANSFORM
 *          PIXI.Transform()        // Generic class to deal with traditional 2D matrix transforms local transformation is calculated from position,scale,skew and rotation
 *          PIXI.TransformBase()    // Generic class to deal with traditional 2D matrix transforms
 *          PIXI.TransformStatic()  // Transform that takes care about its versions
 * 
 *      // WEBGL
 *          PIXI.WebGLManager(renderer) //
 *          PIXI.WebGLRenderer(options) //
 *          PIXI.WebGLState(gl)         // WebGL state machine
 * 
 * -- NAMESPACES
 *      PIXI.accessibility  // Contains a renderer plugin for interaction accessibility for end-users with physical impairments which require screen-renders, keyboard navigation, etc.
 *      PIXI.extract        // Provides renderer-specific plugins for exporting content from a renderer. For instance, these plugins can be used for saving an Image, Canvas element or for exporting the raw image data (pixels)
 *      PIXI.extras         // Additional PIXI DisplayObjects for animation, tiling and bitmap text.
 *      PIXI.filters        // Contains WebGL-only display filters that can be applied to DisplayObjects using the filters property.
 *      PIXI.interaction    // Contains a renderer plugin for handling mouse, pointer, and touch events.
 *      PIXI.loaders        // Contains APIs which extends the resource-loader module for loading assets, data, and other resources dynamically.
 *      PIXI.mesh           // 
 *      PIXI.particles      // 
 *      PIXI.prepare        // Provides renderer-specific plugins for pre-rendering DisplayObjects. These plugins are useful for asynchronously preparing assets, textures, graphics waiting to be displayed.
 *      PIXI.settings       // User's customizable globals for overriding the default PIXI settings, such as a renderer's default resolution, framerate, float percision, etc.
 *      PIXI.ticker         // Contains an API for interacting with PIXI's internal global update loop.
 *      PIXI.utils          // Generalized convenience utilities for PIXI.
 * 
 * -- PROPERTIES
 *      PIXI.BLEND_MODES            //
 *      PIXI.CAN_UPLOAD_SAME_BUFFER //
 *      PIXI.DATA_URI               //
 *      PIXI.DEFAULT_RENDER_OPTIONS //
 *      PIXI.DRAW_MODES             //
 *      PIXI.FILTER_RESOLUTION      //
 *      PIXI.GC_MODES               //
 *      PIXI.loader                 //
 *      PIXI.MIPMAP_TEXTURES        //
 *      PIXI.PRECISION              //
 *      PIXI.RENDERER_TYPE          //
 *      PIXI.RESOLUTION             //
 *      PIXI.RETINA_PREFIX          //
 *      PIXI.SCALE_MODES            //
 *      PIXI.SHAPES                 //
 *      PIXI.SPRITE_BATCH_SIZE      //
 *      PIXI.SPRITE_MAX_TEXTURES    //
 *      PIXI.SVG_SIZE               //
 *      PIXI.TARGET_FPMS            //
 *      PIXI.TEXT_GRADIENT          //
 *      PIXI.TRANSFORM_MODE         //
 *      PIXI.UPDATE_PRIORITY        //
 *      PIXI.VERSION                //
 *      PIXI.WRAP_MODES             //
 * 
 * -- METHODS
 *      PIXI.autoDetectRenderer(options) // will automatically detect which renderer you should be using. WebGL is the preferred renderer as it is a lot faster. If webGL is not supported by the browser then this function will return a canvas renderer.
 */

 // NOTES
 // Frame is like a view into a texture, else whole texture used