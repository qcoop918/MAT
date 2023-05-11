const express = require("express");
const app = express();
const port = 8080;
const proxy = require('express-http-proxy');

app.get("/", function (req, res) {
  if (req.headers.authorization !== "123") {
    res.statusCode = 401
    res.send('Unauthorized');
  }
  else {
    res.send('Authorized Account Number: ' + Math.random() * 1000);
  }
});

app.get("/writeReadDelete", proxy('writereaddelete:8083/writeReadDelete'))

app.get("/bubble", proxy('bubble:8082/bubble'))

app.get("/bogo", proxy('bogo:8081/bogo'))


app.listen(port, function () {
  console.log(`Entry listening on port ${port}!`);
});