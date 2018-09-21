var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var jwt = require('jsonwebtoken');
var connection = require('./config');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});


var list = require('./controllers/empList');
var blog=require('./controllers/blog');
var booklist = require('./controllers/library');
var Emplist = require('./controllers/get_empolyee');
var Tasklist = require('./controllers/task_list');
var authenticateController = require('./controllers/authenticate-controller');
var registerController = require('./controllers/register-controller');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
/* route to handle login and registration */
app.post('/api/register', registerController.register);
app.post('/api/login', authenticateController.authenticate);
app.put('/api/update_emp', Emplist.UpdateEmpData);
app.get('/api/list', list.listData);
app.get('/api/task_list', Tasklist.TasklistData);
app.post('/api/post_task', Tasklist.addTask);
app.get('/api/emp_data', Emplist.empData);
app.post('/api/add_empolyee', Emplist.addEmpolyee);
app.delete('/api/delete_empolyee/:id', Emplist.deleteEmpolyee);
app.put('/api/update_empolyeeData', Emplist.UpdateEmpAllData);
app.get('/api/search_empolyee/:keyword', Emplist.searchEmpolyeeData);
///----------------------------------library--------------------------------
app.get('/api/book_list', booklist.LibraryData);
app.post('/api/add_book', booklist.addBook);
app.delete('/api/delete_book/:book_id', booklist.deleteBook);
app.put('/api/update_booklist', booklist.updateBook);
////

app.get('/api/blogs', blog.blogData);
app.post('/api/addblogs', blog.addBlog);

app.listen(8000);
