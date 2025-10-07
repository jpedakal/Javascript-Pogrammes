// Write the factorial of number

function factNum(num) {
  let sum = 1;
  for (let i = num; i > 0; i--) {
    sum = sum * i;
  }

  return sum;
}

console.log(factNum(4));
