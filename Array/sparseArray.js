/*
<Sparse Array>

There is a collection of input strings and a collection of query strings. 
For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

Link -> https://www.hackerrank.com/challenges/sparse-arrays/problem

Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in strings.

matchingStrings has the following parameters:
  - string strings[n] - an array of strings to search
  - string queries[q] - an array of query strings

Sample Input
  String = ['aba','baba','aba','xzxb']
  Query = ['aba','xzxb','ab']

Sample Output
  output = [2, 1, 0]
*/

// Solution 1 
function matchingStrings(strings, queries) {
  const result = [];
  // Loop over each element in 'queries' array.
  for (let x of queries) {
    // Create counter variable and set it to '0'
    let occurrence = 0;
    // Loop over each element in 'strings' array and compare it against 'x' using conditional statement
    // for (let i = 0; i < strings.length; i++)
    for (y of strings) {
      if (y === x) {
        // count the occurrences of y.
         occurrence = occurrence + 1;
      }
    }
    // populate the 'result' array.
    result.push(occurrence);
  }
  return result
}