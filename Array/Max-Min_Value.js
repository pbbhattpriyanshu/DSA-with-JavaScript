// FIND THE MAXIMUM VALUE ELEMENT IN AN ARRAY?
function maxValue(arr){
    let max = arr[0]
    let index = 0;

    //loop - accessing all element
    for(let i=1; i<arr.length; i++){
        //compare with max value
        if (max < arr[i]) {
            max = arr[i]
            index = i
        }
    }
    console.log(`Max value in this Array is ${max} at index ${index}`);
}

// FIND THE MINIMUM VALUE ELEMENT IN AN ARRAY?
function minValue(arr) {
    let min = arr[0] 
    let index = 0; 
    
    //loop
    for(let i=1; i<arr.length; i++){
        if (min>arr[i]) {
            min = arr[i]
            index = i
        }
    }
    console.log(`Min value in this Array is ${min} at index ${index}`);
}

// FIND TWO MAXIMUM VALUES IN AN ARRAY?
function twoMaxValue(arr){
    if (arr.length < 2) {
        console.log("Array must have at least 2 elements.");
        return;
    }

    let max1, max2, max1Index, max2Index;

    // Initialize with first two elements
    if (arr[0] > arr[1]) {
        max1 = arr[0]; max1Index = 0;
        max2 = arr[1]; max2Index = 1;
    } else {
        max1 = arr[1]; max1Index = 1;
        max2 = arr[0]; max2Index = 0;
    }

    // Loop from index 2 onwards
    for(let i = 2; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max2Index = max1Index;

            max1 = arr[i];
            max1Index = i;
        } else if (arr[i] > max2 && arr[i] !== max1) {
            max2 = arr[i];
            max2Index = i;
        }
    }

    console.log(`Two Maximum values in this Array are:`);
    console.log(`${max1} at index ${max1Index}`);
    console.log(`${max2} at index ${max2Index}`);
}

// FIND TWO MINIMUM VALUES IN AN ARRAY?
function twoMinValue(arr){
    if (arr.length < 2) {
        console.log("Array must have at least 2 elements.");
        return;
    }

    let min1, min2, min1Index, min2Index

    // Initialize with first two elements
    if (arr[0] > arr[1]) {
        min1 = arr[1]; min1Index = 1;
        min2 = arr[0]; min2Index = 0;
    } else {
        min1 = arr[0]; min1Index = 0;
        min2 = arr[1]; min2Index = 1;
    }


}

let arr = [2,9,56,83,72,13,83,23,83]
twoMaxValue(arr)