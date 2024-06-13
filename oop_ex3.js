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
