// conditional statement

// let amount = Number(prompt("Total Price"));
// let dis = 0;

// if (amount >= 5000 && amount <= 7000) {
//     dis = 15;
// }
// if (amount >= 7001 && amount <= 9000) {
//     dis = 30;
// }
// if (amount > 9001) {
//     dis = 40;
// } else {
//     console.log(amount);
// }

// disCal = Math.floor((amount * dis) / 100);
// payAmount = amount - disCal;
// console.log(`After ${dis}% discount: ${payAmount}`);


//Bill 

// let unit = Number(prompt("Enter unit"));
// let amount = 0;

// // unit - 700
// if (unit > 400) {
//     amount = (unit-400) * 13;
//     unit = 400
// }
// // unit - 400
// if (unit > 200 && unit <= 400) {
//     amount += (unit-200) * 8;
//     unit = 200
// }
// //unit - 200
// if (unit > 100 && unit <= 200) {
//     amount += (unit-100) * 6;
//     unit = 100
// } 
// // unit - 100
// if (unit > 0 && unit <= 100) {
//     amount += unit * 4;
// }
// console.log("Please pay amount: ", amount);

// Money notes

let amount = Number(prompt("Enter the Money"));

console.log("Total amount: ",amount);

if (amount >= 2000) {
    console.log(" 2000 Notes: " , Math.floor(amount/2000));
    amount = amount % 2000;
}
if (amount >= 500) {
    console.log(" 500 Notes: " , Math.floor(amount/500));
    amount = amount % 500;
}
if (amount >= 200) {
    console.log(" 200 Notes: " , Math.floor(amount/200));
    amount = amount % 200;
}
if (amount >= 100) {
    console.log(" 100 Notes: " , Math.floor(amount/100));
    amount = amount % 100;
}
if (amount >= 50) {
    console.log(" 50 Notes: " , Math.floor(amount/50));
    amount = amount % 50;
}
if (amount >= 20) {
    console.log(" 20 Notes: " , Math.floor(amount/20));
    amount = amount % 20;
}
if (amount >= 10) {
    console.log(" 10 Notes: " , Math.floor(amount/10));
    amount = amount % 10;
}
if (amount >= 5) {
    console.log(" 5 Notes: " , Math.floor(amount/5));
    amount = amount % 5;
}
if (amount >= 2) {
    console.log(" 2 Coin: " , Math.floor(amount/2));
    amount = amount % 2;
}
if (amount >= 1) {
    console.log(" 1 Coin: " , Math.floor(amount/1));
    amount = amount % 1;
}

