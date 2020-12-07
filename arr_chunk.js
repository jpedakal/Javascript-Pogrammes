/* 
Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size
--- Examples
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/


// Solution -1
function arrChunk(arr, length) {
    let subrr = [];
    let output = [];
    for (let num in arr) {
        subrr.push(arr[num]);
        if (subrr.length == length) {
            output.push(subrr);
            subrr = [];
        } else {
            if (num == (arr.length - 1)) {
                output.push(subrr)
            }
        }
    }
    return output;
}

console.log(arrChunk([1, 2, 3, 4, 5, 7, 8, 9], 3));