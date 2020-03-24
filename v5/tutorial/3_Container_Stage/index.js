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
 * - CONTAINER
 * -- USES
 * --- Create Container:
 *      let container = new PIXI.Container();
 *      container.addChild(sprite, sprite2);
 */