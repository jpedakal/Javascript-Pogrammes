// print "fizz" if number divided by 3 and print "buzz" if number divided by 5.
// Print "fizzbuzz" if number divided by both 3 and 5

function fizBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizBuzz(15);
