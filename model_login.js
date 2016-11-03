var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended:true})

// rota via GET

app.get('/login', function (req, res) {
  res.send('Login efetuado')
})

app.listen(3000)