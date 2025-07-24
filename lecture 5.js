//Array

//assign - let arr = new Array(4)  //js - dynamic (not fixed size)

//if we push the element after inzialization then it will start from index 3 not 0,1,2

/*   [ 1,2,3,4,string, {object}, [array], etc ]    -  Collection of not just 1 but all datatypes only in js, // linear data structure with continous manner               */

// let arr = [];

// arr.push(89);//0
// arr.push(43);//1
// arr.push(77);//2
// arr.push('abc');//3
// arr.push(false);//4
// arr.push('piyush');//5

// arr[9] = 121  //6,7,8, -> undefined


// for(let i=0; i<arr.length; i++) {  // <(=) --> undefined
//     console.log(`${i}th index : ${arr[i]}`);
// }

// let arr = new Array(5);
// let sum = 0;
// for(let i=0; i<arr.length; i++) {
//     arr[i] = Number(prompt("Enter a value"));
//     sum = sum + arr[i]
// } 

// console.log(arr);
// console.log("sum = ", sum);

//Max value in array
// let arr = [54, 7, 83, 65, 23, 91, 13, 37, 68, 42, 19, 88, 30, 77, 4, 21, 96, 72, 6, 58]
// let Max = Math.max(arr[0], arr[1]) //54
// let Max2 = Math.min(arr[0], arr[1]) //7

// for (let i=2; i<arr.length;i++){
//     if (arr[i] > Max) {
//         Max2 = Max;
//         Max = arr[i]
//     } else if (Max2<arr[i] && Max != arr[i]) {
//         Max2 = arr[i]
//     }
// }

// console.log(Max);
// console.log(Max2);

//New Reverse Array // print reverse order - ❌

let arr = [54, 7, 83, 65, 23, 91, 13, 37, 68, 42, 19, 88, 30, 77, 4, 21, 96, 72, 6, 58]
let temp = new Array(arr.length)
let j = 0
for(let i=arr.length-1; i>=0; i--) {
    temp[j] = arr[i];
    j++
}

console.log(temp);
console.log(arr);
