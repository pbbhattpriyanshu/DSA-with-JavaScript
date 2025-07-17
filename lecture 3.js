//factorial
// let num = 6; //720
// let fact = 1;

// for (let i = 1; i<=num; i++) {
//     fact = fact * i;
// }
// console.log(fact);

// Reverse number
// var num  = 123456789; 
// var revValue = 0;
// while (num > 0) {
//     var rem = num % 10 
//     revValue = revValue * 10 + rem
//     num = Math.floor(num / 10)
// }
// console.log(revValue);

//Strong number
// var num = 145;
// var copy = num
// var sum = 0;
// while (num>0) {
//     var rem = num % 10
//     var fact = 1
//     for(var i=1; i<=rem; i++){
//         fact = fact * i;
//     }
//     sum = sum + fact
//     num = Math.floor(num / 10)
// }
// if (sum == copy) {
//     console.log("Strong value");
// } else {
//     console.log("Week Value");
// }
// console.log(sum);


//Armstrong value
// let num = 153;
// let copy = num;
// let sum = 0;

// // Count number of digits
// let digits = num.toString().length;

// while (num > 0) {
//     let rem = num % 10;
//     sum += Math.pow(rem, 3);
//     num = Math.floor(num / 10);
// }

// if (sum == copy) {
//     console.log(`${copy} is Armstrong Number`);
// } else {
//     console.log(`${copy} is not Armstrong Number`);
// }

//Palindrome number
let num = 123;  
let copy = num;
let pNum = 0;
while (num > 0) {
    let rem = num % 10
    pNum = pNum * 10 + rem
    num = Math.floor(num/10)
}

if (pNum == copy) {
    console.log(`${pNum} is Palindrome number`); 
} else {
    console.log(`${pNum} is not Palindrome number`); 
}




