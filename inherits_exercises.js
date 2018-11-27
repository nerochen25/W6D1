Function.prototype.inherits = function (child) {
  function Surrogate() {}
  Surrogate.prototype = this.prototype;
  child.prototype = new Surrogate();
  child.prototype.constructor = child;
  
};


Function.prototype.inherits2 = function(child) {
  child.prototype = Object.create(this.prototype);
  child.prototype.constructor = child;
};
