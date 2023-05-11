const express = require("express");
const app = express();
const port = 8081;

app.get("/bogo", function (req, res) {
  if (req.headers.authorization !== "123") {
    res.statusCode = 401
    res.send('Unauthorized');
  }
  else {
    // This is our unsorted array
    var arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.random())
    }

    // Now pass this array to the bblSort() function
    res.send("Sorted Array Elements: " + bblSort(arr))
  }
});

function bblSort(arr) {
  
  for (var i = 0; i < arr.length; i++) {

      // Last i elements are already in place  
      for (var j = 0; j < (arr.length - i - 1); j++) {

          // Checking if the item at present iteration 
          // is greater than the next iteration
          if (arr[j] > arr[j + 1]) {

              // If the condition is true
              // then swap them
              var temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j + 1] = temp
          }
      }
  }

  // Print the sorted array
  return arr;
}


app.listen(port, function () {
  console.log(`Entry listening on port ${port}!`);
});