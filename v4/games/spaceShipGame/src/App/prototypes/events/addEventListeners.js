module.exports = function addEventListeners() {
    document.addEventListener('keydown', (event) => {
        this.ctrl[event.key] = true;
    }, false);

    document.addEventListener('keyup', (event) => {
        this.ctrl[event.key] = false;
    }, false);

    document.addEventListener('mousedown', (event) => {
        this.ctrl.lmb = true;
    }, false);

    document.addEventListener('mouseup', (event) => {
        this.ctrl.lmb = false;
    }, false);
}