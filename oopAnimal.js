class Animal {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.hunger = 0;
    }
    giveDrink () {
        this.health += 5;
        return this;
    }
    feed() {
        this.health += 5;
        this.hunger += 10;
        console.log(`${this.name}'s heath is ${this.health}`)
        return this;
    }
    stats() {
        return console.table({
            name:this.name,
            health: this.health
        })
    }
}

class Dog extends Animal {
    constructor(name, happinessLevel) {
        super (name, happinessLevel)
        this.happinessLevel = happinessLevel
    }

    playBall() {
        this.health += 10;
        this.hunger -= 10;
        console.log(`${this.name} is now happier`);
        return this;
    }

    walkies() {
        this.health =+10
        this.happinessLevel +=20
        console.log(`${this.name} is very happy to go for a walk`)
        return this;
    }
}

class Cat extends Animal {
    constructor(name,contentLevel) {
        super(name, contentLevel);
        this.contentLevel = contentLevel;
    }

    playWool () {
        this.health += 10;
        this.hunger -= 10;
        this.contentLevel +=10;
        console.log(`${this.name} is now very content`)
        return this;
    }

    nap() {
        this.health += 10;
        this.contentLevel +=10;
        console.log(`$(this.name) is taking a lovely nap and their contentness level is ${this.content}`)
    }
}

let myDog = new Dog("Cuthbert", 15);
myDog.walkies().walkies().playBall()
console.log(myDog);