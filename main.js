// #1
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(Object.entries(person3))

// #2
class Human{
    constructor(name, age, gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }

    printInfo() {
        return `Name: ${this.name} \n Age: ${this.age} \n Gender: ${this.gender}`
    }
}
let mike = new Human('Mike', 40, 'Male');

console.log(mike.printInfo())

let nancy = new Human('Nancy', 5, 'Female');
console.log(nancy.printInfo())

let count_up = ( function() {
    count_age = nancy.age + 1
    console.log('Happy Birthday!')
    return function () {return count_age++}
}) ()

console.log(count_up())
console.log('Happy Birthday!')
console.log(count_up())
console.log('Happy Birthday!')
console.log(count_up())

// #3
const words = (phrase) => {
    return new Promise( (resolve,reject) => {
        if(phrase.length >= 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

words('jackerooing')
.then( (result) => {
    console.log(`Big word`)
})
.catch( (error) => {
    console.log(`Small word`)
})

