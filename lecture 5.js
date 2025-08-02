

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
