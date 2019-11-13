var express = require('express')
var router = require('./router')

var app = express()

app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('./node_modules/'))

//引入art-template
app.engine('html', require('express-art-template'));

app.use(router)

app.listen(3000, function () {
  console.log('localhost:3000')
})