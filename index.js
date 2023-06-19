/*Create a hasTargetSum function with two arguments named array and target,
  both of them are integers. If the sum of any pair of numbers in the array
  equals the target number it returns true. 
*/

function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j];
      if (sum === target) {
       return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  take one item from the array
    take another item from the array
      make a sum out of the two items
      if the sum matches the target
        return true
  return false

*/

/*
  Add written explanation of your solution here

  iterate the array with a for loop to take a vaule. iterate it again with another for loop 
  to take a different value. Make a sum out of the two value. compare the sum to see if it matches the target value.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  
}

module.exports = hasTargetSum;
