//// The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.

// example: 0,1,1,2,3,5,8,13,21,34,…


let n1 = 0;
let n2 = 1;
let nextNum;

for (let i = 1; i < 10; i++) {
    console.log(n1);
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
}
