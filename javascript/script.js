//Console output
const v = 64
console.log(`V=${v}`)
console.error("error")
console.warn("warning")

//User input using NPM (Node package manager) 

//type in terminal "npm init -y"
//after package.json created type "npm install prompt-sync" 

const prompt = require("prompt-sync")()
const a = prompt("type something")
console.log(a)

/*Data types
String "" '' ``
Boolean true false
Number 12.34 9 -1 0
undefined
null (when u want to explictly set something as nothing)
*/

//Variables (use camel case)
//function scoped, like a normal variable 
var word = "hello"
function test() { // will work because var tests get hoisted to top of function it just
    //is not define yet, will print undefines and then test
console.log(tests)
var tests = "test"
console.log(tests)
}
// let and const are blocked scope (like ocaml) only exist within their block
let x = 5
x = 7
const VELOCITY = 34 //can not change value

//Operators operations with different types
const a1 = 6
const a2 = "7"
console.log(a1 + a2)
//Type coersion happens prints 67 (a1 gets converted to string automatically)
//Type conversion 
//parseInt() 
//parseFloat() 
//String(), x.toString()
//Boolean()
console.log(Number(a2) + a1)

/*Comparison Operators
== (loose) -> console.log("1" == 1) -> will convert value and check if equiv, is true
=== (strict) -> checks value and type (best to use this)
*/

//Ternary condition 
const cond = 2 < 3 ? "okay cool" : "no"
console.log(cond)


//Switch statment
const value = 3
switch (value) {
    case 3:
        console.log("3 is cool")
        break;
    case 4:
        console.log("4 is not cool")
        break;
    default:
        console.log("okay")
        break;
}

//Arrays
console.log("\n<---Arrays--->\n")
const arr = [1,2,3,true]
const arr2 =  new Array(5);
const arr3 = Array.from("hello")
console.log(arr2)
arr2[0] = "y"
arr2.push(4)
arr2.pop()
arr2.shift() //removes first element from array and returns it
arr2.shift("new")
arr2.includes("y")
console.log(arr2)

const arr4 = arr.concat(arr2)
const str = arr.join("|")
//arr.slice(1,3) to get a potion of array (3 not included)
//arr.splice (1,1) remove 1 element at index 1
console.log(str)

//Array Destructing and Spread
const [x1, y1] = [1, 2]
console.log(x1,y1)

//Spread operator -> ...
const firstArr = [6,22,33,4]
const reference = firstArr
const newCopy = [...firstArr]
const[first, ...rest] = [1,2,3,4]
console.log(first,rest)

//While loops and For loops
do{
    console.log("run")
    break
} while (true)

for (let j = 0; j <3; j++ ){
    console.log(j)

}
for(let item of firstArr){
    console.log(item)
}

for(let [l, item] of arr.entries()){
    console.log(l, item)
}

//OBJECTS
const obj = {
    name: "Alice",
    age: 23,
    sayHello: function(){
        return "hello"
    },
    career: {}
}

obj.age ="tim"
obj.newProp = [1,2,3]
obj["name"]

console.log(Object.values(obj))
console.log(Object.keys(obj))
/*
for (let key in obj){
    console.log(key)
}
*/

const obj2 = {
    hairColor: "black",
    arr: [1,2,3]
}

const obj3 = {...obj, ...obj2}
const {hairColor, name} = obj3 //destructuring
console.log(hairColor, name)

//Sets
const mySet = new Set();
mySet.add(1)
mySet.delete(1)
mySet.has(1)
mySet.size
mySet.clear()
const arrr = Array.from(mySet) // or [...mySet]

//Maps
const myMap = new Map();
const numberMap = new Map([[1, 'one'], [2, 'two']]);

myMap.set(4, "four")
myMap.delete(4)
myMap.get(1)
myMap.has(1)
myMap.size
/*
for(const [key,value] of myMap){
}
*/
myMap.clear
const mapToArr = Array.from(myMap)

/*Error Handling

try{
    riskyFunction();
} catch (error){
    console.error("error occured", error.message);
} finally {
    console.log("Cleanup code can go here");
    //always runs
}
throw new Error("this is not good!")
*/
//Functions
const greet = function(name){
    console.log(name)
}

const greet2 = (name) => {
    console.log(name)
}
/*
function addNums (...numbers){
}
*/