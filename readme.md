# 基于node.js的express框架的学生后台管理系统

## 第一天 完成基础配置和路由设计。

### 后台管理主页以及数据的引入
 引用bootstrap模板
### 路由设计
 请求方法 | 请求路径 | 参数 | 作用 
  -------|---------|----|-----
 get|/students| |渲染首页
 get|/students/new| |渲染添加学生页面
 post|/students/new|name,age,sex,hobbies|处理添加学生请求
 get|/students/edit|id |渲染编辑页面
 post|/students/edit|name,age,sex,hobbies|处理编辑学生信息请求
 get|/students/delete|id |处理删除学生请求

 ## 第二天 完成主要操作功能

 ### 完成路由配置

 ### 完成添加学生信息，修改学生信息，删除学生信息功能
  