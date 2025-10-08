// palindrome (check string and reverse are same or not)
// solution - 1

function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(palindrome("abba"));

/************************************************************************************** */

// solution-2

// For "every" method refer the link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

console.log(palindrome("abba"));
