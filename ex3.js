let myName = "Mark"

function rename() {
    let myName= "Joseph"
    console.log(myName)
    if (myName=="Joseph") {
        let myName = "Anthony"
        console.log(myName)
    }
    console.log(myName)
}

function anotherFunction() {
    console.log(myName)
}

rename()
anotherFunction()
console.log(myName)