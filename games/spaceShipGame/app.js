const App = require('./src/APP.js');

// When DOM ready
function ready() {
    // Start App
    var app = new App();
    app.ready();
}

document.addEventListener('DOMContentLoaded', ready, false);