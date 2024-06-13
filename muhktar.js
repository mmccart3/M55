class Animal {
    constructor (name){
        this.name = name;
        this .health = 100;
        this.hunger = 0;
 
    }
    giveDrink () {
        this.health += 5;
        return this;
    }
    feed (){
        this.health += 5;
        this.hunger +=- 10;
        console.log (`${this.name} 'is health is ${this.health}`)
        return this;
    
    }
    stats (){
        return console.table ({
            name:this.name,
            health:this.health
        })
    }
}
class Dog extends Animal {
    constructor(name, hapinessLevel){
        super (name, hapinessLevel)
        this.hapinessLevel = hapinessLevel
    }
    playBall() {
        this.health += 10;
        this.hunger -= 10;
    
        
        console.log(`${this.name} is now happier`)
        return this;
    }
    
    walkies(){
        this.walkies += 10
        this.hapinessLevel+=20
        
        console.log(`${this.name}is very happy to go for a walk`)
        return this;
    }
}
 
class Cat extends  Animal {
    constructor(name,contentLevel){
        super( name.contentLevel);
        this.contentLevel=contentLevel
    }
    playWool (){
        this.health += 10;
        this.hunger -=10;
        console.log (`${this.name}is very happy to go for a walk`)
        return this;
    }
 
    nap() {
        this.health += 10;
        this.contentLevel += 10;
        
        console.log (`$(this.name) is taking a lovely nap and their cuntentness level is ${this.content}`)
    }
    
    }
 
let myDog = new Dog("cuthbert",15);
myDog.walkies().playBall().walkies()
console.log(myDog);