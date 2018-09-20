var connection = require('./../config');

module.exports.LibraryData = function (req, res) {
  connection.query('select * from book_list', (err, result) => {
    if (err) throw err;
    console.log(result)
    res.end(JSON.stringify(result));

  })
}

module.exports.addBook = function (req, res) {
 
  console.log(req.body)
  var users = {
    "book_name": req.body.book_name,
    "book_number": req.body.book_number,
    "empolyee_name": req.body.empolyee_name,
    "book_auther": req.body.book_auther,
    "book_status": req.body.book_status,
  }
  
  connection.query('INSERT INTO  book_list SET ?', users, function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    }
     else {
      res.json({
        status: true,
        data: results,
        fields: fields,
        message: 'book information  insert sucessfully'
      })
    }
  });
}

module.exports.deleteBook = function (req, res) {
console.log(req.params.book_id)
  connection.query('DELETE FROM book_list WHERE book_id=?', [req.params.book_id], (err, rows, fields) => {
    if (!err) {
      console.log('deleted')
      res.json({
        status: true,
        message: 'Book deleted sucessfully'

      })
    } 
    else {
      console.log(err)
    }
  });
}

module.exports.updateBook = function (req, res) {
  console.log(req.body)
  let book_id = req.body.book_id
  console.log(book_id)

  var data = {
    "empolyee_name": req.body.empolyee_name,
    "book_status": req.body.book_status,
  }

  console.log(data)
  connection.query('UPDATE book_list SET ? WHERE book_id = ?', [data, book_id], function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {
      res.json({
        status: true,
        data: results,
        message: 'book List status update sucessfully'
      })
    }
  });
}