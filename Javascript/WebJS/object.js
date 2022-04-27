//1. Create a dog object that has the properties height, breed, weight, 
// and a method called bark that logs "Woof" to the console.

//creating dog properties
const dog = {
    dogHeight: 23,
    dogBreed: "Husky",
    dogWeight: 50,
    dogBark: "Woof",
    Bark: function() {
        console.log(`${this.dogBark}`)
    }
}
dog.Bark()


//OR...?

console.log(dog.dogBark)


//2. Create a house object that has properties squareFootage, numberOfBedrooms, and numberOfBathrooms. Log these three properties to the console. 

const house = {
    squareFootage: 1200,
    numberOfBedrooms: 2,
    numberOfBathrooms: 1,
    Prop: function(){
        console.log(`${this.squareFootage}` + `${this.numberOfBedrooms}` + `${this.numberOfBathrooms}`)
    }
}

house.Prop()



/*3. Write a program that creates an account object with the following characteristics:
A name property set to "Alex".
A balance property set to 0.
A credit function adding the value passed as an argument to the account balance. "What?
A debit function that subtracts the value passed as an argument from the account balance.
A describe function logging the account balance
Use this object to log its balance, crediting 250, debiting 80, then log its balance again.
*/

let account = {
    name: "Alex",
    balance: 0,
    credit: function(newValue) {
        this.balance= this.balance + newValue
    },
    debit: function(newValue) {
        this.balance = this.balance - newValue
    },
    describe: function(newValue) {
        console.log(`the account balance is ${this.balance}`)
    }
}

account.describe()
account.credit(250)
account.debit(80)
account.describe()