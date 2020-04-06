/**
 * [REFERENCE] Overview of the PIXI library
 * This is not part of the tutorial, just a simple look up and reference to get an overview of the PIXI API
 * 
 */

/**
 * -- CLASSES
 *      // APPLICATION
 *          [x] PIXI.Application(_options)     // Convenience class to create a new PIXI application. This class automatically creates the renderer, ticker and root container.
 * 
 *      // TEXTURE
 *          [x] PIXI.BaseRenderTexture(_options)                                // Special Texture (Base Texture), any PixiJS display object can render to it.
 *          [x] PIXI.BaseTexture(_resource, _options)                           // A Texture stores the information that represents an image. All textures have a base texture, which contains information about the source. Therefore you can have many textures all using a single BaseTexture
 *          [x] PIXI.RenderTexture(baseRenderTexture, frame)                    // A RenderTexture is a special texture that allows any PixiJS display object to be rendered to it.
 *          [x] PIXI.Texture(optbaseTexture, frame, orig, trim, rotateions)     // A texture stores the information that represents an image or part of an image. It cannot be added to the display list directly. Instead use it as the texture for a Sprite. If no frame is provided then the whole image is used.
 * 
 *      // BLEND
 *
 *      // BOUNDING BOX
 *          [x] PIXI.Bounds()     // 'Builder' pattern for bounds rectangles Axis-Aligned Bounding Box It is not a shape! Its mutable thing, no 'EMPTY' or that kind of problems
 * 
 *      // CANVAS
 *          [x] PIXI.CanvasMaskManager(renderer)                    // A set of functions used to handle masking.
 *          [x] PIXI.CanvasRenderer(_options)                        // The CanvasRenderer draws the scene and all its content onto a 2d canvas. This renderer should be used for browsers that do not support WebGL. Don't forget to add the CanvasRenderer.view to your DOM or you will not see anything!
 * 
 *      // SHAPES
 *          [x] PIXI.Circle(_x, _y, _radius)                        // The Circle object is used to help draw graphics and can also be used to specify a hit area for displayObjects.
 *          [x] PIXI.Ellipse(_x, _y, _halfWidth, _halfHeight)       // The Ellipse object is used to help draw graphics and can also be used to specify a hit area for displayObjects.
 *          [x] PIXI.ObservablePoint(cb, scope, x, y)               // The Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis. An observable point is a point that triggers a callback when the point's position is changed.
 *          [x] PIXI.Point(x, y)                                    // The Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis.
 *          [x] PIXI.Polygon(pointsArray)                           //
 *          [x] PIXI.Rectangle(x, y, width, height)                 // Rectangle object is an area defined by its position, as indicated by its top-left corner point (x, y) and by its width and its height.
 *          [x] PIXI.RoundedRectangle(x, y, width, height, radius)  // The Rounded Rectangle object is an area that has nice rounded corners, as indicated by its top-left corner point (x, y) and by its width and its height and its radius.
 * 
 *      // UTILITY
 *          [x] PIXI.Buffer(data, _static, _index)  // A wrapper for data so that it can be used and uploaded by WebGL
 *          [x] PIXI.CountLimiter(maxItemsPerFrame)          // CountLimiter limits the number of items handled by a PIXI.BasePrepare to a specified number of items per frame.
 *          [x] PIXI.Matrix(a, b, c, d, tx, ty)     // The PixiJS Matrix class as an object, which makes it a lot faster, here is a representation of it : | a | b | tx| | c | d | ty| | 0 | 0 | 1 |
 *          [x] PIXI.TimeLimiter(maxMilliseconds)   // TimeLimiter limits the number of items handled by a PIXI.BasePrepare to a specified number of milliseconds per frame.
 * 
 *      // OBJECTS
 *          [x] PIXI.Container()        // A Container represents a collection of display objects. It is the base class of all display objects that act as a container for other objects.
 *          [x] PIXI.DisplayObject()    // The base class for all objects that are rendered on the screen. This is an abstract class and should not be used on its own rather it should be extended.
 *          [x] PIXI.ObjectRenderer()   // Base for a common object renderer that can be used as a system renderer plugin.
 * 
 *      // SPRITE
 *          [x] PIXI.Sprite(texture)                                    // The Sprite object is the base for all textured objects that are rendered to the screen
 *          [x] PIXI.SpriteMaskFilter(sprite)                           //
 *          [x] PIXI.Spritesheet(baseTexture, data, resolutionFilename) // Utility class for maintaining reference to a collection of Textures on a single Spritesheet.
 * 
 *      // RENDERS, SHADERS, FILTERS
 *          [x] PIXI.Filter(_vertexSrc, _fragmentSrc, _uniform)                       // Filter is a special type of WebGL shader that is applied to the screen.
 *          [x] PIXI.Quad(gl, state)                                                // Helper class to create a quad, with a shader applied to it
 *          [x] PIXI.Shader(gl, vertexSrc, fragmentSrc)                             // Wrapper class, webGL Shader for Pixi. Adds precision string if vertexSrc or fragmentSrc have no mention of it.
 * 
 *      // Graphics
 *          [x] PIXI.Graphics(_geometry)       // The Graphics class contains methods used to draw primitive shapes such as lines, circles and rectangles to the display, and to color and fill them. Note that because Graphics can share a GraphicsGeometry with other instances, it is necessary to call destroy() to properly dereference the underlying GraphicsGeometry and avoid a memory leak. Alternatively, keep using the same Graphics instance and call clear() between redraws.
 *          [x] PIXI.GraphicsData(shape, _fillStyle, _lineStyle, _matrix)  // A class to contain data useful for Graphics objects
 * 
 *      // MASKS
 * 
 *      // SPRITES
 * 
 *      // TEXT
 *          [x] PIXI.Text(text, style, canvas)                                                                              // A Text Object will create a line or multiple lines of text. To split a line you can use '\n' in your text string, or add a wordWrap property set to true and and wordWrapWidth property with a value in the style object.
 *          [x] PIXI.TextMetrics(text, style, width, height, lines, lineWidths, lineHeight, maxLineWidth, fontProperties)   // The TextMetrics object represents the measurement of a block of text with a specified style.
 *          [x] PIXI.TextStyle(style)                                                                                       // A TextStyle Object decorates a Text Object. It can be shared between multiple Text objects. Changing the style will update all text objects using it.
 * 
 *      // TRANSFORM
 *          [x] PIXI.Transform()        // Generic class to deal with traditional 2D matrix transforms local transformation is calculated from position,scale,skew and rotation
 * 
 *      // WEBGL
 *          [x] PIXI.WebGLRenderer(options) //
 * 
 * 
 *  -- CLASSES
 *      // RENDER
 *      [/] new PIXI.AbstractBatchRenderer(renderer) // Renderer dedicated to drawing and batching sprites. This is the default batch renderer. It buffers objects with texture-based geometries and renders them in batches. It uploads multiple textures to the GPU to reduce to the number of draw calls *          
 *      [/] new PIXI.AbstractRenderer(system, _options)   // The AbstractRenderer is the base for a PixiJS Renderer. It is extended by the PIXI.CanvasRenderer and PIXI.Renderer which can be used for rendering a PixiJS scene.
 *      
 *      // SPRITE
 *      [/] new PIXI.AnimatedSprite(textures, _autoUpdate)   // An AnimatedSprite is a simple way to display an animation depicted by a list of textures.
 * 
 *      // PLUGINS && LOADER
 *      [/] new PIXI.AppLoaderPlugin()    // Application plugin for supporting loader option. Installing the LoaderPlugin is not necessary if using pixi.js or pixi.js-legacy.
 *      
 *      // RENDER & GEOMETRY/SHAPE
 *      [/] new PIXI.Attribute(buffer, _size, _normalized, _type, _tride, _start)    // Holds the information for a single attribute structure required to render geometry. This does not contain the actual data, but instead has a buffer id that maps to a PIXI.Buffer This can include anything from positions, uvs, normals, colors etc.
 *      
 *      // GPU
 *      [/] new PIXI.BasePrepare(renderer)    // The prepare manager provides functionality to upload content to the GPU. BasePrepare handles basic queuing functionality and is extended by PIXI.Prepare and PIXI.CanvasPrepare to provide preparation capabilities specific to their respective renderers.
 *      
 *      // BATCHING
 *      [/] new PIXI.BatchDrawCall()    // Used by the batcher to draw batches. Each one of these contains all information required to draw a bound geometry.
 *      [/] new PIXI.BatchGeometry(_static)    // Geometry used to batch standard PIXI content (e.g. Mesh, Sprite, Graphics objects).
 *      [/] new PIXI.BatchPluginFactory()   // 
 *      [/] new PIXI.BatchShaderGenerator(vertexSrc, fragTemplate)   // Helper that generates batching multi-texture shader. Use it with your new BatchRenderer
 *      [/] new PIXI.BatchTextureArray()    // Used by the batcher to build texture batches. Holds list of textures and their respective locations.
 *      
 *      // LOADER && MIDDLEWARE
 *      [/] new PIXI.BitmapFontLoader()   // Loader middleware for loading bitmap-based fonts suitable for using with PIXI.BitmapText.
 *      [/] new PIXI.Loader(_baseUrl, _concurrency)   // Chainable method used to lad resources
 *      [/] new PIXI.LoaderResource()   // Reference to resource-loader's Resource class.
 * 
 *      // TEXT
 *      [/] new PIXI.BitmapText(text, style)   // A BitmapText object will create a line or multiple lines of text using bitmap font. !Faster as preloaded, no performance lost when text changes. !But styling unchangable after preload.
 *      
 *      // CANVAS
 *      [/] new PIXI.CanvasExtract(renderer)    // The extract manager provides functionality to export content from the renderers. An instance of this class is automatically created by default, and can be found at renderer.plugins.extract
 *      [/] new PIXI.CanvasGraphicsRenderer(renderer)   // Renderer dedicated to drawing and batching graphics objects.
 *      [x] new PIXI.CanvasMaskManager(renderer)    // A set of functions used to handle masking. Sprite masking is not supported on the CanvasRenderer.
 *      [/] new PIXI.CanvasMeshRenderer(renderer)   // Renderer dedicated to meshes.
 *      [/] new PIXI.CanvasPrepare(renderer)    // The prepare manager provides functionality to upload content to the GPU. This cannot be done directly for Canvas like in WebGL, but the effect can be achieved by drawing textures to an offline canvas. This draw call will force the texture to be moved onto the GPU. An instance of this class is automatically created by default, and can be found at renderer.plugins.prepare
 *      [ ] new PIXI.CanvasSpriteRenderer(renderer)   // Renderer dedicated to drawing and batching sprites.
 *
 *      // Texture
 *      [ ] new PIXI.CubeTexture()    // A Texture that depends on six other resources.
 * 
 *      // EXPORT
 *      [/] new PIXI.Extract(renderer)    // This class provides renderer-specific plugins for exporting content from a renderer. For instance, these plugins can be used for saving an Image, Canvas element or for exporting the raw image data (pixels). Do not instantiate these plugins directly. It is available from the renderer.plugins property. See PIXI.CanvasRenderer#plugins or PIXI.Renderer#plugins.
 *      
 *      // GRAPHICS
 *      [/] new PIXI.FillStyle()    // Fill style object for Graphics.
 *      [/] new PIXI.GraphicsGeometry()   // The Graphics class contains methods used to draw primitive shapes such as lines, circles and rectangles to the display, and to color and fill them. GraphicsGeometry is designed to not be continually updating the geometry since it's expensive to re-tesselate using earcut. Consider using PIXI.Mesh for this use-case, it's much faster.
 *      [/] new PIXI.LineStyle()    // Represents the line style for Graphics.
 * 
 *      // BUFFER & TEXTURE
 *      [/] new PIXI.Framebuffer(width, height)    // Frame buffer used by the BaseRenderTexture
 * 
 *      // Model
 *      [/] new PIXI.Geometry(_buffers, _attributes)   // The Geometry represents a model. It consists of two components: GeometryStyle(The structure of the model such as the attributes layout), GeometryData(the data of the model - this consists of buffers. This can include anything from positions, uvs, normals, colors etc.). Geometry can be defined without passing in a style or data if required (thats how I prefer!)
 *      
 *      // WEBGL
 *      [/] new PIXI.GLProgram(program, uniformData)    // Helper class to create a WebGL Program
 *      [/] new PIXI.GLTexture()    // Internal texture for WebGL context
 * 
 *      [ ] new PIXI.MaskData()   // 
 *      [x] new PIXI.Matrix()   // 
 *      [ ] new PIXI.Mesh()   // 
 *      [ ] new PIXI.MeshBatchUvs()   // 
 *      [ ] new PIXI.MeshGeometry()   // 
 *      [ ] new PIXI.MeshMaterial()   // 
 *      [ ] new PIXI.NineSlicePlane()   // 
 *      [x] new PIXI.ObjectRenderer()   // 
 *      [x] new PIXI.ObservablePoint()    // 
 *      [ ] new PIXI.ParticleContainer()    // 
 *      [ ] new PIXI.ParticleRenderer()   // 
 *      [x] new PIXI.Point()    // 
 *      [x] new PIXI.Polygon()    // 
 *      [ ] new PIXI.Prepare()    // 
 *      [ ] new PIXI.Program()    // 
 *      [x] new PIXI.Quad()   // 
 *      [ ] new PIXI.QuadUv()   // 
 *      [x] new PIXI.Rectangle()    // 
 *      [x] new PIXI.Renderer()   // 
 *      [x] new PIXI.RenderTexture()    // 
 *      [ ] new PIXI.RenderTexturePool()    // 
 *      [ ] new PIXI.RopeGeometry()   // 
 *      [x] new PIXI.RoundedRectangle()   // 
 *      [ ] new PIXI.Runner()   // 
 *      [x] new PIXI.Shader()   // 
 *      [ ] new PIXI.SimpleMesh()   // 
 *      [ ] new PIXI.SimplePlane()    // 
 *      [ ] new PIXI.SimpleRope()   // 
 *      [x] new PIXI.Sprite()   // 
 *      [x] new PIXI.SpriteMaskFilter()   // 
 *      [x] new PIXI.Spritesheet()    // 
 *      [ ] new PIXI.SpritesheetLoader()    // 
 *      [ ] new PIXI.Star()   // 
 *      [ ] new PIXI.State()    // 
 *      [ ] new PIXI.System()   // 
 *      [x] new PIXI.Text()   // 
 *      [x] new PIXI.TextMetrics()    // 
 *      [x] new PIXI.TextStyle()    // 
 *      [x] new PIXI.Texture()    // 
 *      [ ] new PIXI.TextureLoader()    // 
 *      [ ] new PIXI.TextureMatrix()    // 
 *      [ ] new PIXI.TextureUvs()   // 
 *      [x] new PIXI.Ticker()   // 
 *      [ ] new PIXI.TickerPlugin()   // 
 *      [ ] new PIXI.TilingSprite()   // 
 *      [ ] new PIXI.TilingSpriteRenderer()   // 
 *      [x] new PIXI.TimeLimiter()    // 
 *      [x] new PIXI.Transform()    // 
 *      [ ] new PIXI.UniformGroup()           // 
 *      [ ] new PIXI.ViewableBuffer()         // 
 * 
 * -- NAMESPACES
 *      PIXI.accessibility  // Contains a renderer plugin for interaction accessibility for end-users with physical impairments which require screen-renders, keyboard navigation, etc.
 *      PIXI.canvasUtil     // Utility methods for Sprite/Texture tinting.
 *      PIXI.filters        // Contains WebGL-only display filters that can be applied to DisplayObjects using the filters property. Can be extended
 *      PIXI.graphicsUtils  // Generalized convenience utilities for Graphics.
 *      PIXI.groupD8        // Implements the dihedral group D8, which is similar to group D4; D8 is the same but with diagonals, and it is used for texture rotations.
 *      PIXI.interaction    // Contains a renderer plugin for handling mouse, pointer, and touch events. - Do not instantiate this plugin directly. It is available from the renderer.plugins property. See PIXI.CanvasRenderer#plugins or PIXI.Renderer#plugins.
 *      PIXI.resources      // Collection of base resource types supported by PixiJS. - Resources are used by PIXI.BaseTexture to handle different media types such as images, video, SVG graphics, etc. In most use-cases, you should not instantiate the resources directly. The easy thing is to use PIXI.BaseTexture.from.
 *      PIXI.settings       // User's customizable globals for overriding the default PIXI settings, such as a renderer's default resolution, framerate, float percision, etc.
 *      PIXI.systems        // Systems are individual components to the Renderer pipeline.
 *      PIXI.utils          // Generalized convenience utilities for PIXI.
 *      
 * 
 * -- PROPERTIES (all static, some constant)
 *      // How to treat textures with premultiplied alpha
 *      PIXI.ALPHA_MODES                            
 *          .ALPHA_MODES.NO_PREMULTIPLIED_ALPHA // number // Source is not premultiplied, leave it like that. Option for compressed and data textures that are created from typed arrays.
 *          .ALPHA_MODES.PREMULTIPLY_ON_UPLOAD  // number // Source is not premultiplied, premultiply on upload. Default option, used for all loaded images.
 *          .ALPHA_MODES.PREMULTIPLIED_ALPHA    // number // Source is already premultiplied Example: spine atlases with _pma suffix.
 *          .ALPHA_MODES.NPM                    // number // Alias for NO_PREMULTIPLIED_ALPHA.
 *          .ALPHA_MODES.UNPACK                 // number // Default option, alias for PREMULTIPLY_ON_UPLOAD.
 *          .ALPHA_MODES.PMA                    // number // Alias for PREMULTIPLIED_ALPHA.
 *
 *      // Various blend modes supported by PIXI.
 *      // IMPORTANT - The WebGL renderer only supports the NORMAL, ADD, MULTIPLY and SCREEN blend modes. Anything else will silently act like NORMAL.
 *      PIXI.BLEND_MODES  
 *          .BLEND_MODES.NORMAL                 // number
 *          .BLEND_MODES.ADD                    // number	
 *          .BLEND_MODES.MULTIPLY               // number	
 *          .BLEND_MODES.SCREEN                 // number	
 *          .BLEND_MODES.OVERLAY                // number	
 *          .BLEND_MODES.DARKEN                 // number	
 *          .BLEND_MODES.LIGHTEN                // number	
 *          .BLEND_MODES.COLOR_DODGE            // number	
 *          .BLEND_MODES.COLOR_BURN             // number	
 *          .BLEND_MODES.HARD_LIGHT             // number	
 *          .BLEND_MODES.SOFT_LIGHT             // number	
 *          .BLEND_MODES.DIFFERENCE             // number	
 *          .BLEND_MODES.EXCLUSION              // number	
 *          .BLEND_MODES.HUE                    // number	
 *          .BLEND_MODES.SATURATION             // number	
 *          .BLEND_MODES.COLOR                  // number	
 *          .BLEND_MODES.LUMINOSITY             // number	
 *          .BLEND_MODES.NORMAL_NPM             // number	
 *          .BLEND_MODES.ADD_NPM                // number	
 *          .BLEND_MODES.SCREEN_NPM             // number	
 *          .BLEND_MODES.NONE                   // number	
 *          .BLEND_MODES.SRC_IN                 // number	
 *          .BLEND_MODES.SRC_OUT                // number	
 *          .BLEND_MODES.SRC_ATOP               // number	
 *          .BLEND_MODES.DST_OVER               // number	
 *          .BLEND_MODES.DST_IN                 // number	
 *          .BLEND_MODES.DST_OUT                // number	
 *          .BLEND_MODES.DST_ATOP               // number	
 *          .BLEND_MODES.SUBTRACT               // number	
 *          .BLEND_MODES.SRC_OVER               // number	
 *          .BLEND_MODES.ERASE                  // number	
 *          .BLEND_MODES.XOR                    // number    
 *
 *      PIXI.DATA_URI               // Regexp for data URI. Based on: https://github.com/ragingwind/data-uri-regex
 *      PIXI.defaultFilterVertex    // Default filter vertex shader
 *      PIXI.defaultVertex          // Default vertex shader
 *      PIXI.DEG_TO_RAD             // Conversion factor for converting degrees to radians.
 * 
 *      // Various webgl draw modes. These can be used to specify which GL drawMode to use under certain situations and renderers.
 *      PIXI.DRAW_MODES
 *          .DRAW_MODES.POINTS                  // number
 *          .DRAW_MODES.LINES                   // number
 *          .DRAW_MODES.LINE_LOOP               // number
 *          .DRAW_MODES.LINE_STRIP              // number
 *          .DRAW_MODES.TRIANGLES               // number
 *          .DRAW_MODES.TRIANGLE_STRIP          // number
 *          .DRAW_MODES.TRIANGLE_FAN            // number
 *          .DRAW_MODES.POINTS                  // number
 *
 *      // Various GL texture/resources formats.
 *      PIXI.ENV
 *          .ENV.WEBGL_LEGACY                   // number // Used for older v1 WebGL devices. PixiJS will aim to ensure compatibility with older / less advanced devices. If you experience unexplained flickering prefer this environment.
 *          .ENV.WEBGL                          // number // Version 1 of WebGL
 *          .ENV.WEBGL2                         // number // Version 2 of WebGL
 * 
 *      // Various GL texture/resources formats.
 *      PIXI.FORMATS 
 *          .FORMATS.RGBA                       // number // default - 6408
 *          .FORMATS.RGB                        // number // default - 6407
 *          .FORMATS.ALPHA                      // number // default - 6406
 *          .FORMATS.LUMINANCE                  // number // default - 6409
 *          .FORMATS.LUMINANCE_ALPHA            // number // default - 6410
 *          .FORMATS.DEPTH_COMPONENT            // number // default - 6402
 *          .FORMATS.DEPTH_STENCIL              // number // default - 34041
 * 
 *      // The gc modes that are supported by pixi.
 *      // The PIXI.settings.GC_MODE Garbage Collection mode for PixiJS textures is AUTO If set to GC_MODE, the renderer will occasionally check textures usage. If they are not used for a specified period of time they will be removed from the GPU. They will of course be uploaded again when they are required. This is a silent behind the scenes process that should ensure that the GPU does not get filled up.
 *      // Handy for mobile devices! This property only affects WebGL.
 *      PIXI.GC_MODES
 *          .ENV.AUTO                           // number // Garbage collection will happen periodically automatically
 *          .ENV.MANUAL                         // number // Garbage collection will need to be called manually
 * 
 *      // Graphics curves resolution settings. If adaptive flag is set to true, the resolution is calculated based on the curve's length to ensure better visual quality. Adaptive draw works with bezierCurveTo and quadraticCurveTo.
 *      PIXI.GRAPHICS_CURVES  
 *          .GRAPHICS_CURVES.adaptive           // boolean  // default - false  // flag indicating if the resolution should be adaptive
 *          .GRAPHICS_CURVES.maxLength          // number   // default - 10     // maximal length of a single segment of the curve (if adaptive = false, ignored)
 *          .GRAPHICS_CURVES.minSegments        // number   // default - 8      // minimal number of segments in the curve (if adaptive = false, ignored)
 *          .GRAPHICS_CURVES.maxSegments        // number   // default - 2048   // maximal number of segments in the curve (if adaptive = false, ignored)
 * 
 *      // Constants for mask implementations. We use type suffix because it leads to very different behaviours
 *      PIXI.MASK_TYPES  
 *          .MASK_TYPES.NONE                    // number // Mask is ignored
 *          .MASK_TYPES.SCISSOR                 // number // Scissor mask, rectangle on screen, cheap
 *          .MASK_TYPES.STENCIL                 // number // Stencil mask, 1-bit, medium, works only if renderer supports stencil
 *          .MASK_TYPES.SPRITE                  // number // Mask that uses SpriteMaskFilter, uses temporary RenderTexture
 * 
 *      // Mipmap filtering modes that are supported by pixi.
 *      // The PIXI.settings.MIPMAP_TEXTURES affects default texture filtering. Mipmaps are generated for a baseTexture if its mipmap field is ON, or its POW2 and texture dimensions are powers of 2. Due to platform restriction, ON option will work like POW2 for webgl-1.
 *      // This property only affects WebGL.
 *      PIXI.MIPMAP_MODES 
 *          .MIPMAP_MODES.OFF                   // number // No mipmaps
 *          .MIPMAP_MODES.POW2                  // number // Generate mipmaps if texture dimensions are pow2
 *          .MIPMAP_MODES.	                    // number // Always generate mipmaps
 *      
 *      PIXI.PI_2                   // Two Pi.
 *
 *      // Constants that specify float precision in shaders.
 *      PIXI.PRECISION  
 *          .PRECISION.LOW                      // number // default - 'lowp'
 *          .PRECISION.MEDIUM                   // number // default - 'mediump'
 *          .PRECISION.HIGH                     // number // default - 'highp'
 *
 *      PIXI.RAD_TO_DEG             // Conversion factor for converting radians to degrees.
 * 
 *      // Constant to identify the Renderer Type.
 *      PIXI.RENDERER_TYPE  
 *          .RENDERER_TYPE.UNKNOWN              // number // Unknown render type.
 *          .RENDERER_TYPE.WEBGL                // number // WebGL render type.
 *          .RENDERER_TYPE.CANVAS               // number // Canvas render type.
 * 
 *      // The scale modes that are supported by pixi.
 *      // The PIXI.settings.SCALE_MODE scale mode affects the default scaling mode of future operations. It can be re-assigned to either LINEAR or NEAREST, depending upon suitability.
 *      PIXI.SCALE_MODES
 *          .SCALE_MODES.LINEAR                 // number // Smooth scaling.
 *          .SCALE_MODES.NEAREST                // number // 	Pixelating scaling.
 *
 *      // Constants that identify shapes, mainly to prevent instanceof calls.
 *      PIXI.SHAPES
 *          .SHAPES.POLY                        // number // Polygon.
 *          .SHAPES.RECT                        // number // Rectangle.
 *          .SHAPES.CIRC                        // number // Circle.
 *          .SHAPES.ELIP                        // number // Ellipse.
 *          .SHAPES.RREC                        // number // Rounded Rectangle.
 *
 *      // Various GL target types.
 *      PIXI.TARGETS
 *          .TARGETS.TEXTURE_2D                   // number // default - 3553
 *          .TARGETS.TEXTURE_CUBE_MAP             // number // default - 34067
 *          .TARGETS.TEXTURE_2D_ARRAY             // number // default - 35866
 *          .TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X  // number // default - 34069
 *          .TARGETS.TEXTURE_CUBE_MAP_NEGATIVE_X  // number // default - 34070
 *          .TARGETS.TEXTURE_CUBE_MAP_POSITIVE_Y  // number // default - 34071
 *          .TARGETS.TEXTURE_CUBE_MAP_NEGATIVE_Y  // number // default - 34072
 *          .TARGETS.TEXTURE_CUBE_MAP_POSITIVE_Z  // number // default - 34073
 *          .TARGETS.TEXTURE_CUBE_MAP_NEGATIVE_Z  // number // default - 34074
 *
 *      // Constants that define the type of gradient on text.
 *      PIXI.TEXT_GRADIENT
 *          .TEXT_GRADIENT.LINEAR_VERTICAL      // number // Vertical gradient.
 *          .TEXT_GRADIENT.LINEAR_HORIZONTAL    // number // Linear gradient.
 *
 *      // Various GL data format types.
 *      PIXI.TYPES
 *          .TYPES.UNSIGNED_BYTE                // number // default - 5121
 *          .TYPES.UNSIGNED_SHORT               // number // default - 5123
 *          .TYPES.UNSIGNED_SHORT_5_6_5         // number // default - 33635
 *          .TYPES.UNSIGNED_SHORT_4_4_4_4       // number // default - 32819
 *          .TYPES.UNSIGNED_SHORT_5_5_5_1       // number // default - 32820
 *          .TYPES.FLOAT                        // number // default - 5126
 *          .TYPES.HALF_FLOAT                   // number // default - 36193
 * 
 *      // Represents the update priorities used by internal PIXI classes when registered with the PIXI.Ticker object. Higher priority items are updated first and lower priority items, such as render, should go later.
 *      PIXI.UPDATE_PRIORITY
 *          .UPDATE_PRIORITY.INTERACTION        // number // default - 50  // Highest priority, used for PIXI.interaction.InteractionManager.
 *          .UPDATE_PRIORITY.HIGH               // number // default - 25  // High priority updating, PIXI.VideoBaseTexture and PIXI.AnimatedSprite.
 *          .UPDATE_PRIORITY.NORMAL             // number // default - 0  // Default priority for ticker events, see PIXI.Ticker#add.
 *          .UPDATE_PRIORITY.LOW                // number // default - -25  // Low priority used for PIXI.Application rendering.
 *          .UPDATE_PRIORITY.UTILITY            // number // default - -50  // Lowest priority used for PIXI.prepare.BasePrepare utility.
 *
 *      PIXI.VERSION                // String of the current PIXI version.
 * 
 *      // The wrap modes that are supported by pixi.
 *      // The PIXI.settings.WRAP_MODE wrap mode affects the default wrapping mode of future operations. It can be re-assigned to either CLAMP or REPEAT, depending upon suitability. If the texture is non power of two then clamp will be used regardless as WebGL can only use REPEAT if the texture is po2.
 *      // This property only affects WebGL.
 *      PIXI.WRAP_MODES
 *          .WRAP_MODES.CLAMP                   // number // The textures uvs are clamped.
 *          .WRAP_MODES.REPEAT                  // number // The texture uvs tile and repeat.
 *          .WRAP_MODES.MIRRORED_REPEAT         // number // The texture uvs tile and repeat with mirroring.
 *
 * -- METHODS
 *      PIXI.autoDetectRenderer(options) // will automatically detect which renderer you should be using. WebGL is the preferred renderer as it is a lot faster. If webGL is not supported by the browser then this function will return a canvas renderer.
 *      PIXI.useDeprecated() // Deprecations (backward compatibilities) are automatically applied for browser bundles in the UMD module format. If using Webpack or Rollup, you'll need to apply these deprecations manually.
 *
 * -- TYPE DEFINITIONS
 *      PIXI.GD8Symmetry          // PIXI.groupD8
 *      PIXI.ICanvasImageSource   // Types that can be passed to drawImage
 * 
 *      // A number, or a string containing a number.
 *      PIXI.IFontMetrics
 *          .IFontMetrics.ascent                // number // Font ascent
 *          .IFontMetrics.descent               // number // Font descent
 *          .IFontMetrics.fontSize              // number // Font size
 * 
 *      // Plugin to be installed for handling specific Loader resources.
 *      PIXI.ILoaderPlugin
 *          .ILoaderPlugin.add                  // function                     // arguments optional - Function to call immediate after registering plugin.
 *          .ILoaderPlugin.pre                  // PIXI.Loader.loaderMiddleware // arguments optional - Middleware function to run before load, the arguments for this are (resource, next)
 *          .ILoaderPlugin.use                  // PIXI.Loader.loaderMiddleware // arguments optional - Middleware function to run after load, the arguments for this are (resource, next)
 * 
 *      // Various GL data format types.
 *      PIXI.ISize 
 *          .ISize.width                        // number // Width component
 *          .ISize.height                       // number // Height component
 * 
 * -- INTERFACE DEFINITIONS
 *      PIXI.IHitArea                           // PIXI.Circle | PIXI.Ellipse | PIXI.Polygon | PIXI.RoundedRectange // Interface for classes that represent a hit area.
 *      PIXI.IPoint                             // Common interface for points. Both Point and ObservablePoint implement it
 * 
 */

// NOTES
// Frame is like a view into a texture, else whole texture used