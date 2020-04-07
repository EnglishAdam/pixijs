/**
 * WHAT IS A CONTAINER?
 * A Container represents a collection of display objects.
 * It is the base class of all display objects that act as a container for other objects.
 * There is a root container called the 'Stage' of a PIXI application.
 * An example of creating a container:
 * 
 *      let container = new PIXI.Container(); // Create a named container.
 *      container.addChild(sprite); // Add a resource as a child to it
 * 
 * You can have several named containers.
 */

// Instantiate Application
const app = new PIXI.Application()
document.body.appendChild(app.view);

// create a new Sprite from an image path
var bunny = PIXI.Sprite.fromImage('./bunny.png')

/**
 * WHAT IS THE STAGE?
 * The stage is the root container used by PIXI for displaying resources in your application.
 * It is a container (Unique in that it is the root container)
 */

// Add bunny resource to application
app.stage.addChild(bunny);

// Alt
// app.stage.addChild(PIXI.Sprite.fromImage('../../required/assets/bunny.png'));

/**
PIXI.Container = {
  ...PIXI.DisplayObject,

  // Properties
  children,                   // The array of children of this container.
  height,                     // The height of the Container, setting this will actually modify the scale to achieve the value set
  interactiveChildren,        // Determines if the children to the displayObject can be clicked/touched Setting this to false allows PixiJS to bypass a recursive hitTest function
  sortableChildren,           // If set to true, the container will sort its children by zIndex value when updateTransform() is called, or manually if sortChildren() is called. This actually changes the order of elements in the array, so should be treated as a basic solution that is not performant compared to other solutions, such as @link https://github.com/pixijs/pixi-display Also be aware of that this may not work nicely with the addChildAt() function, as the zIndex sorting may cause the child to automatically sorted to another position.
  sortDirty,                  // Should children be sorted by zIndex at the next updateTransform call. Will get automatically set to true if a new child is added, or if a child's zIndex changes.
  width,                      // The width of the Container, setting this will actually modify the scale to achieve the value set

  // Methods
  _calculateBounds(),                         // Recalculates the bounds of the object. Override this to calculate the bounds of the specific object (not including children).
  _render(renderer),                          // To be overridden by the subclasses.
  _renderCanvas(renderer),                    // To be overridden by the subclass
  addChild(children),                         // Adds one or more children to the container.
  addChildAt(child, index),                   // Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
  calculateBounds(),                          // Recalculates the bounds of the container.
  containerUpdateTransform(),                 // Container default updateTransform, does update children of container. Will crash if there's no parent element.
  destroy(_options),                          // Removes all internal references and listeners as well as removes children from the display list. Do not use a Container after calling destroy.
  getChildAt(index),                          // Returns the child at the specified index
  getChildByName(name),                       // Returns the display object in the container.
  getChildIndex(child),                       // Returns the index position of a child DisplayObject instance
  getLocalBounds(_rect, _skipChildrenUpdate), // Retrieves the local bounds of the displayObject as a rectangle object.
  onChildrenChange(),                         // Overridable method that can be used by Container subclasses whenever the children array is modified
  removeChild(children),                      // Removes one or more children from the container.
  removeChildAt(index),                       // Removes a child from the specified index position.
  removeChildren(_beginIndex, _endIndex),     // Removes all children from this container that are within the begin and end indexes.
  render(renderer),                           // Renders the object using the WebGL renderer
  renderAdvanced(renderer),                   // Render the object using the WebGL renderer and advanced features.
  renderCanvas(renderer),                     // Renders the object using the Canvas renderer
  renderCanvas(renderer),                     // Renders the object using the Canvas renderer
  setChildIndex(child, index),                // Changes the position of an existing child in the display object container
  sortChildren(),                             // Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
  swapChildren(child, child2),                // Swaps the position of 2 Display Objects within this container.
  updateTransform(),                          // Updates the transform on all children of this container for rendering
}

PIXI.DisplayObject = {
  ...PIXI.utils.EventEmitter,

  // Properties
  _accessibleActive,          // ??
  _accessibleDiv,             // ??
  _bounds,                    // The bounds object, this is used to calculate and store the bounds of the displayObject.
  _boundsID,                  // Flags the cached bounds as dirty.
  _boundsRect,                // Cache of this display-object's bounds-rectangle.
  _destroyed,                 // If the object has been destroyed via destroy(). If true, it should not be used.
  _enabledFilters,            // Currently enabled filters
  _lastSortedIndex,           // Which index in the children array the display component was before the previous zIndex sort. Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
  _localBounds,               // Local bounds object, swapped with _bounds when using getLocalBounds().
  _localBoundsRect,           // Cache of this display-object's local-bounds rectangle.
  _mask,                      // The original, cached mask of the object.
  _tempDisplayObjectParent,   // ??
  _zIndex,                    // The zIndex of the displayObject. A higher value will mean it will be rendered on top of other displayObjects within the same container.
  accessible,                 // Flag for if the object is accessible. If true AccessibilityManager will overlay a shadow div with attributes set
  accessibleChildren,         // Setting to false will prevent any children inside this container to be accessible. Defaults to true.
  accessibleHint,             // Sets the aria-label attribute of the shadow div
  accessiblePointerEvents,    // Specify the pointer-events the accessible div will use Defaults to auto.
  accessibleTitle,            // Sets the title attribute of the shadow div If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
  accessibleType,             // Specify the type of div the accessible layer is. Screen readers treat the element differently depending on this type. Defaults to button.
  alpha,                      // The opacity of the object.
  angle,                      // The angle of the object in degrees. 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
  buttonMode,                 // If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive Setting this changes the 'cursor' property to 'pointer'.
  cacheAsBitmap,              // Set this to true if you want this display object to be cached as a bitmap. This basically takes a snap shot of the display object as it is at that moment. It can provide a performance benefit for complex static displayObjects. To remove simply set this property to false. IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
  cursor,                     // This defines what cursor mode is used when the mouse cursor is hovered over the displayObject.
  filterArea,                 // The area the filter is applied to. This is used as more of an optimization rather than figuring out the dimensions of the displayObject each frame you can set this rectangle. Also works as an interaction mask.
  filters,                    // Sets the filters for the displayObject. IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer. To remove filters simply set this property to 'null'.
  hitArea,                    // Interaction shape. Children will be hit first, then this shape will be checked. Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
  interactive,                // Enable interaction events for the DisplayObject. Touch, pointer and mouse events will not be emitted unless interactive is set to true.
  isMask,                     // Does any other displayObject use this object as a mask?
  isSprite,                   // used to fast check if a sprite is.. a sprite!
  localTransform,             // Current transform of the object based on local factors: position, scale, other stuff.
  mask,                       // Sets a mask for the displayObject. A mask is an object that limits the visibility of an object to the shape of the mask applied to it. In PixiJS a regular mask must be a PIXI.Graphics or a PIXI.Sprite object. This allows for much faster masking in canvas as it utilities shape clipping. To remove a mask, set this property to null. For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask. At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
  name,                       // The instance name of the object.
  parent,                     // The display object container that contains this display object.
  pivot,                      // The pivot point of the displayObject that it rotates around. Assignment by value since pixi-v4.
  position,                   // The coordinate of the object relative to the local coordinates of the parent. Assignment by value since pixi-v4.
  renderable,                 // Can this object be rendered, if false the object will not be drawn but the updateTransform methods will still be called. Only affects recursive calls from parent. You can ask for bounds manually.
  rotation,                   // The rotation of the object in radians. 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
  scale,                      // The scale factor of the object. Assignment by value since pixi-v4.
  skew,                       // The skew factor for the object in radians. Assignment by value since pixi-v4.
  transform,                  // World transform and local transform of this object. This will become read-only later, please do not assign anything there unless you know what are you doing.
  visible,                    // The visibility of the object. If false the object will not be drawn, and the updateTransform function will not be called. Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
  worldAlpha,                 // The multiplied alpha of the displayObject.
  worldTransform,             // Current transform of the object based on world (parent) factors.
  worldVisible,               // Indicates if the object is globally visible.
  x,                          // The position of the displayObject on the x axis relative to the local coordinates of the parent. An alias to position.x
  y,                          // The position of the displayObject on the y axis relative to the local coordinates of the parent. An alias to position.y
  zIndex                      // The zIndex of the displayObject. If a container has the sortableChildren property set to true, children will be automatically sorted by zIndex value; a higher value will mean it will be moved towards the end of the array, and thus rendered on top of other displayObjects within the same container.
  
  // Methods
  PIXI.DisplayObject.mixin(source),                                                     // Mixes all enumerable properties and methods from a source object to DisplayObject.
  _recursivePostUpdateTransform(),                                                      // Recursively updates transform of all objects from the root to this one internal function for toLocal()
  destroy(),                                                                            // Base destroy method for generic display objects. This will automatically remove the display object from its parent Container as well as remove all current event listeners and internal references. Do not use a DisplayObject after calling destroy().
  displayObjectUpdateTransform(),                                                       // DisplayObject default updateTransform, does not update children of container. Will crash if there's no parent element.
  getBounds(_skipUpdate, _rect),                                                        // Retrieves the bounds of the displayObject as a rectangle object.
  getGlobalPosition(_point, _skipUpdate),                                               // Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
  getLocalBounds(_rect),                                                                // Retrieves the local bounds of the displayObject as a rectangle object.
  setParent(container),                                                                 // Set the parent Container of this DisplayObject.
  setTransform(_x, _y, _scaleX, _scaleY, _rotation, _skewX, _skewY, _pivotX, _pivotY),  // Convenience function to set the position, scale, skew and pivot at once.
  toGlobal(position, _point, _skipUpdate),                                              // Calculates the global position of the display object.
  toLocal(position, _from, _point, _skipUpdate),                                        // Calculates the local position of the display object relative to another point.
  updateTransform()                                                                     // Updates the object transform for rendering. TODO - Optimization pass!

  // Events
  added(container),         // Fired when this DisplayObject is added to a Container.
  click(event),             // Fired when a pointer device button (usually a mouse left-button) is pressed and released on the display object. DisplayObject's interactive property must be set to true to fire event.
  mousedown(event),         // Fired when a pointer device button (usually a mouse left-button) is pressed on the display. object. DisplayObject's interactive property must be set to true to fire event.
  mousemove(event),         // Fired when a pointer device (usually a mouse) is moved while over the display object. DisplayObject's interactive property must be set to true to fire event.
  mouseout(event),          // Fired when a pointer device (usually a mouse) is moved off the display object. DisplayObject's interactive property must be set to true to fire event.
  mouseover(event),         // Fired when a pointer device (usually a mouse) is moved onto the display object. DisplayObject's interactive property must be set to true to fire event.
  mouseup(event),           // Fired when a pointer device button (usually a mouse left-button) is released over the display object. DisplayObject's interactive property must be set to true to fire event.
  mouseupoutside(event),    // Fired when a pointer device button (usually a mouse left-button) is released outside the display object that initially registered a mousedown. DisplayObject's interactive property must be set to true to fire event.
  pointercancel(event),     // Fired when the operating system cancels a pointer event. DisplayObject's interactive property must be set to true to fire event.
  pointerdown(event),       // Fired when a pointer device button is pressed on the display object. DisplayObject's interactive property must be set to true to fire event.
  pointermove(event),       // Fired when a pointer device is moved while over the display object. DisplayObject's interactive property must be set to true to fire event.
  pointerout(event),        // Fired when a pointer device is moved off the display object. DisplayObject's interactive property must be set to true to fire event.
  pointerover(event),       // Fired when a pointer device is moved onto the display object. DisplayObject's interactive property must be set to true to fire event.
  pointertap(event),        // Fired when a pointer device button is pressed and released on the display object. DisplayObject's interactive property must be set to true to fire event.
  pointerup(event),         // Fired when a pointer device button is released over the display object. DisplayObject's interactive property must be set to true to fire event.
  pointerupoutside(event),  // Fired when a pointer device button is released outside the display object that initially registered a pointerdown. DisplayObject's interactive property must be set to true to fire event.
  removed(container),       // Fired when this DisplayObject is removed from a Container.
  rightclick(event),        // Fired when a pointer device secondary button (usually a mouse right-button) is pressed and released on the display object. DisplayObject's interactive property must be set to true to fire event.
  rightdown(event),         // Fired when a pointer device secondary button (usually a mouse right-button) is pressed on the display object. DisplayObject's interactive property must be set to true to fire event.
  rightup(event),           // Fired when a pointer device secondary button (usually a mouse right-button) is released over the display object. DisplayObject's interactive property must be set to true to fire event.
  rightupoutside(event),    // Fired when a pointer device secondary button (usually a mouse right-button) is released outside the display object that initially registered a rightdown. DisplayObject's interactive property must be set to true to fire event.
  tap,                      // Fired when a touch point is placed and removed from the display object. DisplayObject's interactive property must be set to true to fire event.
  touchcancel(event),       // Fired when the operating system cancels a touch. DisplayObject's interactive property must be set to true to fire event.
  touchend(event),          // Fired when a touch point is removed from the display object. DisplayObject's interactive property must be set to true to fire event.
  touchendoutside(event),   // Fired when a touch point is removed outside of the display object that initially registered a touchstart. DisplayObject's interactive property must be set to true to fire event.
  touchmove(event),         // Fired when a touch point is moved along the display object. DisplayObject's interactive property must be set to true to fire event.
  touchstart(event)        // Fired when a touch point is placed on the display object. DisplayObject's interactive property must be set to true to fire event.
}
*/