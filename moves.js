function moves(arr) {
    const len = arr.sort(function (a, b) { return a > b });
    let moves = 0;
    for (let i = len.length; i >= 0; i--) {
        if (i > len[i - 1]) {
            moves += (i - len[i - 1])
        } else if (i < len[i - 1]) {
            moves += (len[i - 1] - i)
        }
    }
    return moves;
}

console.log(moves([1, 2, 1, -1, 1]));
