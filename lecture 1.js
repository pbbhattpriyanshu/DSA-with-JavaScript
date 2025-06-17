// 1. let vs var

// by the help of var we can use the variable before initialize. but in let case we can't
// console.log(a);
// var a; // undefined
// let a // error

// 2. Relation b/w String and Integer

// console.log(4+5); // --> integer = 9 (sum/add)
// console.log("4" + 5); // --> string + integer = 45 (string) (concatenation)

let a = 10;
let b = 20;
// console.log("sum of 10 and 20 = " + a + b); // string + integer = string, string + integer = string, --> sum of 10 and 20 1020

// console.log("sum of 10 and 20 = " + (a + b)); // priority --> bracket first solve - (a + b)

// console.log(a + b +" = sum of 10 and 20"); // 30 first solve

// console.log(5 - "2"); //3  concatenation - X / normal sub - yes --> string convert integer --> Type coercion.

// 3. Prompt 

// let age = Number(prompt("What is your age?"));
// console.log(typeof(age));

// 4. Swaping

// Extra variable
// let temp = a; // temp = 10, a = 10
// a = b; // a = 20, b = 20
// b = temp; // a = 20, b = 10, temp = 10

// console.log("value of a is", a);
// console.log("value of b is", b);
// console.log("value of temp is", temp);


// ADD/SUB

// a = a + b; // a = 30
// b = a - b; // b = 10
// a = a - b; // a = 20

// console.log("value of a is", a);
// console.log("value of b is", b);

// Array

// [a,b] = [b,a];

// console.log("value of a is", a);
// console.log("value of b is", b);

// let a = 4565;

// console.log(Math.floor(a % 100))

// // > < <= >= !== = == ===

// let b = 4321;

// console.log(a!=b);

// let d = 4114434445647543545;
// let f = 5545424643643777587;

// console.log();

