console.log('Hi')
// alert('Hello and Welcome')

// variables
var a=9
console.log(a)//Block 1

{
    var a=20
       console.log(a)      //    Block 2
}
let b=23
console.log(b)
{ 
    let b=34
    console.log(b)
}
b=44
console.log(b)
const t=30
console.log(t)
{ 
    const t=90
    console.log(t)
}
console.log(t)
// datatypes
var nam='My Name is Anjana.k.s'
console.log(typeof(nam))
// Numbers
var count=10
console.log(typeof(count))
// Boolean
var bol=true
console.log(typeof(bol))
// Undefined
var gtype 
console.log(typeof(gypte))
// Array
let arr=['red','blue','white',10]
console.log(arr[3])
console.log (arr.length)
arr.push('violet')
console.log(arr)
arr.pop()
console.log(arr)//
// Javascript Objects
let car={
    mileage:100,
    model:'i10',
    color:'red'
}
console.log(car)
console.log(car.model)
console.log(car.mileage)
let person=new Object()
person.gender='male'
person.height=180
console.log(person)//
// Arithematic operation
var a=7 
var c=8
console.log(a+c)
var a=10
var d=a++
console.log(d)
console.log(a)
var a=10
var d=++a
console.log(a)
console.log(d)//
// if else
if (a==d) {
    console.log('a is equal to d')
} else {
   console.log('a is not equal to d') 
}
if (a!=d) {
    console.log('a is equal to d')
} else {
   console.log('a is not equal to d') 
}
if (a==b && a==10) {
    console.log('a is equal to d')
} else {
    console.log('a is not equal to d and a is not 10')
}//
// if else
var e=7
f='4'
if (e===f) {
    console.log('e is equal to f')
} else {
    console.log('e is not equal to f')
}
if (e==f) {
    console.log('e is equal to f')
} else {
    console.log('e is not equal to f')
}
var g='3'
h='7'
if (g>7 || g==h) {
    console.log('g is not equal to h')
} else {
    console.log('h greater than g not equal to h')
}//
// Assignment operation
let add=6
add *= 3
console.log(add)//
// bodmas
let k=10
let l=34
let m=70
let n=12
console.log(add)
var exp=k+l*(m-n)-7
console.log(exp)//
const arr2=[
    {
        name:'Anjana'
    },{
        name:'Nayana'
    }
]
// Functions
function display(name) {
    console.log('Hi '+name+' Welcome to JS')
}
display('Anjana')//Function call
// function addition
function addition(t,s) {
    var result=t+s
    return result
    console.log(result)
}
var result=addition(10,30)
console.log('the sum is'+ result)
// function subtraction
function sub(u,v) {
    var result=u-v
    return result
    console.log(result)
}
var result=sub(40,5)
console.log('the sum is'+ result)
// function multiplication
function mul(o,p) { 
    var result=o*p
    return result
    console.log(result)
}
var result=mul(4,5)
console.log('the product is'+ result)
// function division
function div(r,s) {
    var result=r/s
    return result
    console.log(result)
}
var result=div(40,10)
console.log('the rem is'+ result)