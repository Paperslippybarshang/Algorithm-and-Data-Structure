/*
<Array Manipulation>
Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive. 
Once all operations have been performed, return the maximum value in the array.

Queries are interpreted as follows:

    a b k
    1 5 3
    4 8 7
    6 9 1
Add the values of  between the indices  and  inclusive:

index->	 
             1 2 3  4  5 6 7 8 9  10
1 iteration	[0,0,0, 0, 0,0,0,0,0, 0]
2	iteration [3,3,3, 3, 3,0,0,0,0, 0]
3	iteration [3,3,3,10,10,7,7,7,0, 0]
4 iteration [3,3,3,10,10,8,8,8,1, 0]
  
The largest value is 10 after all operations are performed.

<Sample Input>
5 3
1 2 100
2 5 100
3 4 100
<Sample Output>
200
*/

// Solution 1
function arrayManipulation(n, queries) {
  const arrA = new Array(n).fill(0);
  for (let x of queries) {
    let a = x[0];
    let b = x[1];
    let k = x[2];
    
    for (let i = a-1; i < b; i++) {
      let increment = arrA[i] + k;
      arrA.splice(i, 1, increment);
    }
  }
  return Math.max(...arrA);
}

// Solution 2** 
function arrayManipulation(n, queries) {
  const arr = Array(n+1).fill(0);
  queries.forEach(rangeSum => {
    let a = rangeSum[0]-1;
    let b = rangeSum[1];
    let k = rangeSum[2];
    arr[a] += k;
    arr[b] -= k;
  })
  
  let sum = 0;
  let maxValue = 0;
  
  for (let i = 0; i<arr.length; i++){
    sum += arr[i];
    maxValue = Math.max(maxValue, sum);
  }
  return maxValue;
  
  // for(let i = 1; i<arr.length; i++) {
  //   arr[i] += arr[i-1];    
  // }
  // const maxValue = Math.max(...arr)
  // return maxValue;
}

while(noSuccess) {
    tryAgain();
    if(dead);
    break;
}