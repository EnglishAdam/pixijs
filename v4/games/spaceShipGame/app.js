const App = require('./src/App/App.js');

// When DOM ready
function loaded() {
    console.log('loaded')
    // Start App
    var app = new App();
    // app.ready();
}

document.addEventListener('DOMContentLoaded', loaded, false);