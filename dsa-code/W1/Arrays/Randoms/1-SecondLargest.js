// Find the second largest element from an Array
// Example : Array -> [3,4,5,6] & output [5]

// Inbuilt Method
function secondLargestElement(arr) {
  const uniqueArr = Array.from(new Set(arr));
  uniqueArr.sort((a, b) => b - a);
  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return -1;
  }
}
console.log(secondLargestElement([3, 4, 5, 6]));
// output : 7
/* Logic:
1. get unique Array in order to avoid duplicate error
   Array.from() : converts to array
   new Set(arr) : coverts to set:{} with unique values 
2. Sort from largest to smallest sort -> b - a  
3. give condition if array.length is equals to greater than 2 then return arr[1]
4. or else return -1
   
 */

// Optimized Method
function optimizedSecondLargestElement(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  // -1, -2 .... suppose value
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
      /*
      console.log(`largest:${largest} | secondLargest:${secondLargest}`);
      process :
        largest:3 | secondLargest:-Infinity
        largest:4 | secondLargest:3
        largest:5 | secondLargest:4
        largest:6 | secondLargest:5
        undefined
      */
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      return (secondLargest = arr[i]);
    }
  }
  return secondLargest;
}

console.log(optimizedSecondLargestElement([3, 4, 5, 6]));
