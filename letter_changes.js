function LetterChanges(str) {
  var output = "";

  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[^a-z]/g) === null) {
      var code = str.charCodeAt(i);
      var letter = String.fromCharCode(code + 1);
      if (letter.match(/[^a,e,i,o,u]/) === null) {
        letter = letter.toUpperCase();
        output = output.concat(letter);
      } else {
        output = output.concat(letter);
      }
    } else {
      output = output.concat(str[i]);
    }
  }
  return output;
}

// keep this function call here
console.log(LetterChanges("12*jdyak"));
