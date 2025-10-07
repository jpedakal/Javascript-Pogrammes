/***

 word starting letter capitalization
 Ex: capitalize("a lazy fox") --> A Lazy Fox
 Ex: capitalize("a short sentence") --> A Short Sentence

***/


// Solution - 1

function capital(str) {
  let words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}

console.log(capital("a short sentence"));
/********************************************************************************************** */
// Solution - 2
function capital(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] == " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(capital("a short sentence"));
