// Move all zero elements backward
function backward(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[j] = arr[i]
            j++
        }
    }
    console.log("before", arr);

    while (j < arr.length) {
        arr[j] = 0;
        j++;
    }
    console.log("after", arr);
}

// Move all zero elements forward
function forward(arr) {
    let j = arr.length-1
    
    for (let i = arr.length-1; i>=0; i--) {
        if (arr[i] !== 0) {
            arr[j] = arr[i]
            j--
        }
    }
    console.log("before", arr);
    
    for (let i = 0; i<=j; i++) {
        arr[i] = 0
    }
    console.log("after", arr);
}
let arr = [1,2,0,3,4,0,0,5]
forward(arr)
