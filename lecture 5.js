

// Remove Duplicates from Sorted Array
// let removeDuplicate = function(nums) {
//     if (nums.length === 0) return 0;

//     let i = 0; // last unique index

//     for (let j = 1; j < nums.length; j++) {
//         if (nums[j] !== nums[i]) {
//             i++;
//             nums[i] = nums[j]; // overwrite duplicate
//         }
//     }

//     return i + 1; // total number of unique elements
// };

// let nums = [1, 1, 2];
// let k = removeDuplicate(nums);

// console.log("k =", k);                      // Output: 2
// console.log("Modified array:", nums);      // Output: [1, 2, ...]
// console.log("Unique values:", nums.slice(0, k)); // Output: [1, 2]

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

//Move all Zeroes to front of Array
// let arr = [1,3,0,1,0,2,0,5]
// console.log(arr.length);

// let j = arr.length-1
// for (let i = arr.length-1; i >= 0; i--) {
//     if (arr[i] !== 0) {
//         arr[j] = arr[i]
//         j--
//     }
// }

// for (let i = j; i >= 0; i--) {
//     arr[i] = 0;
// }

// console.log(arr);
// console.log(arr.length);

//Left Rotate Array by One Place
// function rotateLeft(arr, rotation) {
//   rotation = rotation % arr.length; // optional, handles large values

//   for (let j = 1; j <= rotation; j++) {
//     let copy = arr[0];
//     for (let i = 0; i < arr.length - 1; i++) {
//       arr[i] = arr[i + 1];
//     }                         
//     arr[arr.length - 1] = copy;
//   }

//   console.log(arr);
// }

// let arr = ["Abhi", "Bula", "Chamka", "Dora", "Egle", "Fana"];
// let rotation = 1;

// rotateLeft(arr, rotation);

//Right Rotate Array by One Place
// function rotateRight(arr, rotation) {
//   rotation = rotation % arr.length; // optional, handles large values

//   for (let j = 1; j <= rotation; j++) {
//     let copy =  arr[arr.length - 1];
//     for (let i = arr.length-1; i > 0 ; i--) {
//       arr[i] = arr[i-1];
//     }                         
//      arr[0] = copy;
//   }

//   console.log(arr);
// }

// let arr = ["Abhi", "Bula", "Chamka", "Dora", "Egle", "Fana"];
// let rotation = 1;

// rotateRight(arr, rotation);

//new approach to rotate left -  array
let newArr = [1,2,3,4,5]
let temp = new Array(newArr.length)
let times = 3;
times = times % newArr.length

for(let i=0; i<newArr.length; i++){
    temp[i] = newArr[(i+times) % newArr.length]
}

console.log(temp);



//Sum of all elements
// function sumofArray(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
//   }
//   console.log(`Sum of array ${arr} is ${sum}`);
// }

// let arr = [1,2,3,4,5]//15

// sumofArray(arr)

//Check if array is palindrome
// function checkPalindrome(arr) {
//   let temp = new Array(arr.length);
//   let j = 0;

//   // Reverse the array manually into temp
//   for (let i = arr.length - 1; i >= 0; i--) {
//     temp[j] = arr[i];
//     j++;
//   }

//   // Check each element one by one
//   let isPalindrome = true;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== temp[i]) {
//       isPalindrome = false;
//       break;
//     }
//   }

//   // Output result
//   if (isPalindrome) {
//     console.log(`${arr} is a palindrome!!`);
//   } else {
//     console.log(`${arr} is not a palindrome!!`);
//   }
//   console.log("Reversed array:", temp);
// }


// let arr = [1,2,3]
// checkPalindrome(arr)
