/**
 * Playerlication call for simulation
 * @class Player
 */
function Player() {
    this.a = 'a';
}

Player.prototype.update = function ready() {
    console.log('playerUpdate')
}

module.exports = Player