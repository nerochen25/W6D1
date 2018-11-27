console.log("Webpack is working!");

const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
const Asteroid = require("./asteroid.js");


window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function(){
  let canvas = document.getElementById("game-canvas");
  let context = canvas.getContext("2d");
  const mo = new MovingObject(
    { pos: [10, 50], vel: [10, 10], radius: 5, color: "#2AFF2E"}
  );
  mo.draw(context);
  const a = new Asteroid(
    { pos: [50, 80], vel: [10, 10], radius: 5, color: "black"}
  );
  a.draw(context);
  
}); 
