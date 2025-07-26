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
// let Max = arr[0]

// for (let i=1; i<arr.length;i++){
//     if (arr[i] > Max) {
//         Max = arr[i]
//     }
// }

// console.log(Max);


// 2 Max Element
// let arr = [154,7,83,65,71,91,25, 154]
// let max1 = Math.max(arr[0], arr[1])
// let max2 = Math.min(arr[0], arr[1])

// for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > max1) {
//         max2 = max1
//         max1 = arr[i];
//     } else if (arr[i] > max2 && max1 != arr[i])  {
//         max2 = arr[i]
//     }
// }
// console.log(max1);
// console.log(max2);

//Min value in array
// let arr = [54, 7, 83, 65, 23, 91, 13, 37, 68, 42, 19, 88, 30, 77, 4, 21, 96, 72, 6, 58]
// let Min = arr[0]

// for (let i=1; i<arr.length;i++){
//     if (arr[i] < Min) {
//         Min = arr[i]
//     }
// }

// console.log(Min);

// Reverse array
//O(n)	Manual reversal using a new array
// let arr = [1, 4, 3, 2, 6, 5];
// let temp = new Array(arr.length); // creates an empty array of the same length
// let j = 0;

// for (let i = arr.length - 1; i >= 0; i--) {
//     temp[j] = arr[i]; // fill temp from end of arr
//     j++;
// }

// arr = temp; // assign reversed array to arr

//Two Pointer	O(1)	In-place reversal using two indices

// let left = 0;
// let right = arr.length-1

// while (left < right) {
//     //swap
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     //Move pointers
//     left++;
//     right--;
// }

// console.log(arr);

// Remove Duplicates from Sorted Array

// let nums = [1,1,2]
// console.log(nums.length === 0) //false
// console.log(nums[0] !== nums[1]); //true

//Move zeros
// let arr = [0,1,0,3,12]
// let j = 0

// // Move all non-zero elements forward
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//         arr[j] = arr[i];
//         j++;
//     }
// }

// // Fill the rest with zeros
// while (j < arr.length) {
//     arr[j] = 0;
//     j++;
// }
// console.log(arr);

