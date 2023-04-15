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
    var err_flag = false
    for (let i = 0; i < 10; i++) {
      fs.writeFileSync(path.join(__dirname, '/files/temp/'+now.getTime()+'_'+i+'.txt'), now.getTime()+'_'+i, err => {
        if (err) {
          err_flag = true
          console.log(err)
        }
      })
      fs.readFileSync(path.join(__dirname, '/files/temp/'+now.getTime()+'_'+i+'.txt'), 'utf8', (err, data) =>{
        if (err) {
          err_flag = true
          console.log(err)
        }
        console.log(data)
      })
      fs.unlinkSync(path.join(__dirname, '/files/temp/'+now.getTime()+'_'+i+'.txt'), (err) => {
        if (err){
          err_flag = true
          console.log(err)
        }
      });
    }
    if(err_flag){
      res.statusCode = 500
      res.send("error")
    }
    else{
      res.statuscode = 200
      res.send("Jobs done")
    }
  }
});

app.listen(port, function () {
  console.log(`Entry listening on port ${port}!`);
});