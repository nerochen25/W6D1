function sum() {
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function sum2(...args) {
  let sum = 0;
  for (var i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

Function.prototype.myBind = function (ctx, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};


Function.prototype.myBind2 = function (ctx) {
  let fn = this;
  let bindArgs = Array.from(arguments).slice(1);
  return function _boundFn() {
    let callArgs = Array.from(arguments);
    return fn.apply(ctx, bindArgs.concat(callArgs));
  };
};

function curriedSum(numArgs) {
  let numbers = [];
  return function _curriedSum (num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0;
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    } else {
      return _curriedSum; 
    }
  };
}

Function.prototype.curry = function (numArgs) {
  let fn = this;
  let newArray = [];
  return function _curry (num) {
    newArray.push(num);
    if (newArray.length === numArgs) {
      return fn(...newArray);
    } else {
      return _curry;
    }
  };
};

Function.prototype.curry = function (numArgs) {
  let fn = this;
  let newArray = [];
  return function _curry (num) {
    newArray.push(num);
    if (newArray.length === numArgs) {
      // return fn(...newArray);
      return fn.apply(null, newArray);
    } else {
      return _curry;
    }
  };
};









