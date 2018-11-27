function Game() {
  const DIM_X;
  const DIM_Y;
  const NUM_ASTEROIDS;
  
  addAsteroids();
}

Game.prototype.addAsteroids = function() {
  this.asteroids = [];
  for (var i = 0; i < 10; i++) {
    let a = new Asteroid({
      pos: [getRandomInt(500), getRandomInt(1000)],
      vel: [1,1],
      radius: 5,
      color: randomColor()
      })
      this.asteroids.push(a);
  }
  return asteroids;
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect();
  for (var i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(ctx);
  }
}

Game.prototype.move = function() {
  for (var i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
  }
}