const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");


function Asteroid(options) {
  MovingObject.call(this, options);
  
}

Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid;
