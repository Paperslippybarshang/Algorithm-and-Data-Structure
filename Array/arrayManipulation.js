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

function arrayManipulation(n, queries) {
  const arrA = Array(n).fill(0);
  for (let a of queries) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    
    for (let i = x-1; i < y; i++) {
      let increment = arrA[i] + z;
      arrA.splice(i, 1, increment);
    }
  }
  return Math.max(...arrA);
}