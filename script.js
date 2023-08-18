console.log("Hello World");
//Variables
let myVariable = 0;
console.log(myVariable);
//old variable
var avoidNoSemicolon = 0
console.log(avoidNoSemicolon)

//Data Types
let string = "my string"; //strings
let bool = "true"; //true or false
let NullValue = null; //empty value
let undefinedValue; //no value

//for math, use all operators you're used to

//comparing
//loose comparing/loosely equals
console.log(0 == 0); //writes "true"
console.log(0 == "hi"); //writes "false"
console.log(0 == "0"); //writes "true"

//strict equals - always use 3 =s!!!
console.log(0 === 0); //writes "true"
console.log(0 === "hi"); //writes "false"
console.log(0 === "0"); //writes "false"


//if -- does not need to end with an else unless you have an else if
if(1 === 2){
    console.log("1 not equal to 2");
}
else if (1 === 1){
    console.log("1 equals 1");
}
else{
    console.log("How did you get here?");
}

let age = 26;

if(age >= 21){
    console.log("you can drink");
}
else if (age >= 18){
    console.log("you can vote");
}
else if (age >= 16){
    console.log("you can drive")
}
else{
    console.log("you can't do anything");
}

//functions are like methods (reusable code block)
function MyFunction(){
    console.log("my function");
}
MyFunction(); 

//can take in values and return values, give it perameters
function GetGreeting(name){
return "Hello " + name;
}
console.log(GetGreeting("Justin"))
console.log(GetGreeting("Maria"))

//multiple perameters
function GetGreetingMultiple(name, age){
    return `Hello ${name}. You are ${age} years old.` //` interpolation
}
console.log(GetGreetingMultiple("Billy", 21))

//arrow functions - more modern way of doing functions
//shorthand arrow function
Adder = (num1, num2) => num1 + num2; 
console.log(Adder(2,3))

Subber = (num1, num2) => {
    let result = num1-num2;
    return result;
}
console.log(Subber(2,3))

//User input
//comment  out when not in use
//let response = prompt("Please enter a number.");

//array
let myArray = ["justin", "Ethan", "Billy"];
console.log(myArray);
//add to array
myArray.push("tommy");
console.log(myArray);
//remove last element
myArray.pop();
console.log(myArray);
//first number is the starting number of the array, second number is the delete count
let removed = myArray.splice(1,1);//if you just put one number then all after it will be removed too
console.log(myArray);
console.log(removed); 
myArray.splice(1,0, "Ethan"); //add by index, remove 0 items, then the value you want to add
console.log(myArray)

//for loops  let i =1

//foreach
//Array method = linq in c#
myArray.forEach((n) => {
    console.log(n);
});

//objects
let person = {
    firstName: "Justin", 
    lastName: "Jones"
};
console.log(person);
person.age = 26; //can add on new properties whenever you want because this isn't a class
console.log(person);


//mini exercise

let cart = []; //create array with some products

function AddToCart(_productName, _price){
    let product = {
        ProductName: _productName, 
        Price: _price
    }
    
let totalPrice = 0;
cart.push(product);
cart.forEach((c) => {
    console.log(c);
    totalPrice += c.Price;
});

console.log(`${cart} Total: ${totalPrice}`);

}

