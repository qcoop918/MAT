const express = require("express");
const app = express();
const port = 8082;

app.get("/bubble", function (req, res) {
  if (req.headers.authorization !== "123") {
    res.statusCode = 401
    res.send('Unauthorized');
  }
  else {
    // This is our unsorted array
    var arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(random())
    }
    arr = bblSort(arr)
    // Now pass this array to the bblSort() function
    res.send("Sorted Array Elements: " + arr[0] + ", " + arr[1] + ", " + arr[2])
  }
});

var seed = 1;
function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

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