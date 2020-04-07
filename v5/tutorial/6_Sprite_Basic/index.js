// Instantiate Application
const app = new PIXI.Application()
document.body.appendChild(app.view);

// Stage Sprite
var bunny = PIXI.Sprite.from('./bunny.png')
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

/*
// Create
    let sprite = PIXI.Sprite.from('assets/image.png');

// More efficiently
    PIXI.Loader.shared.add("assets/spritesheet.json").load(setup);
    function setup() {
        let sheet = PIXI.Loader.shared.resources["assets/spritesheet.json"].spritesheet;
        let sprite = new PIXI.Sprite(sheet.textures["image.png"]);
        ...
    }

PIXI.Sprite = {
    // INHERIT
    ...PIXI.Container,

    // PROPERTIES
    _cachedTint,    // Cached tint value so we can tell when the tint is changed. Value is used for 2d CanvasRenderer.
    _height,        // The height of the sprite (this is initially set by the texture)
    _tintedCanvas,  // Cached tinted texture.
    _width,         // The width of the sprite (this is initially set by the texture)
    anchor,         // The anchor sets the origin point of the texture. The default value is taken from the Texture and passed to the constructor. The default is (0,0), this means the text's origin is the top left. Setting the anchor to (1,1) would mean the text's origin point will be the bottom right corner
    blendMode,      // The blend mode to be applied to the sprite. Apply a value of PIXI.BLEND_MODES.NORMAL to reset the blend mode.
    height,         // The height of the sprite, setting this will actually modify the scale to achieve the value set.
    isSprite,       // used to fast check if a sprite is.. a sprite!
    pluginName,     // Plugin that is responsible for rendering this element. Allows to customize the rendering process without overriding '_render' & '_renderCanvas' methods.
    roundPixels,    // If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation. Advantages can include sharper image quality (like text) and faster rendering on canvas. The main disadvantage is movement of objects may appear less smooth. To set the global default, change PIXI.settings.ROUND_PIXELS
    texture,        // The texture that the sprite is using
    tint,           // The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.
    width,   // The width of the sprite, setting this will actually modify the scale to achieve the value set

    // METHODS
    from(source, _options), // Helper function that creates a new sprite based on the source you provide. The source can be - frame id, image url, video url, canvas element, video element, base texture
    _calculateBounds(), // Updates the bounds of the sprite.
    _onTextureUpdate(), // When the texture is updated, this event will fire to update the scale and frame
    _render(renderer),  // Renders the object using the WebGL renderer
    calculateTrimmedVertices(), // Calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData This is used to ensure that the true width and height of a trimmed texture is respected
    calculateVertices(),    // Calculates worldTransform * vertices, store it in vertexData
    containsPoint(point),    // Tests if a point is inside this sprite
    destroy(_options),  // Destroys this sprite and optionally its texture and children
    getLocalBounds(_rect),   // Gets the local bounds of the sprite object.
}
*/
