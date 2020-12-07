/*
Given a number as total, I need to calculate the number of ways to represent the total between 1 and k(inclusive).

For example: total=5 and k=3 ie (1 to 3), no. of ways = 5, the different ways are:

[1+1+1+1+1]
[1+1+1+2]
[1+2+2]
[1+1+3]
[2+3]
*/

function waySum(n, k) {
    let count = 0;
    for (let i = 1; i < k; i++) {
        count = count + (n - i);
    }
    return count;
}