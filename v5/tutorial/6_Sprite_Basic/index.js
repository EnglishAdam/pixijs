// Instantiate Application
const app = new PIXI.Application()
document.body.appendChild(app.view);

// Stage Sprite
var bunny = PIXI.Sprite.fromImage('./bunny.png')
bunny.interactive = true;
bunny.buttonMode = true;
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;
bunny.x = app.renderer.width / 2
bunny.y = app.renderer.width / 2
// bunny.pivot.x = 
app.stage.addChild(bunny);

app.ticker.add(function (delta) {
    bunny.height += 2 * Math.cos(Date.now() / 1000)
    bunny.rotation += 0.01 * delta    
    bunny.skew = {x: Math.sin(Date.now() / 1000), y: Math.cos(Date.now() / 1000)}
    bunny.tint = 16777215 * Math.sin(Date.now() / 1000)
    bunny.width += 2 * Math.cos(Date.now() / 1000)
});

/**
 * - USES
 *      let sprite = new PIXI.Sprite.fromImage('assets/image.png');
 *      //alt let sprite = PIXI.Sprite.fromImage('assets/image.png');
 * 
 * -- PROPERTIES
 *      sprite.alpha                // The opacity of the object.
 *      sprite.anchor               // {w, y, scope, cb} The anchor sets the origin point of the texture. 
 *      sprite.blendMode            // Number, set via PIXI.BLEND_MODES['blendMode'] or PIXI.BLEND_MODES.blendMode
 *      sprite.buttonMode           // If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive 
 *      sprite.cacheAsBitmap        // Set this to true if you want this display object to be cached as a bitmap. This basically takes a snap shot of the display object as it is at that moment. 
 *      sprite.children             // Array of children
 *      sprite.cursor               // Cursor Type
 *      sprite.filterArea           // The area the filter is applied to.
 *      sprite.filters              // Sets the filters for the displayObject.
 *      sprite.height               // The height of the sprite, setting this will actually modify the scale to achieve the value set
 *      sprite.hitArea              // Shape of hitArea (Rectangle, Polygon, Circle, ...etc)
 *      sprite.interactive          // Enable interaction events for the DisplayObject.
 *      sprite.interactiveChildren  // Determines if the children to the displayObject can be clicked/touched Setting this to false allows PixiJS to bypass a recursive hitTest function
 *      sprite.localTransform       // {a: x scale, b: y skew, c: x skew, d: y scale, tx: x translate, ty: y translation} PIXI.Matrix - Current transform of the object based on local factors: position, scale, other stuff
 *      sprite.mask                 // Sets a mask for the displayObject. A mask is an object that limits the visibility of an object to the shape of the mask applied to it. In PIXI a regular mask must be a PIXI.Graphics or a PIXI.Sprite object. This allows for much faster masking in canvas as it utilises shape clipping. To remove a mask, set this property to null.
 *      sprite.parent               // The display object container that contains this display object.
 *      sprite.pivot                // {cb, scope, x, y} The pivot point of the displayObject 
 *      sprite.pluginName           // Plugin that is responsible for rendering this element (Default is sprite)
 *      sprite.position             // {cb, scope, x, y} Position
 *      sprite.renderable           // Determines display. updateTransform STILL called.
 *      sprite.rotation             // Rotations in radians
 *      sprite.scale                // {cb, scope, x, y}
 *      sprite.shader               // {gl, vertexSrc, fragmentSrc}
 *      sprite.skew                 // {cb, scope, x, y}
 *      sprite.texture              // Texture sprite is using.
 *      sprite.tint                 // 0xFFFFFF
 *      sprite.transform            // World transform and local transform of this object. new PIXI.TransformBase()
 *      sprite.visible              // Determines display. updateTransform NOT called
 *      sprite.width                // The width of the sprite, setting this will actually modify the scale to achieve the value set
 *      sprite.worldAlpha           // The multiplied alpha of the displayObject
 *      sprite.worldTransform       // {a: x scale, b: y skew, c: x skew, d: y scale, tx: x translate, ty: y translation} PIXI.Matrix
 *      sprite.worldVisible         // Global visibility
 *      sprite.x                    // position.x
 *      sprite.y                    // position.y
 * 
 * -- METHODS STATIC
 *      PIXI.Sprite.from(source)
 *      PIXI.Sprite.fromFrame(frameID)
 *      PIXI.Sprite.fromImage(imageId, crossorigin, scaleMode)
 * 
 * -- METHODS
 *      sprite._recursivePostUpdateTransform()                                      // recursively updates transform of all objects from the root to this one internal function for toLocal()
 *      addChild(child1, childN, ...)                                               // Adds one or more children to the container.
 *      addChildAt(child, index)                                                    // Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
 *      calculateBounds()                                                           // Recalculates the bounds of the container.
 *      calculateTrimmedVertices()                                                  // calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData This is used to ensure that the true width and height of a trimmed texture is respected
 *      calculateVertices()                                                         // calculates worldTransform * vertices, store it in vertexData
 *      containsPoint(point)                                                        // Tests if a point is inside this sprite
 *      destroy(options)                                                            // Destroys this sprite and optionally its texture and children
 *      getBounds(skipUpdate, rect)                                                 // Destroys this sprite and optionally its texture and children
 *      getChildAt(index)                                                           // Returns the child at the specified index
 *      getChildIndex(child)                                                        // Returns the index position of a child DisplayObject instance
 *      getLocalBounds(rect)                                                        // Gets the local bounds of the sprite object.
 *      removeChild(child)                                                          // Removes one or more children from the container.
 *      removeChildAt(index)                                                        // Removes a child from the specified index position.
 *      removeChildren(beginIndex, endIndex)                                        // Removes all children from this container that are within the begin and end indexes.
 *      renderCanvas(renderer)                                                      // Renders the object using the Canvas renderer
 *      renderWebGL(renderer)                                                       // Renders the object using the WebGL renderer
 *      setChildIndex(child, index)                                                 // Changes the position of an existing child in the display object container
 *      setParent(container)                                                        // Set the parent Container of this DisplayObject
 *      setTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY)  // Convenience function to set the position, scale, skew and pivot at once.
 *      swapChildren(child, child2)                                                 // Swaps the position of 2 Display Objects within this container.
 *      toGlobal(position, point, skipUpdate)                                       // Calculates the global position of the display object
 *      toLoca(position, from, point, skipUpdate)l                                  // Calculates the local position of the display object relative to another point
 *      updateTransform()                                                           // Updates the transform on all children of this container for rendering
 * 
 * -- EVENTS
 *      sprite.on('added', (container)=>{console.log('added', container)})
 *      sprite.on('click', (event)=>{console.log('click', event)})
 *      sprite.on('mousedown', (event)=>{console.log('mousedown', event)})
 *      sprite.on('mousemove', (event)=>{console.log('mousemove', event)})
 *      sprite.on('mouseout', (event)=>{console.log('mouseout', event)})
 *      sprite.on('mouseover', (event)=>{console.log('mouseover', event)})
 *      sprite.on('mouseup', (event)=>{console.log('mouseup', event)})
 *      sprite.on('mouseupoutside', (event)=>{console.log('mouseupoutside', event)})
 *      sprite.on('pointercancel', (event)=>{console.log('pointercancel', event)})
 *      sprite.on('pointerdown', (event)=>{console.log('pointerdown', event)})
 *      sprite.on('pointermove', (event)=>{console.log('pointermove', event)})
 *      sprite.on('pointerout', (event)=>{console.log('pointerout', event)})
 *      sprite.on('pointerover', (event)=>{console.log('pointerover', event)})
 *      sprite.on('pointertap', (event)=>{console.log('pointertap', event)})
 *      sprite.on('pointerup', (event)=>{console.log('pointerup', event)})
 *      sprite.on('pointerupoutside', (event)=>{console.log('pointerupoutside', event)})
 *      sprite.on('removed', (container)=>{console.log('removed', container)})
 *      sprite.on('rightclick', (event)=>{console.log('rightclick', event)})
 *      sprite.on('rightdown', (event)=>{console.log('rightdown', event)})
 *      sprite.on('rightup', (event)=>{console.log('rightup', event)})
 *      sprite.on('rightupoutside', (event)=>{console.log('rightupoutside', event)})
 *      sprite.on('tap', (event)=>{console.log('tap', event)})
 *      sprite.on('touchcancel', (event)=>{console.log('touchcancel', event)})
 *      sprite.on('touchend', (event)=>{console.log('touchend', event)})
 *      sprite.on('touchendoutside', (event)=>{console.log('touchendoutside', event)})
 *      sprite.on('touchmove', (event)=>{console.log('touchmove', event)})
 *      sprite.on('touchstart', (event)=>{console.log('touchstart', event)})
 */