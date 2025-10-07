/* Write a function that accepts number and returns a N*N spiral matrix in clock wise.

ex: number is 2
    [[1, 2],
     [4, 3]]

ex: number is 3
    [[1,2,3],
     [8,9,4],
     [7,6,5]]
*/

function matix(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    let j = 1;
    arr.push([]);
    arr[i][j] = i + 1;
  }
  return arr;
}
console.log(matix(3));
