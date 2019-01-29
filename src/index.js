const express = require('express');
const app = express();

app.get('/', function (req, res) {
	//console.log(req);
  res.send('Hello World!');
});

app.get('/admin', (req, res) => res.send("Hello admin"));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
