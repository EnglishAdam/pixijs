const app = new PIXI.Application();
document.body.appendChild(app.view);

/**
 * Example:
 * Loading a bunny image and naming it bunny,
 */
PIXI.loader.add('bunny', './bunny.png').load(function(loader, resources) {

    // Callback passed to load method, which passes loader and current resources through.
    // Create sprite.
    var bunny = new PIXI.Sprite(resources.bunny.texture);
    // ...
});

/**
 * -- USES
 * --- Get Loader:
 *      PIXI.loader({options})                       // User via PIXI class.
 *      const loader = PIXI.loader;                  // OR, PixiJS exposes a premade instance for you to use.
 *      const loader = new PIXI.loaders.Loader();    // OR, you can also create your own if you want
 * 
 * -- Load Resources
 * --- Individually
 *      loader.add('bunny', 'data/bunny.png')
 *      loader.add('bunny2', 'data/bunny2.png')
 *      loader.add('bunny3', 'data/bunny3.png')
 * 
 * --- Chainable
 *      loader
 *      .add('bunny4', 'data/bunny4.png')
 *      .add('bunny5', 'data/bunny5.png')
 *      .add('bunny6', 'data/bunny6.png')
 * 
 * -- OPTIONS
 *      PIXI.loaders.Loader(baseUrl, concurrency)
 *           - baseUrl      // string  // default - ""  // optional - The base url for all resources loaded by this loader.
 *           - concurrency  // number  // default - 10  // optional - The number of resources to load concurrently.
 * 
 * -- PROPERTIES
 *      //
 * 
 * -- STATIC METHODS
 *      PIXI.loaders.Loader.addPixiMiddleware(function)     // Adds a default middleware to the PixiJS loader.
 * 
 * -- METHODS
 *      Loader.destroy(removeView)              // Destroy the loader, removes references.
 *      Loader.add(keyName, resourceUrl)        // Chainable, adds resource to loader.
 *      Loader.pre(cachingMiddlewareFn)         // Runs before loading each resource
 *      Loader.use(parsingMiddlewareFn)         // Runs after loading each resource, good for organising resources like spritesheet etc...
 *      Loader.load((loader, resources)=>{})    // loads the queue of resources, and calls the passed in callback called once all resources have loaded.
 *           - loader       // The loader
 *           - resources    // object - resources[keyName]{text, url, error, data, ...other}
 *
 * -- EVENTS
 *      loader.onProgress.add(() => {});        // called once per loaded/errored file
 *      loader.onError.add(() => {});           // called once per errored file
 *      loader.onLoad.add(() => {});            // called once per loaded file
 *      loader.onComplete.add(() => {});        // called once when the queued resources all load.
 */