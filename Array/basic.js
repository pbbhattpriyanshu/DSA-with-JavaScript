//Array

//assign - let arr = new Array(4)  //js - dynamic (not fixed size)

//if we push the element after inzialization then it will start from index 3 not 0,1,2

/*   [ 1,2,3,4,string, {object}, [array], etc ]    -  Collection of not just 1 but all datatypes only in js, // linear data structure with continous manner               */

let arr = [];

arr.push(89);//0
arr.push(43);//1
arr.push(77);//2
arr.push('abc');//3
arr.push(false);//4
arr.push('piyush');//5

arr[9] = 121  //6,7,8, -> undefined
// 
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