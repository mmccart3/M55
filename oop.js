// **********************************
// Code Nation - wearecodenation.com
// Week 3 - Object-orientated Programming (OOP)
// **********************************

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
console.log(jim.name);

//
// Example 3 - Car class challenge
//

class Car{
    constructor(regnum){
        this._regnum = regnum; 
        this._hours = 0; 
        this._charge = 0.00;
    }
    get regnum(){
        return this._regnum; 
    }
    get hours(){
        return this._hours;
    }
    get charge(){
        return this._charge; 
    }
    increaseHours(){ 
        this._hours++;
        this._charge += 1.50; 
    }
}
const pay = (reg, hr) => {
    const car = new Car(reg);
    for (i = 0; i < hr; i++){
        car.increaseHours(); 
    }
    return `You need to pay £${car.charge} for ${car.hours} hours.`; 
}
console.log(pay("M7 CAR", 5));

//
// Example 4 - Subclasses
//

class Animal{
    constructor(name){
        this._name = name;
        this._hunger = 100;
        this._thirst = 100;
    }
    get name(){
        return this._name;
    }
    get hunger(){
        return this._hunger;
    }
    get thirst(){
        return this._thirst;
    }
    eat(){
        this._hunger--;
    }
    drink(){
        this._thirst--;
    }
}

class Bunny extends Animal {
    constructor(name, lovesCarrot){
        super(name);
        this._lovesCarrot = lovesCarrot;
    }
    get lovesCarrots(){
        return this._lovesCarrot;
    }
}

const bonnie = new Bunny("bonnie", true);