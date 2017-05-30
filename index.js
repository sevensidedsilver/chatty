const express = require('express')
const bodyParser = require('body-parser')

var app = express();

app.use(express.static('assets'))
app.use(bodyParser.json())

var messages = [];

app.get('/messages', function (req, res, next){
  res.status(200).json({message: messages})
})

app.post('/messages', function (req, res, next){
  var p = new Date()
  messages.push({message: req.body.message, time: p.getHours() + ':' + p.getMinutes()});
  res.status(200).json({message: messages})
})

app.listen(3000)
