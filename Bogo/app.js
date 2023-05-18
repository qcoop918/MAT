const express = require("express");
const app = express();
const port = 8081;

app.get("/bogo", function (req, res) {
  if (req.headers.authorization !== "123") {
    res.statusCode = 401
    res.send('Unauthorized');
  }
  else {
    var arra = [3, 0, 2, 5, -1, 4, 1];
    //res.send('Authorized Account Number: ' + Math.random()*1000 );
    //res.send("Original Array Elements: " + arra );
    res.send("Sorted Array Elements: " + Bogosort(arra))
  }
});

function Bogosort(arr) {
  var isSorted = function (arr) {
    for (var i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        return false;
      }
    }
    return true;
  };

  function shuffle(arr) {
    var count = arr.length, temp, index;

    while (count > 0) {
      index = Math.floor(random() * count);
      count--;

      temp = arr[count];
      arr[count] = arr[index];
      arr[index] = temp;
    }

    return arr;
  }

  var seed = 1;
  function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  function sort(arr) {
    var sorted = false;
    while (!sorted) {
      arr = shuffle(arr);
      sorted = isSorted(arr);
    }
    return arr;
  }

  return sort(arr);
}


app.listen(port, function () {
  console.log(`Entry listening on port ${port}!`);
});