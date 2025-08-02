// Check if array is palindrome
function checkPalindrome(arr) {
  let temp = new Array(arr.length);
  let j = 0;

  //reverse array - temp
  for (let i = arr.length - 1; i >= 0; i--) {
    temp[j] = arr[i];
    j++;
  }

  // Check each element one by one
  let isPalindrome = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== temp[i]) {
      isPalindrome = false;
      break;
    }
  }

  // Output result
  if (isPalindrome) {
    console.log(`${arr} is a palindrome!!`);
  } else {
    console.log(`${arr} is not a palindrome!!`);
  }
  console.log("Reversed array:", temp);
}

let arr = [1, 2, 1];
checkPalindrome(arr);
