/*
<Reversing an Array>
Complete the function reverseArray that passes in an array.
The function should return a reversed array

Link -> https://www.hackerrank.com/challenges/arrays-ds/problem

Sample Input
Array = [1, 4, 3, 2]

Sample Output
reversedArray = [2, 3, 4, 1]
*/
// Using push() method
function reversedArray(a) {
  const reverse = [];
  for (let i = a.length-1; i >= 0; i--) {
    reverse.push(a[i])
  };
  return reverse;
};

// Using unshift() method
function reversedArray(a) {
  const reverse = [];
  for (let i = 0; i < a.length; i++) {
    reverse.unshift(a[i])
  };
  return reverse;
};
