// Write a program to find the n - th ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

// Note that 1 is typically treated as an ugly number, and n does not exceed 1690.

var mineNthUglyNumber = function (n) {
  if (n > 1690) {
    n = 1690;
  }
  var i = 1;
  var k = 0;
  while (1) {
    var m = i;
    while (m % 2 === 0) m /= 2;
    while (m % 3 === 0) m /= 3;
    while (m % 5 === 0) m /= 5;
    m === 1 ? k++ : k;
    if (k >= n) {
      return i;
      break;
    }
    i++;
  }
};

/**
 * 
 * @param {number} n 
 * @return {number}
 */
var nthUglyNumber = function (n) {
  if (n === 0) return 0;
  if (n >= 1690) n = 1690;
  var arr = [1];
  var factor2 = 0,
    factor3 = 0,
    factor5 = 0;
  for (var i = 1; i < n; i++) {
    arr[i] = Math.min(arr[factor2] * 2, arr[factor3] * 3, arr[factor5] * 5);
    if (arr[i] == arr[factor2] * 2) factor2++;
    if (arr[i] == arr[factor3] * 3) factor3++;
    if (arr[i] == arr[factor5] * 5) factor5++;
  }
  return arr[n - 1]
};
