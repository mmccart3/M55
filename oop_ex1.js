//
// Example 1 - simple object
//

let rosie = {
    _name: "Rosie",
    _hops: 0,
  
    get name() {
      return this._name;
    },
  
    get hops() {
      return this._hops;
    },
  
    increaseHops() {
      this._hops++;
    }
}
rosie.increaseHops()
rosie.increaseHops()
rosie.increaseHops()
console.log(rosie.name)
console.log(rosie.hops)
console.log(rosie)