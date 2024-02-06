function distinctPairSum(arr, k) {
  // type your code here
  // have resultsArr = []
  // loop over each element
  // for each element, add it to every other element
  // if result === k
  // push array of both numbers to resultsArr
  // splice both elements out of original arr
  // return resultsArr

  let resultsArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === k && i !== j) {
        let val1 = arr[i];
        let val2 = arr[j];

        // why does the conditional of i !== j not work here, but does in the above if statement?
        // is it because of the filter below?
        resultsArr.push([val1, val2]);

        arr = arr.filter((element) => element !== val1 && element !== val2)

      }
    }
  }

  return resultsArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));

  console.log("");

  console.log("Expecting: [[1, 1]]");
  console.log("=>", distinctPairSum([1, 1, 1, 1, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[]]");
  console.log("=>", distinctPairSum([1, 1, 1, 1, 1, 1], 8));

  console.log("");

  console.log("Expecting: [[-10, 10], [-3, 3], [0, 0]]");
  console.log("=>", distinctPairSum([1, 0, 0, 10, -10, 5, 4, 3, -3, -3], 0));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
