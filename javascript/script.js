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
//type coersion happens prints 67 (a1 gets converted to string automatically)