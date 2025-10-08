arr = [1, 3, 4, 5, 7, 9, 13, 12, 15];

for (var j = 1; j <= 15; j++) {
  for (var i = 0; i < arr.length; i++) {
    if (j == arr[i]) {
      break;
    } else if (i != arr.length - 1) {
      continue;
    } else {
      console.log(j);
    }
  }
}
