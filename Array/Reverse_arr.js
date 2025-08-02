// Print Reverse of an Array
function printReverse(arr) {
    for (let i = arr.length-1; i>=0; i--) {
        process.stdout.write(`[${arr[i]}]`);
    }
    console.log();
}

// REVERSE AN ARRAY BY CREATING NEW ARRAY
function reverseArr(arr) {
    let temp = new Array(arr.length) //new array
    let j = 0
    for (let i = arr.length-1; i>=0; i--) {
        temp[j] = arr[i]
        j++   
    }
    console.log(`Orignal Array - ${arr} and Reverse Array - ${temp}`); 
}

// REVERSE AN ARRAY BY TWO POINTER ALGORITHM
function reverseArrTwoPointer(arr) {
    let left = 0;
    let right = arr.length-1;
    
    while (left < right) {
        //swap
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp

        left++
        right--
    }
    console.log(`Reverse Array - ${arr}`); 
}
let arr = [1,2,3,4,5]
printReverse(arr)
reverseArr(arr)
reverseArrTwoPointer(arr)