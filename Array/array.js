/*
<Reversing an Array>
Complete the function reverseArray that passes in an array.
The function should return a reversed array

Sample Input
Array = [1, 4, 3, 2]

Sample Output
reversedArray = [2, 3, 4, 1]
*/

function reversedArray(a) {
  const reverse = [];
  for (let i = a.length-1; i >= 0; i--) {
    reverse.push(a[i])
  };
  return reverse;
}

