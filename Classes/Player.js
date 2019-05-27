var shortID = require('shortid');
var vector2 = require('./Vector2');
module.exports= class Player{
    constructor() {
        this.username = '';
        this.id = shortID.generate();
        this.position = new vector2();
        this.rotation= new Number(0);
    }
}