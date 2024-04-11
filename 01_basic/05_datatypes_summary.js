// Primitive 7 types
// string, Number, boolean, null, undefined, symbol, BigInt

const name = "mukesh"
const number = 3
const isLoggedIn = false
const isTemp = null






// Reference (non-primitive)
// Array, function, Object

const labour = ['farmer', 'dailylabour', 'driver', 'companyworker']

const myObj = {
    name: "mukesh",
    age: 22,
    village: "rajapur",
}

let myFunction = function(){
    // console.log("mukesh")
}
myFunction()

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let myChannel = "mukesh"
let newChannel = myChannel
newChannel = "swag"
// console.log(newChannel)
// console.log(myChannel)

let arr = ["mukesh", "swag"]
let arr2 = arr
arr2 = ["deepak", "nila"]
// console.log(arr2)
// console.log(arr)

let Object = {
    name: "mukesh",
    age: 22
}

let Object2 = Object

Object2.age = 33

console.log(Object)
console.log(Object2)