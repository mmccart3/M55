//
// Example 2 - simple class
//

class Bunny{
    constructor(name){
        this._name = name;
        this._hops = 0;
    }
    get name(){
        return this._name;
    }
    get hops(){
        return this._hops;
    }
    increaseHops(){
        this._hops++;
    }
}

const jim = new Bunny("Rosie");
jim.increaseHops();
jim.increaseHops();
console.log(jim.name);
console.log(jim.hops);
