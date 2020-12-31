/* 
<Left Rotation>

A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. 
Given an integer, d, rotate the array that many steps left and return the result.

Link -> https://www.hackerrank.com/challenges/array-left-rotation/problem

Complete the rotateLeft function in the editor below.
rotateLeft has the following parameters:
  int d: the amount to rotate by
  int arr[n]: the array to rotate

Sample Input 
d = 4
a = [1 2 3 4 5]

Sample Output
a = [5 1 2 3 4]

Complete the 'rotateLeft' function below.
The function is expected to return an INTEGER_ARRAY.
The function accepts following parameters:
 1. INTEGER d
 2. INTEGER_ARRAY arr
 */

// Solution 1
function rotateLeft(d, arr) {
  for (let i = 0; i < d; i++) {
    let removedItem = arr.shift();
    arr.push(removedItem);
  };
  return arr;
}
// Solution 2
function rotateLeft(d, arr) {
  const poppedItem = arr.pop();
  arr.unshift(poppedItem);
  return arr;
}
  