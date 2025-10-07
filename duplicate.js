// Solution - 1
arr = [1, 3, 5, 6, 3, 4, 5];

console.log([...new Set(arr)]);

// Solution - 2
a = [1, 3, 2, 3, 4, 1, 4, 5, 3, 2, 5];

b = [];

b[0] = a[0];

for (var i = 1; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {

        if (a[i] == b[j]) {
            break;
        }
        else if (j != b.length - 1) {
            continue;
        }
        else {
            b[j + 1] = a[i];

        }
    }
}

console.log(b);

// Solution - 3
let arr = [1, 2, 3, 4, 2, 3, 4, 5, 6, 5, 7, 7];

let output = [];

for (let i = 0; i < arr.length; i++) {
    if (output.includes(arr[i]) === false) {
        output.push(arr[i])
    }
}

console.log(output);
