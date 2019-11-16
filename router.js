var express = require('express')
var handle = require('./handle')

var router = express.Router()

//渲染学生列表
router.get('/', function (req, res) {
  handle.findData(function(err, data){
    if (err) {
      return res.status(500).send("读取数据失败了。。。");
    }
    res.render('index.html', { "students": JSON.parse(data) });
  })
})

//渲染添加学生页面
router.get('/students/new', function (req, res) {
  res.render('new.html');
})

//处理添加学生请求
router.post('/students/new',function (req, res) {
  handle.findData(function(err, data){
    if(err){
      return res.status(500).send("读取数据失败了。。。");
    }else{
      handle.saveData(req.body, data, function(err){
        if(err){
          return res.status(500).send("读取数据失败了。。。");
        }else{
          res.redirect('/');
        }
      })
    }
  })
})

//渲染编辑学生信息页面
router.get('/students/edit', function (req, res) {
  handle.findData(function(err, data){
    if(err){
      return res.status(500).send("读取数据失败了。。。");
    }else{
      var id = parseInt(req.query.id);
      handle.editData(id, JSON.parse(data), function(studentData){
        res.render('edit.html',studentData);
      })
    }
  })
})

//处理编辑学生信息请求
router.post('/students/edit', function(req, res){
  handle.findData(function(err, data){
    if(err){
      return res.status(500).send("读取数据失败了。。。");
    }else{
      handle.updata(req.body, JSON.parse(data), function(err){
        if(err){
          return res.status(500).send("读取数据失败了。。。");
        }else{
          res.redirect('/');
        }
      })
    }
  })
})

//处理删除学生请求
router.get('/students/delete', function(req, res){
  handle.findData(function(err,data){
    if(err){      
      return res.status(500).send("读取数据失败了。。。");
    }else{
      handle.delete(req.query.id, JSON.parse(data), function(err){
        if(err){
          return res.status(500).send("读取数据失败了。。。");
        }else{
          res.redirect('/');
        }
      })
    }
  })
})

module.exports = router
