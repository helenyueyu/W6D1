Function.prototype.inherits = function(Parent) {
  function Surrogate() {}; 
  Surrogate.prototype = Parent.prototype; 
  this.prototype = new Surrogate(); 
  this.prototype.constructor = this;  
}

function MovingObject() {
  // this.prototype.sayObj = function() {
  //   return "I am an object!";
  // }
}

class MovingObject2 {
  sayObj2() {
    return "I am an object!!!"
  }
}


MovingObject.prototype.sayObj = function() {
  return "I am an object!"
}

function Ship() {

}

Ship.inherits(MovingObject); 

Ship.prototype.sayShip = function() {
  return "I am a ship!";
}


Asteroid.inherits(MovingObject); 

function Asteroid() {

}

Asteroid.prototype.sayAsteroid = function() {
  return "I am an asteroid!"
}

let obj = new MovingObject(); 
let ship = new Ship(); 
let asteroid = new Asteroid(); 

console.log(obj.sayObj()); 
console.log(ship.sayShip()); 
console.log(asteroid.sayAsteroid()); 

// console.log(obj.sayShip()); 
console.log(ship.sayObj()); 
// console.log(asteroid.sayObj()); 
