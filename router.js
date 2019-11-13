var express = require('express')
var fs = require('fs')

var router = express.Router()

router.get('/', function (req, res) {
  fs.readFile('./views/db.json', 'utf8', function(err, data) {
    if (err) {
      return res.status(500).send('读取文件失败。');
    }
    console.log(typeof(JSON.parse(data)));
    res.render('index.html', { "students": JSON.parse(data) });
  })
})
router.get('/students/new', function (req, res) {
  res.send('我是添加学生信息界面');
})

module.exports = router