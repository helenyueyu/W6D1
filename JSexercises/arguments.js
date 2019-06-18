// function sum(...args) {
//   let sum = 0
//   for(let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum;
// }

// function sumtwo() {
//   let sum = 0
//   for (let i = 0; i < arguments.length; i ++) {
//     sum += arguments[i];
//   }
//   return sum
// }

Function.prototype.myBind = function() {
  let that = this;
  let context = Array.from(arguments)[0]
  let bindArgs = Array.from(arguments).slice(1)
  return function() {
    let callArgs = Array.from(arguments);
    let args = bindArgs.concat(callArgs);
    return that.apply(context, args);
  }
}

Function.prototype.myBindTwo = function (context, ...bindArgs) {
  let that = this;
  return function (...callArgs) {
    let args = bindArgs.concat(callArgs);
    return that.apply(context, args);
  }
}

function curriedSum(numArgs) {
  let numbers = []
  return function _curriedSum(num) {
    numbers.push(num);
    // console.log(numbers);
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, el) => acc + el);
    } else {
      return _curriedSum;
    }
  }
}

const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) {
  let args = [];
  let that = this;
  return function funkyCurry(el) {
    args.push(el);
    if (args.length === numArgs) {
      return that.apply(null, args)
    } else {
      return funkyCurry
    }
  }
}

function dumb(n1, n2) {
  this.one = n1
  this.two = n2
  return this.one + this.two
}

let x = dumb.curry(2)
console.log(x(5)(2))
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// // markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// console.log(markov.says.myBind(pavlov, "meow", "Kush")());
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// console.log(markov.says.myBind(pavlov)("meow", "a tree"));
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// console.log(markov.says.myBind(pavlov, "meow")("Markov"));
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// console.log(notMarkovSays("meow", "me"));
// // Pavlov says meow to me!
// // true