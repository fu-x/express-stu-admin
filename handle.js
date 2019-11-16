var fs = require('fs')

var dataPath = './views/db.json'

//读取学生信息
exports.findData = function(callBack){
  fs.readFile(dataPath, 'utf8', function(err, data) {
    if(err){
      return callBack(err);
    }else{
      if(data === "") data = "[]";
      callBack(null, data);
    }
  })
}

//添加学生信息
exports.saveData = function(newData, data, callBack){
      var fileData = JSON.parse(data);
      //处理id问题
      console.log(fileData);
      if(fileData.length === 0) {
        newData.id = 1;
      }else {
        console.log(666)
        newData.id = fileData[fileData.length-1].id + 1;
      }
      fileData.push(newData);
      fileData = JSON.stringify(fileData);
      fs.writeFile(dataPath, fileData, function(err){
        if(err){
          return callBack(err);
        }else{
          callBack(null);
        }
      })
}

//根据id查找单个学生信息
exports.editData = function(id, fileData, callBack){
  var student = fileData.find(function(item){
    return item.id === id;
  })
  if(student.sex === '男'){
    student.male = 'checked';
  }else{
    student.female = 'checked';
  }
  callBack(student);
}

//更改学生信息
exports.updata = function(editData, fileData, callBack){
  editData.id = parseInt(editData.id);
  fileData.splice(editData.id-1,1,editData);
  console.log(fileData);
  fs.writeFile(dataPath, JSON.stringify(fileData), function(err){
    if(err){
      return callBack(err);
    }
    else{
      callBack(null);
    }
  })
}

//根据id删除学生信息
exports.delete = function(id, fileData, callBack){
  fileData.splice(id-1, 1);
  fs.writeFile(dataPath, fileData, function(err){
    if(err){
      return callBack(err);
    }else{
      callBack(null);
    }
  })
}
