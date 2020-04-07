const app = new PIXI.Application();
document.body.appendChild(app.view);

/**
 * Example:
 * Loading a bunny image and naming it bunny,
 */
const loader = new PIXI.Loader()
loader.add('bunny', './bunny.png').load(function(loader, resources) {
    // Create sprite using callback passed to load method, which passes loader and current resources through.
    var bunny = new PIXI.Sprite(resources.bunny.texture);

    // Add bunny resource to application
    app.stage.addChild(bunny);

    // ...
});

// Use the signals interface to add the following events
loader.onProgress.add((...args) => console.log('onProgress', ...args))  // called once per loaded/errored file
loader.onError.add((...args) => console.log('onError', ...args))        // called once per errored file
loader.onLoad.add((...args) => console.log('onLoad', ...args))          // called once per loaded file
loader.onComplete.add((...args) => console.log('onComplete', ...args))  // called once when the queued resources all load.

/**
 * -- USES
 * --- Get Loader:
 *      PIXI.Loader({options})                  // User via PIXI class.
 *      const loader = PIXI.Loader.shared;      // OR, PixiJS exposes a premade instance for you to use.
 *      const loader = new PIXI.Loader();       // OR, you can also create your own if you want
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
 * --- Middleware
 *      loader.pre(cachingMiddleware) // add a middleware that runs for each resource, *before* loading that resource.
 *      loader.use(parsingMiddleware) // add a middleware that runs for each resource, *after* loading that resource.
 * 
 * --- Callback
 *      loader.load((loader, resources) => { ... }) // The `load` method loads the queue of resources, and calls the passed in callback called once all resources have loaded.
 * 
 * -- OPTIONS
 *      PIXI.Loaders.Loader(baseUrl, concurrency)
 *           - baseUrl      // string  // default - ""  // optional - The base url for all resources loaded by this loader.
 *           - concurrency  // number  // default - 10  // optional - The number of resources to load concurrently.
 * 
 * -- STATIC PROPERTIES
 *      PIXI.Loader.shared      // A premade instance of the loader that can be used to load resources.
 * 
 * -- PROPERTIES
 *      loader.onComplete   // PIXI.Loader.ILoaderSignal    // Dispatched when completely loaded all resources.
 *      loader.onError      // PIXI.Loader.ILoaderSignal    // Dispatched once per errored resource.
 *      loader.onLoad       // PIXI.Loader.ILoaderSignal    // Dispatched once per loaded resource.
 *      loader.onProgress   // PIXI.Loader.ILoaderSignal    // Dispatched once per loaded or errored resource.
 *      loader.onStart      // PIXI.Loader.ILoaderSignal    // Dispatched when the loader begins to loading process.
 * 
 * -- SIGNAL
 *      loader.onProgress.add(() => {});        // called once per loaded/errored file
 * 
 * -- STATIC METHODS
 *      PIXI.Loader.registerPlugin(plugin)      // Adds a Loader plugin for the global shared loader and all new Loader instances created.
 * 
 * -- METHODS
 *      loader.destroy()              // Destroy the loader, removes references.
 *
 * -- TYPE DEFINITIONS
 *      PIXI.Loader.ICallbackID     // Callback id returned when signal is added to allow for detachment
 *      PIXI.Loader.ILoaderSignal
 *          add     //  ISignalCallback     // Register callback
 *          once    //  ISignalCallback     // Register oneshot callback
 *          detach  //  ISignalDetach       // Detach specific callback by ID
 *      PIXI.Loader.ISignalCallback(callback, _context)) // The callback function, returns a ICallbackID
 *          callback    //  function   // Callback function
 *          _context    //  object     // Context
 *      PIXI.Loader.ISignalDetach(id)
 *      PIXI.Loader.loaderMiddleware(resource, next)
 */