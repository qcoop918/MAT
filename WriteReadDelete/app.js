const express = require("express");
const app = express();
const port = 8082;

const fs = require('fs');
let path = require('path');

app.get("/writeReadDelete", function (req, res) {
  if (req.headers.authorization !== "123") {
    res.statusCode = 401
    res.send('Unauthorized');
  }
  else {
    let now = new Date()
    let readArray = []
    let read
    for (let i = 0; i < 10; i++) {
      fs.writeFileSync(path.join(__dirname, now.getTime() + '_' + i + '.txt'), now.getTime() + '_' + i)
      read = fs.readFileSync(path.join(__dirname, now.getTime() + '_' + i + '.txt'), 'utf8')
      fs.unlinkSync(path.join(__dirname, now.getTime() + '_' + i + '.txt'))
      readArray.push(read)
    }
  res.statuscode = 200
  res.send("Jobs done " + readArray)
  read = null
  readArray = null
  }
});

app.listen(port, function () {
  console.log(`Entry listening on port ${port}!`);
});
