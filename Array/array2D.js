
/* 
<Hourglass Challenge>
Complete the function hourglassSum that passes and array of integers as a parameter. 
The function should return the maximum hourglass sum.

Sample Input

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0

Sample Output
19
*/

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let currentOutput = -63;
      for(let i = 0; i < arr.length-2; i++ ) {
          for(let j = 0; j < arr.length-2; j++ ) {
              let output = (arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]);
              currentOutput = (currentOutput < output) ? output : currentOutput;
          }
      }
return currentOutput;
}